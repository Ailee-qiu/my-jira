import { Table } from "antd";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import BExportExcel from "../../components/BExportExcel";
import CSearchPanel from "../../components/CSearchPanel";
import CDrawer from "../../components/Drawer";
import CTable from "../../components/Table";
import useSearchItemsHook from "./useSearchItemsHook";
import useTableColumnsHook from "./useTableColumnsHook";

const ProjectList = () => {
	const formRef = useRef(null) as any
    const [visible,setVisible] = useState(false)
    const [selectedRowKeys, setSelectedRowKeys] = useState<any>([])
    const [selectedAll,setSelectedAll] = useState(false)
    const showDrawer =()=>{
        setVisible(true)
    }
    const close = ()=>{
        setVisible(false)
    }
    useEffect(()=>{
      axios.get('/user').then(res => {
        console.log(res.data)
      })
    })

    const rowSelection ={
        fixed:true,
        selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
        onchange: (_selectedRowKeys: React.Key[], _selectedRows: any[]) => {
          setSelectedRowKeys(_selectedRowKeys)
        },
        onTriggerSelectAll:setSelectedAll
    }
    const SearchList = useSearchItemsHook()
    const columns = useTableColumnsHook()

    const dataSource = [
        {
          key: '1',
          logBizId: '001',
          monitorName: 'os',
          monitorLevel: '1',
          createTime:'1',
          accountNo:"1",
          accountName:"1",
          balance:'1',
          currency:'1',
          unitCode:'1',
          unitName:'1',
          operate:'1',
        },
        {
          key: '2',
          logBizId: '002',
          monitorName: 'os',
          monitorLevel: '1',
          createTime:'1',
          accountNo:"1",
          accountName:"1",
          balance:'1',
          currency:'1',
          unitCode:'1',
          unitName:'1',
          operate:'1',
        },
      ];

		const onQuery = () =>{
			const y = formRef.current.form?.getFieldsValue()
      axios.get('/user').then(res => {
        console.log(res.data)
      })
			// console.log(y)
		}
    return (
        <div className="global-table-search-content">
            <CSearchPanel
						ref={formRef}
            onFished={onQuery}
            formItems={SearchList}/>
            <div className="global-table-content">
            <CTable
            dataSource={dataSource}
            columns={columns as any}
            rowSelection={rowSelection}
            >
            </CTable>
            </div>
            <div className="global-footer-fixed">
            <BExportExcel/>
            </div>
            <CDrawer visible={visible} onClose={()=> close()}></CDrawer>
        </div>
    );
};

export default ProjectList;
