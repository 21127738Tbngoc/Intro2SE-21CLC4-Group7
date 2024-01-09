import React, {createContext, useEffect, useState} from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    let lastStage = JSON.parse(localStorage.getItem("cart"))
    const [cartItems, setCartItems] = useState(lastStage.cartItems || []);
    const [allProducts, setAllProducts] = useState(lastStage.allProducts || []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/products/");
                const data = await response.json();
                setAllProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        if (allProducts.length === 0) {
            fetchProducts();
        }
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => [...prev, itemId]);
    };


    const remove1FromCart = (itemId) => {
        const indexToRemove = cartItems.indexOf(itemId);
        if (indexToRemove !== -1) {
            const updatedCart = [...cartItems];
            updatedCart.splice(indexToRemove, 1);
            setCartItems(updatedCart);
        }
    };

    const removeallFromCart = (itemId) => {
        setCartItems((prev) => prev.filter((item) => item !== itemId));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId of cartItems) {
            let itemInfo = allProducts.find((product) => product._id === itemId);
            totalAmount += itemInfo.price;
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        return cartItems.length;
    };

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        allProducts,
        cartItems,
        addToCart,
        removeallFromCart,
        remove1FromCart,
    };

    let currentStage = {
        cartItems: cartItems,
        allProducts: allProducts
    }

    localStorage.setItem("cart", JSON.stringify(currentStage))
    return (

        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
