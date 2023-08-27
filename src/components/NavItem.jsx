import React from "react";

const NavItem = ({ children }) => {
	return (
		<li>
			<a href="#" className="block text-lg font-bold text-neutral-900 md:border-b-2 md:border-orange-400/0 md:py-12 md:text-base md:font-normal md:text-neutral-800 md:duration-200 md:ease-in-out md:hover:border-orange-400 md:hover:text-neutral-900">
				{children}
			</a>
		</li>
	);
};

export default NavItem;
