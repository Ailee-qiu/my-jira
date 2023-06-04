import React, { useState } from 'react';
import { Table } from 'antd';
import useTableColumnsHook from '../../pages/project-list/useTableColumnsHook';
import { CTableProps } from './interface';
const CTable = (props:CTableProps) => {
  const {dataSource ,columns,rowSelection} = props
    

    return (
        <div>
          <Table 
           dataSource={dataSource}
           columns={columns} 
           rowSelection = {rowSelection}
           />
        </div>
    );
};

export default CTable;