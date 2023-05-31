import './style.css';
import { getProducts } from './src/api/getProducts';
import { createProductCard } from './src/components/productCard';

window.addEventListener('DOMContentLoaded', async () => {
	const products = await getProducts();
	document.getElementById('products').innerHTML = products
		.map((product) => createProductCard(product))
		.join('');
});
