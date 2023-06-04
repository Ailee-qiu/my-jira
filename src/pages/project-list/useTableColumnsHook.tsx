const useTableColumnsHook = () =>{ 
    const columns = [
        [
            {
              title: '预警编码',
              dataIndex: 'logBizId',
              key: 'logBizId',
              width: 200,
              fixed: 'left' as 'left',
            },
            {
              title: '方案名称',
              dataIndex: 'monitorName',
              key: 'monitorName',
              width: 180,
              ellipsis: {
                showTitle: false,
              },
            },
            {
              title: '监控级别',
              dataIndex: 'monitorLevel',
              key: 'monitorLevel',
              width: 130,
            },
            {
              title: '触发时间',
              dataIndex: 'createTime',
              key: 'createTime',
              width: 180,
            },
            {
              title: '账号',
              dataIndex: 'accountNo',
              key: 'accountNo',
              width: 200,
              ellipsis: {
                showTitle: false,
              },
            },
            {
              title: '账户名称',
              dataIndex: 'accountName',
              key: 'accountName',
              width: 200,
              ellipsis: {
                showTitle: false,
              },
            },
            {
              key: 'balance',
              title: '账户余额',
              dataIndex: 'balance',
              align: 'right',
              width: 180,
            },
            {
              key: 'currency',
              title: '币种',
              dataIndex: 'currency',
              width: 180,
            },
            {
              title: '单位编码',
              dataIndex: 'unitCode',
              key: 'unitCode',
              width: 180,
            },
            {
              title: '单位名称',
              dataIndex: 'unitName',
              key: 'unitName',
              width: 230,
              ellipsis: {
                showTitle: false,
              },
            },
            {
              title: '操作',
              dataIndex: 'operate',
              key: 'operate',
              width: 86,
              fixed: 'right' as 'right',
            },
          ],
        ]
    return columns[0]
}

export default useTableColumnsHook