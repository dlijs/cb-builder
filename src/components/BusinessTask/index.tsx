import React, { FC, useState, useRef } from 'react';
import { SearchView, Empty } from '@alitajs/antd-mobile-plus';
import { qryTasksList } from './service';
import { FILTER_DATA, STATUS_OBJ } from './const';
import LoadMoreListView, { LoadMoreListAttributes } from '@alitajs/list-view';
import TaskItem from './components/TaskItem';
import styles from './index.less';

interface BusinessTaskProps {}

const BusinessTask: FC<BusinessTaskProps> = () => {
  const [curKey, setCurKey] = useState(0);
  const [filterValue, setFilterValue] = useState(FILTER_DATA[0].value);
  const tabs = [
    { title: '待办', key: 0 },
    { title: '在途', key: 1 },
    { title: '归档', key: 2 },
    { title: '协同', key: 3 },
  ];
  const indexMap = [
    { label: '集团名称', key: 'custName' },
    { label: '归属区域', key: 'relArea' },
    { label: '拜访类型', key: 'visitType' },
    { label: '发起时间', key: 'createTime' },
    { label: '发起人', key: 'person' },
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
    // setRequestParams({ ...requestParams, searchVal: val });
    // loadMoreList.current?.reloadDataSource();
  };
  const renderRow = (item: any) => {
    return (
      <TaskItem
        indexMap={indexMap}
        rowData={item}
        statusCdObj={STATUS_OBJ}
        onAgreeClick={(data) => {
          console.log('同意');
          console.log(data);
        }}
        onRefuseClick={(data) => {
          console.log('拒绝');
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
          requestFunc={qryTasksList}
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

export default BusinessTask;
