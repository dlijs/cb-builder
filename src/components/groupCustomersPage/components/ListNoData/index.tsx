import React, { FC } from 'react';
import { Flex } from 'antd-mobile';
import listNoData from '../../assets/listnodata.png';
import styles from './index.less';

interface BusinessCellProps {
  remark?: string;
}

const ListNoData: FC<BusinessCellProps> = (props) => {
  const { remark = '暂无数据' } = props;
  return (
    <Flex direction="column" className={styles.listNoData}>
      <img src={listNoData} alt="" />
      <span>{remark}</span>
    </Flex>
  );
};

export default ListNoData;
