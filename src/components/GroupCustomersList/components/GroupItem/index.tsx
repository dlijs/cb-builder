import React, { FC } from 'react';
import styles from './index.less';
interface GroupItem {
  indexMap: any[];
  statusCdObj: any;
  rowData: any;
  onClick: (data: any) => void;
}
const GroupItem: FC<GroupItem> = (props) => {
  const { indexMap = [], statusCdObj = {}, rowData = {}, onClick } = props;
  //字段名可根据实际接口修改
  const { custName = '', statusCd, id } = rowData;
  const color = statusCdObj[statusCd]?.color;
  const bgColor = statusCdObj[statusCd]?.bgColor;
  const statusCdText = statusCdObj[statusCd]?.statusCdText;
  return (
    <div
      className={styles.groupItem}
      key={id}
      onClick={() => {
        if (onClick) {
          onClick(rowData);
        }
      }}
    >
      <div className={styles.rowCell}>
        <div className={styles.title}>{custName}</div>
        <div>
          <span
            style={{ color, backgroundColor: bgColor }}
            className={styles.statusText}
          >
            {statusCdText}
          </span>
        </div>
      </div>
      {indexMap.map((item, index) => {
        const { label, key } = item;
        return (
          <div key={`${key}${index}`} className={styles.indexMapText}>
            {label}：{rowData[key]}
          </div>
        );
      })}
    </div>
  );
};

export default GroupItem;
