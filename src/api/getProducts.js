import { productsURL } from '../constans';

export const getProducts = async () => {
	const response = await fetch(productsURL);
	const products = await response.json();
	return products;
};
