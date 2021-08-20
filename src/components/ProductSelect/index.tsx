/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-08-03 16:38:38
 */
import React, { FC, useState, useRef } from 'react';
import { SearchView, Empty } from '@alitajs/antd-mobile-plus';
import { qryPersonList } from './service';
import LoadMoreListView, { LoadMoreListAttributes } from '@alitajs/list-view';
import selectedIcon from './assets/selected.png';
import unSelectedIcon from './assets/unselected.png';
import styles from './index.less';

interface PersonSelectProps {}

const SELECT_TYPE = 'multiple'; //单选和多选，默认为多选 radio:单选 multiple
const PersonSelect: FC<PersonSelectProps> = () => {
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
  const [selectKeys, setSelectKes] = useState([] as any);
  const loadMoreList = useRef<LoadMoreListAttributes>(null);
  const onSearch = (val: string) => {
    console.log('onSearch', val);
    setRequestParams({ ...requestParams, searchVal: val });
    loadMoreList.current?.reloadDataSource();
  };

  const rightClick = (data: any) => {
    const { id = '' } = data;
    if (selectKeys.includes(id)) {
      if (SELECT_TYPE === 'radio') {
        // 根据实际选择单选或者多选
        // 根据
        setSelectKes([]);
      } else {
        const targetList = selectKeys.filter((it: string) => it !== id);
        setSelectKes(targetList);
      }
    } else {
      if (SELECT_TYPE === 'radio') {
        setSelectKes([id]);
      } else {
        setSelectKes([...selectKeys, id]);
      }
    }
  };
  const renderRow = (item: any) => {
    //字段名可根据实际接口修改
    const { id, userName, account, offer, relArea } = item;
    return (
      <div
        className={styles.personItem}
        key={id}
        onClick={() => {
          rightClick(item);
        }}
      >
        <div className={styles.rightItem}>
          <div className={styles.userName}>
            {userName} · {account}
          </div>
          <div className={styles.itemCell}>
            岗位：<span className={styles.labelValue}>{offer}</span>
          </div>
          <div className={styles.itemCell}>
            归属区域：<span className={styles.labelValue}>{relArea}</span>
          </div>
        </div>
        <div>
          <img
            src={selectKeys.includes(id) ? selectedIcon : unSelectedIcon}
            alt=""
            className={styles.rightIcon}
          />
        </div>
      </div>
    );
  };
  const onSubmit = () => {
    console.log(selectKeys);
  };
  return (
    <div className={styles.personPage}>
      <SearchView placeholder="请输入操作员名称/工号" onSearch={onSearch} />
      <div className={styles.myContent}>
        <div className={styles.listData}>
          <LoadMoreListView
            ref={loadMoreList}
            requestFunc={qryPersonList}
            renderRow={renderRow}
            requestParams={requestParams}
            noData={<Empty type="empty" />}
            pullToRefresh={<></>}
            height={'82vh'}
            // alias={{ data: 'list', }}
          />
        </div>
      </div>
      <div className={styles.footBlock}>
        <div className={styles.footBtn} onClick={onSubmit}>
          确定
        </div>
      </div>
    </div>
  );
};

export default PersonSelect;
