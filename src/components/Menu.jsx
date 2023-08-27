import React from "react";

const Menu = ({ children, menuOpen = true, setMenuOpen }) => {
	return (
		<div className={`pointer-events-none absolute inset-0 duration-300 ease-in-out ${menuOpen ? "bg-black/70" : "bg-black/0"} select-none`}>
			<div className={`pointer-events-auto absolute h-full w-[70%] max-w-[24rem] bg-white duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-[150%]"}`}>
				<div className="w-fit cursor-pointer p-6 text-neutral-800 duration-200 ease-in-out hover:text-neutral-900" onClick={() => setMenuOpen(false)}>
					<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
						<path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fill-rule="evenodd" />
					</svg>
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Menu;
