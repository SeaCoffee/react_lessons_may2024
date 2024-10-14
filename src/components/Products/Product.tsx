import React from 'react';
import {IProductTypes} from "../Interfaces/Interfaces";

interface IProps {
    product: IProductTypes;
}

const Product: React.FC<IProps> = ({ product }) => {
    const {
        id,
        title,
        description,
        category,
        price,
        discountPercentage,
        rating,
        stock,
        tags,
        brand,
        sku,
        weight,
        dimensions,
        warrantyInformation,
        shippingInformation,
        availabilityStatus,
        reviews,
        returnPolicy,
        minimumOrderQuantity,
        meta,
        thumbnail,
        images
    } = product;

    return (
        <div>
            <h2>{title}</h2>
            <ul>
                <li>ID: {id}</li>
                <li>Description: {description}</li>
                <li>Category: {category}</li>
                <li>Price: ${price}</li>
                <li>Discount: {discountPercentage}%</li>
                <li>Rating: {rating} stars</li>
                <li>Stock: {stock}</li>
                <li>Brand: {brand}</li>
                <li>SKU: {sku}</li>
                <li>Weight: {weight}g</li>
                <li>Dimensions: {dimensions.width}x{dimensions.height}x{dimensions.depth}</li>
                <li>Warranty: {warrantyInformation}</li>
                <li>Shipping: {shippingInformation}</li>
                <li>Status: {availabilityStatus}</li>
                <li>Return Policy: {returnPolicy}</li>
                <li>Minimum Order Quantity: {minimumOrderQuantity}</li>
                <li>Meta: Created at {meta.createdAt}, Updated at {meta.updatedAt}</li>
            </ul>

            <h3>Tags</h3>
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>

            <h3>Reviews</h3>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <p>Reviewer: {review.reviewerName}</p>
                        <p>Rating: {review.rating}</p>
                        <p>Comment: {review.comment}</p>
                        <p>Date: {review.date}</p>
                    </li>
                ))}
            </ul>

            <h3>Images</h3>
            <ul>
                {images.map((image, index) => (
                    <li key={index}>
                        <img src={image} alt={`Product image`} width="250" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Product;
