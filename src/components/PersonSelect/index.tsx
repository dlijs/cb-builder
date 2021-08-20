import React, { FC, useState, useRef } from 'react';
import { SearchView, Empty } from '@alitajs/antd-mobile-plus';
import { qryProdcutList } from './service';
import { FILTER_DATA } from './const';
import LoadMoreListView, { LoadMoreListAttributes } from '@alitajs/list-view';
import ProductItem from './components/ProductItem';
import styles from './index.less';

interface ProductSelectProps {}

const ProductSelect: FC<ProductSelectProps> = () => {
  const [curKey, setCurKey] = useState(0);
  const [filterValue, setFilterValue] = useState(FILTER_DATA[0].value);
  const tabs = [
    { title: '产品', key: 0 },
    { title: '商品', key: 1 },
  ];
  const [requestParams, setRequestParams] = useState({
    pageSize: 10,
    page: 1,
    searchVal: '',
    type: '',
  });
  const loadMoreList = useRef<LoadMoreListAttributes>(null);
  const onTabsChanges = (key: number) => {
    setCurKey(key);
    // 切换的时候更换参数，获取不同的数据
    ///////////////////////////////////////
  };
  const onSearch = (val: string) => {
    console.log('onSearch', val);
    setRequestParams({ ...requestParams, searchVal: val });
    loadMoreList.current?.reloadDataSource();
  };
  const renderRow = (item: any) => {
    return (
      <ProductItem
        rowData={item}
        onClick={(data) => {
          console.log(data);
        }}
      />
    );
  };
  return (
    <div>
      <div className={styles.tabs}>
        {tabs.map((it) => {
          const { title, key } = it;
          return (
            <div
              key={key}
              className={styles.tabsItem}
              onClick={() => {
                onTabsChanges(key);
              }}
            >
              <span className={curKey === key ? styles.activeItem : ''}>
                {title}
              </span>
            </div>
          );
        })}
      </div>
      <SearchView
        maxHeight="70vh"
        placeholder="请输入商品名称"
        filterData={FILTER_DATA}
        filterValue={filterValue}
        showLeft={true}
        onFilterChange={(e) => {
          setFilterValue(e.value);
        }}
        onSearch={onSearch}
      />
      <div className={styles.listData}>
        <LoadMoreListView
          ref={loadMoreList}
          requestFunc={qryProdcutList}
          renderRow={renderRow}
          requestParams={requestParams}
          noData={<Empty type="empty" />}
          pullToRefresh={<></>}
          // alias={{ data: 'list', }}
        />
      </div>
    </div>
  );
};

export default ProductSelect;
