import DiscordProvider from "next-auth/providers/discord";
import connectDB from "@/config/database";
import User from "@/models/User";

export const authOptions = {
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID,
			clientSecret: process.env.DISCORD_CLIENT_SECRET,
			authorization: { params: { scope: "identify email" } },
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: "/auth/signin", // Custom login page
		// You can also set up custom error pages if needed:
		// error: '/auth/error',
		// signOut: '/auth/signout',
	},
	callbacks: {
		// Invoked on successful login
		async signIn({ user, account, profile }) {
			// 1. connect to the db
			await connectDB();

			// Log to inspect the available properties
			console.log("User:", user);
			console.log("Profile:", profile);

			// Check if the user exists in the DB
			const userExists = await User.findOne({ email: user.email });

			if (!userExists) {
				const username = user.name.slice(0, 20);

				await User.create({
					email: user.email,
					username,
					image: user.image,
				});
			}

			// 4. return true to allow the user to sign in
			return true;
		},

		// Session callback function that modifies the session object
		async session({ session }) {
			await connectDB(); // Ensure DB is connected

			const user = await User.findOne({ email: session.user.email });
			if (!user) {
				throw new Error("User not found during session callback");
			}

			session.user.id = user._id.toString();
			return session;
		},
		async redirect({ url, baseUrl }) {
			// Redirect users to the home page after login or logout
			return baseUrl; // baseUrl refers to the root of your site, e.g., http://localhost:3000
		},
	},
};
