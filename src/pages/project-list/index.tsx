import { useRef, useState } from "react";
import SearchPanel from "../../components/CSearchPanel";
import CDrawer from "../../components/Drawer";
import CTable from "../../components/Table";
import useTableColumnsHook from "./useTableColumnsHook";
import { Table } from "antd";
import BExportExcel from "../../components/BExportExcel";
import useSearchItemsHook from "./useSearchItemsHook";
import CSearchPanel from "../../components/CSearchPanel";
import axios from "axios";

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
			axios.get('api/user').then((response) => {
				console.log(response.data, 1)
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
