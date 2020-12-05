import React, {useState, useEffect} from 'react'
import {DiaryProductsListItem} from '../DiaryProductsListItem'
import styles from './DiaryProductsList.module.css'

const DiaryProductsList = () => {
    const [products, setProducts] = useState([
        {id: 1, name: 'Баклажан', weight: '100', calories: '320'},
        {id: 2, name: 'Мясо птицы', weight: '100', calories: '320'},
        {id: 3, name: 'Хлеб', weight: '100', calories: '320'},
        {id: 4, name: 'Орех', weight: '100', calories: '320'},
        {id: 5, name: 'Мясо свинное', weight: '100', calories: '320'},
        {id: 6, name: 'Баклажан', weight: '100', calories: '320'},
        {id: 7, name: 'Мясо птицы', weight: '100', calories: '320'},
        {id: 8, name: 'Хлеб', weight: '100', calories: '320'},
        {id: 9, name: 'Орех', weight: '100', calories: '320'}
    ]);
    const [isLoading, setLoading] = useState(false);

    const handleRemoveProduct = (id) => {
        const res = products.filter(product => product.id !== id);
        setProducts(res);
    }

    useEffect(() => {

    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {isLoading && ''}
                {products.length !== 0 && products.map(product => (
                    <DiaryProductsListItem key={product.id} {...product} onRemove={handleRemoveProduct} />
                ))}
            </div>
        </div>
    )
}

export default DiaryProductsList;
