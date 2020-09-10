import React from 'react';

// Components
import Product from './Product';

//Context
import { useContext } from 'react';
import { ProductContext }  from '../contexts/ProductContext';


const Products = () => {
	
	// const value = useContext(ProductContext); //see destructuring below
	const { products, addItem } = useContext(ProductContext);
	console.log(products);
	
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
