import React, {useState, useEffect} from 'react'
import DiaryProductsListItem from "../DiaryProductLIstItem/index"
import styles from './DiaryProductsList.module.css'

const DiaryProductsList = () => {
    const [products, setProducts] = useState([
  
    ]);
    // const [isLoading, setLoading] = useState(false);

    // const handleRemoveProduct = (id) => {
    //     const res = products.filter(product => product._id !== id);
    //     setProducts(res);
    // }

    // useEffect(() => {

    // }, []);

    return (
        <div className={styles.wrapper}>
            <ul className={styles.container}>
                {/* {isLoading && ''} */}
                {products.length !== 0 && products.map(product => (
                    <DiaryProductsListItem  
                    key={product._id}
                    title={product.title.ru}
                    weight={product.weight}
                    calories={product.calories}/>
                ))}
            </ul>
        </div>
    )
}

  export default DiaryProductsList;
