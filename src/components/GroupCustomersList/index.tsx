/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-08-02 11:31:35
 */
import React, { FC, useState, useRef } from 'react';
import { SearchView, Empty } from '@alitajs/antd-mobile-plus';
import { FILTER_DATA, STATUS_OBJ } from './const';
import { qryCustInfoListByKe } from './service';
import LoadMoreListView, { LoadMoreListAttributes } from '@alitajs/list-view';
import GroupItem from './components/GroupItem';
import styles from './index.less';

interface GroupCustomersListProps {}

const GroupCustomersList: FC<GroupCustomersListProps> = () => {
  const [filterValue, setFilterValue] = useState(FILTER_DATA[0].value);
  const [requestParams, setRequestParams] = useState({
    pageSize: 10,
    page: 1,
    searchVal: '',
  });
  const loadMoreList = useRef<LoadMoreListAttributes>(null);
  const onSearch = (val: string) => {
    console.log('onSearch', val);
    setRequestParams({ ...requestParams, searchVal: val });
    loadMoreList.current?.reloadDataSource();
  };
  const indexMap = [
    { label: '集团地址', key: 'address' },
    { label: '客户联系人', key: 'custManager' },
    { label: '联系人电话号码', key: 'phone' },
  ];
  const renderRow = (item: any) => {
    return (
      <GroupItem
        indexMap={indexMap}
        rowData={item}
        statusCdObj={STATUS_OBJ}
        onClick={(data) => {}}
      />
    );
  };
  return (
    <div>
      <SearchView
        maxHeight="70vh"
        placeholder="请输入集团名称"
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
          requestFunc={qryCustInfoListByKe}
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

export default GroupCustomersList;
