import request from 'umi-request';

// 查询客户列表
export async function qryCustInfoListByKey(params: any): Promise<any> {
  return request('list/api', {
    ...params,
  } as any).then((data) => {
    const res = {
      rows: {
        list: {
          rows: [
            {
              cust_id: '1',
              cust_code: 'a1234567890',
              chinese_name: 'EnzoChan',
              mobile_phone: '1806089898989',
              cust_addr: '福建省福州市台江区xxxxx',
            },
            {
              cust_id: '2',
              cust_code: 'a1234567891',
              chinese_name: 'EnzoChan',
              mobile_phone: '1806089898989',
              cust_addr: '福建省福州市台江区xxxxx',
            },
            {
              cust_id: '3',
              cust_code: 'a1234567892',
              chinese_name: 'EnzoChan',
              mobile_phone: '1806089898989',
              cust_addr: '福建省福州市台江区xxxxx',
            },
            {
              cust_id: '4',
              cust_code: 'a1234567893',
              chinese_name: 'EnzoChan',
              mobile_phone: '1806089898989',
              cust_addr: '福建省福州市台江区xxxxx',
            },
            {
              cust_id: '5',
              cust_code: 'a1234567894',
              chinese_name: 'EnzoChan',
              mobile_phone: '1806089898989',
              cust_addr: '福建省福州市台江区xxxxx',
            },
          ],
          total: 5,
        },
      },
    };

    return { data: res };
  });
}
export async function qryProdcutList(params: any): Promise<any> {
  return new Promise((resolve, reject) => {
    request
      .post('/api/list', {
        ...params,
      })
      .then((data) => {
        const res = {
          rows: [
            {
              cust_id: '1',
              cust_code: 'a1234567890',
              chinese_name: 'EnzoChan',
              mobile_phone: '1806089898989',
              cust_addr: '福建省福州市台江区xxxxx',
            },
            {
              cust_id: '2',
              cust_code: 'a1234567891',
              chinese_name: 'EnzoChan',
              mobile_phone: '1806089898989',
              cust_addr: '福建省福州市台江区xxxxx',
            },
            {
              cust_id: '3',
              cust_code: 'a1234567892',
              chinese_name: 'EnzoChan',
              mobile_phone: '1806089898989',
              cust_addr: '福建省福州市台江区xxxxx',
            },
            {
              cust_id: '4',
              cust_code: 'a1234567893',
              chinese_name: 'EnzoChan',
              mobile_phone: '1806089898989',
              cust_addr: '福建省福州市台江区xxxxx',
            },
            {
              cust_id: '5',
              cust_code: 'a1234567894',
              chinese_name: 'EnzoChan',
              mobile_phone: '1806089898989',
              cust_addr: '福建省福州市台江区xxxxx',
            },
          ],
          total: 5,
        };

        resolve(res);
      });
  });
}
