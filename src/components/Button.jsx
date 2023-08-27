import React from "react";

const Button = ({ className, children }) => {
	return <button className={`${className} block rounded-lg border border-none bg-orange-400 py-4 text-lg font-bold text-white`}>{children}</button>;
};

export default Button;
