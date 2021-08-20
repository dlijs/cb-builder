import React, { FC, useState } from 'react';
import prodIcon from '../../assets/product.png';
import styles from './index.less';
interface ProductItem {
  rowData: any;
  onClick: (data: any) => void;
}

const ProductItem: FC<ProductItem> = (props) => {
  const { rowData = {}, onClick } = props;
  //字段名可根据实际接口修改
  const { productName = '', bizTypeName, id, imgUrl, constitute } = rowData;
  return (
    <div
      className={styles.productItem}
      key={id}
      onClick={() => {
        if (onClick) {
          onClick(rowData);
        }
      }}
    >
      <div>
        <img src={imgUrl || prodIcon} alt="" />
      </div>
      <div className={styles.rightItem}>
        <div className={styles.prodName}>{productName}</div>
        <div className={styles.itemCell}>
          业务类别：<span className={styles.labelValue}>{bizTypeName}</span>
        </div>
        <div className={styles.itemCell}>
          商品构成：<span className={styles.labelValue}>{constitute}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
