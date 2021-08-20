/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-08-02 18:01:17
 */
import request from 'umi-request';

export async function qryCustInfoListByKe(params: any): Promise<any> {
  return new Promise((resolve, reject) => {
    request
      .post('/api/list', {
        ...params,
      })
      .then((data) => {
        const res = {
          data: [
            {
              id: '1',
              address: '福建省福州市西南路1号',
              custManager: '张新城',
              phone: '15687890876',
              statusCd: 'potential',
              custName: '西双版纳有限公司',
            },
            {
              id: '2',
              address: '福建省福州市西南路2号',
              custManager: '张新城',
              phone: '15687890876',
              statusCd: 'formal',
              custName: '浩鲸科技',
            },
            {
              id: '3',
              address: '福建省福州市西南路3号',
              custManager: '张新城',
              phone: '15687890876',
              statusCd: 'potential',
              custName: '福建省鲸鱼公司',
            },
            {
              id: '21',
              address: '福建省福州市西南路2号',
              custManager: '张新城',
              phone: '15687890876',
              statusCd: 'formal',
              custName: '浩鲸科技',
            },
            {
              id: '31',
              address: '福建省福州市西南路3号',
              custManager: '张新城',
              phone: '15687890876',
              statusCd: 'potential',
              custName: '福建省鲸鱼公司',
            },
          ],
          total: 5,
        };

        resolve(res);
      });
  });
}
