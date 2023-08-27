import React from "react";
import clsx from "clsx";
import animations from "../animations.module.css";

import { NavItem, Cart, Menu, CartItem, Button } from "../components";
import { logo, cartIcon, avatarImage, menuIcon } from "../assets";
import { useCart, useSetCart } from "../contexts/CartContext";
const navItems = ["collections", "men", "women", "about", "contact"];
const Navbar = () => {
	// for cartOpen state I set it to "initial" to prevent the slide out animation from happeneing the first time the page loads
	const [cartOpen, setCartOpen] = React.useState("initial");
	const [menuOpen, setMenuOpen] = React.useState(false);

	// This is the context to manage cart addition and deletion process
	const cart = useCart();
	const setCart = useSetCart();

	const cartStyle = clsx("text-neutral-800 duration-200 ease-in-out hover:text-neutral-900", { "text-neutral-900": cartOpen === true });

	function handleDelete(e, id) {
		// Delete items from cart
		const newCart = cart.filter((item) => item.id !== id);
		const deletedItem = e.target.closest("li");
		deletedItem.classList.add(animations.deleteCart);
		// Here I want to update state AFTER the animation end
		deletedItem.addEventListener("animationend", () => {
			setCart(newCart);
		});
	}
	React.useEffect(() => {
		// This will close the cart when a click event happens outside nav
		const clickEvent = (e) => {
			const target = e.target.closest("#nav");
			if (!target) {
				setCartOpen(false);
			}
		};
		document.addEventListener("click", clickEvent);
		return () => {
			document.removeEventListener("click", clickEvent);
		};
	}, []);
	return (
		<nav id="nav" className="select-none bg-white py-6 md:py-0">
			{/* container */}
			<div className="relative mx-auto flex items-center justify-between px-8 lg:container lg:p-0">
				{/* col */}
				<div className="flex items-center gap-4 md:gap-12">
					<div className="cursor-pointer text-neutral-800 duration-200 ease-in-out hover:text-neutral-900 md:hidden" onClick={() => setMenuOpen(true)}>
						{/* menuIcon */}
						<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
							<path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="currentColor" fill-rule="evenodd" />
						</svg>{" "}
					</div>
					<div>
						<img src={logo} alt="logo" className="-mt-1" />
					</div>
					<ul className="hidden gap-8 md:flex">
						{navItems.map((item, i) => (
							<NavItem key={i}>{item[0].toUpperCase() + item.slice(1)}</NavItem>
						))}
					</ul>
				</div>
				{/* col */}
				<div className="flex items-center gap-6 md:gap-12">
					<div
						className={`${cartStyle} relative cursor-pointer`}
						onClick={() =>
							setCartOpen((prev) => {
								if (prev === "initial" || prev === false) {
									return true;
								} else {
									return false;
								}
							})
						}>
						{/* numberOfItems */}
						{cart.length ? <div className="absolute bottom-full left-full grid w-6 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-orange-400 py-[0.2px] text-xs text-white">{cart.length}</div> : ""}
						{/* cartIcon */}
						<svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
								fill="currentColor"
								fill-rule="nonzero"
							/>
						</svg>
					</div>
					<div className="w-8 cursor-pointer rounded-full border-2 border-orange-400/0 duration-200 ease-in-out hover:border-orange-400 md:w-12">
						<img src={avatarImage} alt="avatar" />
					</div>
				</div>
				{/* absolute element out of the flow relative to the container element */}
				<Cart className={`${cartOpen === "initial" ? "" : cartOpen === true ? `${animations.cartIn}` : `${animations.cartOut}`} absolute left-2 right-2 top-[calc(100%+8px)] translate-x-[150%] overflow-hidden md:left-auto md:top-full md:translate-x-0 md:opacity-0`}>
					{cart.length ? (
						<>
							<ul className="w-full space-y-8 overflow-y-scroll py-6">
								{cart.map((item, i) => (
									<CartItem key={item.id} id={item.id} name={item.name} pricePerUnit={item.pricePerUnit} numberOfUnits={item.numberOfUnits} thumbnailUrl={item.thumbnailUrl} onDelete={(e) => handleDelete(e, item.id)} />
								))}
							</ul>
							<Button className={`w-full`}>Checkout</Button>
						</>
					) : (
						<>
							<p className="grid h-full w-full place-items-center font-bold ">Your cart is empty</p>
						</>
					)}
				</Cart>
			</div>
			{/* absolute element out of the flow relative to the document element */}
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
				<ul className="mt-6 space-y-4 pl-6 md:m-0 md:space-y-0 md:p-0">
					{navItems.map((item, i) => (
						<NavItem key={i}>{item[0].toUpperCase() + item.slice(1)}</NavItem>
					))}
				</ul>
			</Menu>
		</nav>
	);
};

export default Navbar;
