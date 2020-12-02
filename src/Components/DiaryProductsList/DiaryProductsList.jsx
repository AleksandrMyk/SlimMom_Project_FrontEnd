import React, {useState, useEffect} from 'react'
import {DiaryProductsListItem} from '../DiaryProductLIstItem/index'
import styles from './DiaryProductsList.module.css'
import stateProduct from "./products.json"
console.log(stateProduct.docs)
const PRODUCTS = stateProduct.docs
const DiaryProductsList = () => {
    const [products, setProducts] = useState([
        PRODUCTS
    ]);
    const [isLoading, setLoading] = useState(false);

    const handleRemoveProduct = (id) => {
        const res = products.filter(product => product._id !== id);
        setProducts(res);
    }

    useEffect(() => {

    }, []);

    return (
        <div className={styles.wrapper}>
            <ul className={styles.container}>
                {isLoading && ''}
                {PRODUCTS.length > 0 && PRODUCTS.map(product => (
                    <DiaryProductsListItem 
                    key={product._id}
                    title={product.title.ua}
                    weight={product.weight}
                    calories={product.calories}
                     onRemove={handleRemoveProduct} />
                ))}
            </ul>
        </div>
    )
}

export default DiaryProductsList;
