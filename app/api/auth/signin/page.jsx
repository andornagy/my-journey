"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoginButton from "@/components/auth/LoginButton";
import { useSession } from "next-auth/react";

const AuthLoginPage = () => {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "authenticated") {
			router.push("/");
		}
	}, [status, router]);

	// While session status is loading, show a loading message
	if (status === "loading") {
		return <p>Loading...</p>;
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
			<div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
				<h2 className="text-3xl font-semibold text-center mb-6">Sign In</h2>
				<LoginButton />
			</div>
		</div>
	);
};

export default AuthLoginPage;
