import Header from "@/components/global/Navigation";
import AuthProvider from "@/components/providers/AuthProvider";

import "@/assets/styles/globals.css";
export default function RootLayout({ children }) {
	return (
		<AuthProvider>
			<html lang="en">
				<body>
					<Header />
					<main>{children}</main>
				</body>
			</html>
		</AuthProvider>
	);
}
