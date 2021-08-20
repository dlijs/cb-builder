import React, { FC, useState, useRef, useEffect } from 'react';
import LoadMoreListView, { LoadMoreListAttributes } from '@alitajs/list-view';
import { Flex } from 'antd-mobile';
import { SearchView } from '@alitajs/antd-mobile-plus';
import { qryCustInfoListByKey } from './service';
import ListNoData from './components/ListNoData';
import SelectedImg from './assets/selected.png';
import styles from './index.less';

interface GroupCustomersPagePageProps {}

let chooseUserInfo = {};

const ItemContentKeyArr = [
  { title: '集团编码', key: 'cust_code' },
  { title: '集团地址', key: 'cust_addr' },
  { title: '客户联系人', key: 'chinese_name' },
  { title: '联系人电话号码', key: 'mobile_phone' },
];

const GroupCustomersPagePage: FC<GroupCustomersPagePageProps> = (props) => {
  // const { location, dispatch } = props;
  // const { modalName, saveKey, disposeKey } = location.query;
  const [searchValue, setSearchValue] = useState('');
  const [chooseIdSet, setChooseIdSet] = useState(new Set());
  const [listReqParams, setListReqParams] = useState({
    query_type: '1',
    key_word: searchValue,
    page: 1, //页码
    rows: 10,
  } as any);
  const loadMoreList = useRef<LoadMoreListAttributes>(null);
  // 这里发起了初始化请求
  useEffect(() => {
    // setPageNavBar({
    //   pagePath: location.pathname,
    //   navBar: {
    //     pageTitle: '集团客户',
    //   },
    // });
  }, []);

  const queryOppInfoList = (data: any) => {
    let params = {
      ...data,
      key_word: searchValue,
    };
    params.page = `${params?.page}`;
    params.rows = `${params?.rows}`;
    if (params.refresh) {
      delete params.refresh;
    }
    return new Promise(async (res, rej) => {
      try {
        const { data: listData = {} } = await qryCustInfoListByKey(params);
        console.log('listData', listData);
        const { rows = {} } = listData;
        const { list = {} } = rows;
        console.log('{ rows: list.rows || [] }', { rows: list.rows || [] });
        res({ rows: list.rows || [] });
      } catch (error) {
        console.log('error', error);
        res({ rows: [] });
      }
    });
  };

  useEffect(() => {
    if (loadMoreList.current && listReqParams.refresh) {
      loadMoreList.current.reloadDataSource();
    }
  }, [listReqParams]);

  const onCustItemClick = (data: any) => {
    const mData = data;
    const { cust_id } = mData;
    const newCusIdSet = new Set();
    if (!chooseIdSet.has(cust_id)) {
      chooseUserInfo = { ...data };
      newCusIdSet.add(cust_id);
    }
    setChooseIdSet(newCusIdSet);
  };

  const onSubmit = (value: string) => {
    setChooseIdSet(new Set());
    setListReqParams({
      ...listReqParams,
      key_word: value,
      page: 1,
      refresh: true,
    });
    setSearchValue(value);
  };

  const onClickBt = () => {
    // 确定按钮事件监听

    // dispatch!({
    //   type: `${modalName}/${disposeKey}`,
    //   payload: {
    //     [saveKey]: chooseUserInfo,
    //   },
    // });
    // router.goback();
  };

  const renderOppInfoRow = (data: any) => {
    return (
      <div className={styles.oppInfoItem} onClick={() => onCustItemClick(data)}>
        {chooseIdSet.has(data.cust_id) && (
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
          >
            <img
              style={{ height: '0.72rem', width: '0.72rem' }}
              src={SelectedImg}
            />
          </div>
        )}
        <div className={styles.dataStyle}>
          <div className={styles.dataTitle}>
            <span className={styles.dataTitleSpan}>{data.cust_name}</span>
          </div>
          {ItemContentKeyArr.map((row, index: number) => (
            <div
              key={`i${index + 1}`}
              style={{ marginTop: 16 }}
              className={styles.dataContentRow}
            >
              <span className={styles.dataContentRowSpan}>{row.title}：</span>
              <div style={{ flex: 1 }}>
                <span className={styles.dataContentRowSpan}>
                  {row.key === 'regionName' &&
                    `${data[row.key]}${data.countyName}`}
                  {row.key !== 'regionName' && data[row.key]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSearchBar = () => {
    return (
      <Flex className={styles.searchBar}>
        <Flex.Item className={styles.searchInput}>
          <SearchView
            maxHeight="70vh"
            placeholder="请输入集团名称/联系人号码"
            // filterData={FILTER_DATA}
            filterValue={searchValue}
            showLeft={false}
            onFilterChange={(e) => {
              setSearchValue(e.value);
            }}
            onSearch={onSubmit}
          />
        </Flex.Item>
      </Flex>
    );
  };

  // 底部按钮
  const renderBottomBt = () => {
    return (
      <Flex direction="row" className={styles.footer}>
        <Flex.Item>
          <div
            onClick={() => onClickBt()}
            className={`${styles.btView} ${styles.leftBt}`}
          >
            确定
          </div>
        </Flex.Item>
      </Flex>
    );
  };

  return (
    <div className={styles.container}>
      <Flex direction="column" className={styles.main}>
        {renderSearchBar()}
        <Flex.Item className={styles.list}>
          <LoadMoreListView
            ref={loadMoreList}
            requestFunc={queryOppInfoList}
            renderRow={renderOppInfoRow}
            requestParams={listReqParams}
            alias={{ data: 'rows', pageSize: 'rows' }}
            noData={<ListNoData />}
          />
        </Flex.Item>
        {!!chooseIdSet.size && renderBottomBt()}
      </Flex>
    </div>
  );
};

export default GroupCustomersPagePage;
