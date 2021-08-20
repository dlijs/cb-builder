import request from 'umi-request';
/**
 * 线索列表
 *
 * @export
 * @param {*} params
 * @returns {Promise<any>}
 */
export async function qryProdcutList(params: any): Promise<any> {
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
              productName: '互联网专线300M送200M融合套餐',
              bizTypeName: '网络专线',
              constitute: '互联网专线+集团v网',
            },
            {
              id: '2',
              productName: '互联网专线',
              bizTypeName: '网络专线',
              constitute: '互联网专线+集团v网',
            },
            {
              id: '3',
              productName: '集团V网',
              bizTypeName: '网络专线',
              constitute: '互联网专线+集团v网',
            },
            {
              id: '21',
              productName: '语音专线',
              bizTypeName: '网络专线',
              constitute: '互联网专线+集团v网',
            },
            {
              id: '31',
              productName: '集团V网+互联网专线',
              bizTypeName: '网络专线',
              constitute: '互联网专线+集团v网',
            },
          ],
          total: 5,
        };

        resolve(res);
      });
  });
}
