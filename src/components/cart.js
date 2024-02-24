import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "./slice";
import { clearToCart } from "./slice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const totalCount = cartItems.reduce((total, item) => total + item.price, 0);

    const handleRemoveItem = (item) => {
        dispatch(removeToCart(item));
    };
    const handleClearItem = () => {
        dispatch(clearToCart());
    };

    return (
        <div className="flex justify-center">
            <div className="max-w-4xl w-full p-8">
            <div className="flex justify-between">
            <h2 className="font-bold  your-cart">Your Cart</h2>
            <button
            className="text-red-500 hover:text-red-600 font-semibold mt-[65px]"
            onClick={() => handleClearItem()}
        >
            Clear-Cart
        </button>
            </div>
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        {cartItems.length === 0 ? (
                            <h1 className="font-bold text-center text-3xl text-gray-600">Your cart is empty</h1>
                        ) : (
                            <div>
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex items-center border-b pb-4 mb-4 mt-7">
                                        <img className="w-[200px] h-[150px] object-contain rounded-md mr-4" src={item.image} alt={item.title} />
                                        <div>
                                            <h3 className="font-semibold text-lg">{item.title}</h3>
                                            <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                            <button
                                                className="text-red-500 hover:text-red-600 font-semibold"
                                                onClick={() => handleRemoveItem(item)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl mb-4">Order Summary</h2>
                        <div className="bg-white shadow-md p-6 rounded-md">
                            <div className="flex justify-between border-b pb-4 mb-4">
                                <p className="font-semibold">Product</p>
                                <p className="font-semibold">Price</p>
                            </div>
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex justify-between mb-2">
                                    <p>{item.title}</p>
                                    <p>${item.price.toFixed(2)}</p>
                                </div>
                            ))}
                            <div className="flex justify-between border-t pt-4 mt-4">
                                <p className="font-semibold">Total</p>
                                <p className="font-semibold">${totalCount.toFixed(2)}</p>
                            </div>
                            <button className="w-full bg-blue-500 text-white font-semibold py-2 mt-6 rounded-md hover:bg-blue-600">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
