"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import profileDefault from "@/assets/images/profile.png";

const ProfileDropdown = () => {
	const { data: session } = useSession();

	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

	const profileImage = session?.user?.image || profileDefault;
	const name = session?.user?.name;
	const email = session?.user?.email;
	const userId = session?.user?.id;

	console.log("Session:", session);

	if (!session) return null;
	return (
		<>
			<div className="relative">
				<Image
					id="avatarButton"
					type="button"
					data-dropdown-toggle="userDropdown"
					data-dropdown-placement="bottom-start"
					className="w-10 h-10 rounded-full cursor-pointer"
					src={profileImage}
					alt="User dropdown"
					width={100}
					height={100}
					onClick={() => setIsProfileMenuOpen((prev) => !prev)}
				/>
				{isProfileMenuOpen && (
					<div
						id="userDropdown"
						className="z-10 right-0 top-12 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
					>
						<div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
							<div>{name}</div>
							<div className="font-medium truncate">{email}</div>
						</div>
						<ul
							className="py-2 text-sm text-gray-700 dark:text-gray-200"
							aria-labelledby="avatarButton"
						>
							<li>
								<a
									href="#"
									className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Dashboard
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Settings
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Earnings
								</a>
							</li>
						</ul>
						<div className="py-1">
							<a
								onClick={() => signOut()}
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>
								Sign out
							</a>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default ProfileDropdown;
