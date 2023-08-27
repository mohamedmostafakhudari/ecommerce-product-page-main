import { useContext, useState, createContext } from "react";
import { productThumbnail_1 } from "../assets";
const CartContext = createContext();
const SetCartContext = createContext();

export function useCart() {
	return useContext(CartContext);
}
export function useSetCart() {
	return useContext(SetCartContext);
}
export function CartProvider({ children }) {
	const [cart, setCart] = useState([
		{
			id: crypto.randomUUID(),
			name: "name",
			pricePerUnit: 125,
			numberOfUnits: 3,
			thumbnailUrl: productThumbnail_1,
		},
	]);
	return (
		<CartContext.Provider value={cart}>
			<SetCartContext.Provider value={setCart}>{children}</SetCartContext.Provider>
		</CartContext.Provider>
	);
}
