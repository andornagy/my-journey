"use client";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const LoginButton = () => {
	const { data: session } = useSession();

	const [providers, setProviders] = useState(null);

	useEffect(() => {
		const setAuthProviders = async () => {
			const res = await getProviders();
			setProviders(res);
		};

		setAuthProviders();
	}, []);

	if (session) {
		return (
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={() => signOut()}
			>
				Sign out
			</button>
		);
	}
	return (
		<>
			{providers &&
				Object.values(providers).map((provider) => (
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						key={provider.name}
						onClick={() => signIn(provider.id)}
					>
						Sign in with {provider.name}
					</button>
				))}
		</>
	);
};

export default LoginButton;
