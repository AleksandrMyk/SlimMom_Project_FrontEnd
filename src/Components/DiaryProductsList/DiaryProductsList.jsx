import React from 'react'
import { connect } from "react-redux";
import DiaryProductsListItem from '../DiaryProductLIstItem/index'
import styles from './DiaryProductsList.module.css'
import productOperations from "../../Redux/product/productOperations"
const DiaryProductsList = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {products.length !== 0 && products.map(product => (
                    <DiaryProductsListItem  
                    key={product._id.$oid}
                    title={product.title.ua}
                    weight={product.weight}
                    calories={product.calories} />
                ))}
            </div>
        </div>
    )
}
const MapDispatchToProps = {
    onRemoveProduct: productOperations.removeProduct
  }; 
  export default connect(null, MapDispatchToProps)(DiaryProductsList);
  

