/*
 * @Descripttion:
 * @Author: wll
 * @Date: 2021-08-03 18:06:03
 */
import request from 'umi-request';
/**
 * 线索列表
 *
 * @export
 * @param {*} params
 * @returns {Promise<any>}
 */
export async function qryPersonList(params: any): Promise<any> {
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
              userName: '李可朋',
              account: '0027011609',
              offer: '总经理',
              relArea: '福建省福州市',
            },
            {
              id: '2',
              userName: '李可朋',
              account: '0027011609',
              offer: '总经理',
              relArea: '福建省福州市',
            },
            {
              id: '3',
              userName: '李可朋',
              account: '0027011609',
              offer: '总经理',
              relArea: '福建省福州市',
            },
            {
              id: '21',
              userName: '李可朋',
              account: '0027011609',
              offer: '总经理',
              relArea: '福建省福州市',
            },
          ],
          total: 5,
        };

        resolve(res);
      });
  });
}
