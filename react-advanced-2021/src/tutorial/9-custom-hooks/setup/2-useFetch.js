import { useState, useEffect,useCallback } from 'react';

export const useFetch = (url) => {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const getProducts =usecallback(async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
    console.log(products)
    },[url]);

    useEffect(() => {
    getProducts()
    }, [url,getProducts])
    return(
        [loading ,products]
    )
};