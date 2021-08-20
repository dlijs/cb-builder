import React, { FC, useState } from 'react';
import moreIcon from '../../assets/more.png';
import styles from './index.less';
interface TaskItem {
  indexMap: any[];
  statusCdObj: any;
  rowData: any;
  onAgreeClick: (data: any) => void;
  onRefuseClick: (data: any) => void;
}
const TaskItem: FC<TaskItem> = (props) => {
  const {
    indexMap = [],
    statusCdObj = {},
    rowData = {},
    onAgreeClick,
    onRefuseClick,
  } = props;
  const [showModal, setShowModal] = useState(false);
  //字段名可根据实际接口修改
  const { taskName = '', statusCd, id } = rowData;
  const color = statusCdObj[statusCd]?.color;
  const bgColor = statusCdObj[statusCd]?.bgColor;
  const statusCdText = statusCdObj[statusCd]?.statusCdText;
  return (
    <div className={styles.taskItem} key={id}>
      {showModal ? (
        <div className={styles.modalItem}>
          <div
            className={styles.leftBtn}
            onClick={() => {
              if (onRefuseClick) {
                onRefuseClick(rowData);
              }
              setShowModal(false);
            }}
          >
            拒绝
          </div>
          <div
            className={styles.rightBtn}
            onClick={() => {
              if (onAgreeClick) {
                onAgreeClick(rowData);
              }
              setShowModal(false);
            }}
          >
            同意
          </div>
        </div>
      ) : null}
      <div className={styles.rowCell}>
        <div className={styles.title}>{taskName}</div>
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
      <img
        src={moreIcon}
        alt=""
        className={styles.rightIcon}
        onClick={() => {
          setShowModal(true);
        }}
      />
    </div>
  );
};

export default TaskItem;
