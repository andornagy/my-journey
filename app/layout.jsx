import Header from "@/components/global/Navigation";
import AuthProvider from "@/components/providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/globals.css";

import "@/assets/styles/globals.css";
export default function RootLayout({ children }) {
	return (
		<AuthProvider>
			<html lang="en">
				<body>
					<Header />
					<main>{children}</main>
					<ToastContainer />
				</body>
			</html>
		</AuthProvider>
	);
}
