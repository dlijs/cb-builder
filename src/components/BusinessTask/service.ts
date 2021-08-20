import request from 'umi-request';
/**
 * 线索列表
 *
 * @export
 * @param {*} params
 * @returns {Promise<any>}
 */
export async function qryTasksList(params: any): Promise<any> {
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
              createTime: '2021-08-08 12:09:09',
              visitType: '客户拜访',
              relArea: '福建省福州市',
              statusCd: 'unconfirmed',
              custName: '西双版纳有限公司',
              taskName: '任务名称',
              person: '张张一',
            },
            {
              id: '2',
              createTime: '2021-08-08 12:09:09',
              visitType: '客户拜访',
              relArea: '福建省福州市',
              statusCd: 'confirmed',
              custName: '西双版纳有限公司',
              taskName: '任务名称',
              person: '张张一',
            },
            {
              id: '3',
              createTime: '2021-08-08 12:09:09',
              visitType: '客户拜访',
              relArea: '福建省福州市',
              statusCd: 'unconfirmed',
              custName: '西双版纳有限公司',
              taskName: '任务名称',
              person: '张张一',
            },
            {
              id: '21',
              createTime: '2021-08-08 12:09:09',
              visitType: '客户拜访',
              relArea: '福建省福州市',
              statusCd: 'confirmed',
              custName: '西双版纳有限公司',
              taskName: '任务名称',
              person: '张张一',
            },
            {
              id: '31',
              createTime: '2021-08-08 12:09:09',
              visitType: '客户拜访',
              relArea: '福建省福州市',
              statusCd: 'unconfirmed',
              custName: '西双版纳有限公司',
              taskName: '任务名称',
              person: '张张一',
            },
          ],
          total: 5,
        };

        resolve(res);
      });
  });
}
