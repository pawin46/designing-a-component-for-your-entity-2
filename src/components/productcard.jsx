// write product card here
// productcard.jsx
// import 'react';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import  ViewProductButton  from './button';

function ProductCard() {
    // Static product details
    const productImage = "https://tse4.mm.bing.net/th?id=OIP.-UlU2nlSIO-LIP4uQs6dsAHaHa&pid=Api&P=0&h=180"; // Placeholder image
    const productName = "Sample Product";
    const productPrice = "$19.99";

    return (
        <div className="card bg-white shadow-lg rounded-2xl p-4 max-w-sm">
            <img
                src={productImage}
                alt={productName}
                className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{productName}</h2>
            <p className="text-gray-600 text-base mb-4">{productPrice}</p>
            <ViewProductButton />
        </div>
    );
};

export default ProductCard;