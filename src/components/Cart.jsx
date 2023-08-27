import React from "react";

const Cart = ({ children, className }) => {
	return (
		<div id="cart" className={`${className} rounded-lg bg-white p-6 pb-8 shadow-xl shadow-black/20`}>
			<h2 className="border border-b border-neutral-200 py-6 text-lg font-bold text-neutral-900">Cart</h2>
			<div className="flex h-[12rem] min-h-[12rem] min-w-[24rem] flex-col items-center justify-between text-neutral-800">{children}</div>
		</div>
	);
};

export default Cart;
