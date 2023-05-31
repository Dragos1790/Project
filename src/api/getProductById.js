import { productsURL } from '../constans';

export const getProductById = async (id) => {
	const response = await fetch(`${productsURL}/${id}`);
	const product = await response.json();
	return product;
};
