import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from "../Products/Product";
import {IProductTypes} from "../Interfaces/Interfaces";



const Products: React.FC = () => {
    const [products, setProducts] = useState<IProductTypes[]>([]); // Массив продуктов

    useEffect(() => {
        axios.get<{ products: IProductTypes[] }>('https://dummyjson.com/products')
            .then(response => {
                console.log(response.data.products);
                setProducts(response.data.products);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);
    return (
        <div>
            <h2>Products List</h2>
            <ul>
                {products.map((product) => (
                    <Product key={product.id} product={product} />

                ))}
            </ul>
        </div>
    );
};

export default Products;

