import { Navbar } from "../components";
import { CartProvider } from "../contexts/CartContext";
export const Home = () => (
	<div className="h-full bg-neutral-200">
		<CartProvider>
			<Navbar />
		</CartProvider>
	</div>
);
