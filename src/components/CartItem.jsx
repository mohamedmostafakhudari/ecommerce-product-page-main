import React from "react";
import animations from "../animations.module.css";

const CartItem = ({ children, name, pricePerUnit, numberOfUnits, thumbnailUrl, onDelete, id }) => {
	return (
		<li id={id} className={`flex w-full items-center justify-between`}>
			<div className="flex gap-4">
				<div className="w-12 overflow-hidden rounded">
					<img src={thumbnailUrl} alt="" />
				</div>
				<div className="">
					<p className="">{name}</p>
					<p>
						${pricePerUnit.toFixed(2)}&nbsp;x&nbsp;{numberOfUnits}
						&nbsp;
						<span className="font-bold tracking-wider text-neutral-900">${(pricePerUnit * numberOfUnits).toFixed(2)}</span>
					</p>
				</div>
			</div>
			<div className="cursor-pointer p-4 text-neutral-400" onClick={onDelete}>
				{/* deleteIcon */}
				<svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
					<defs>
						<path
							d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
							id="a"
						/>
					</defs>
					<use fill="currentColor" fill-rule="nonzero" xlinkHref="#a" />
				</svg>
			</div>
		</li>
	);
};

export default CartItem;
