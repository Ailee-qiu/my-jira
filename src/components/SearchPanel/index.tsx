import { Button, DatePicker, Form, Input, Select, Spin, TreeSelect } from 'antd';
import moment from 'moment';
import { useRef, useState } from 'react';
import { currency, unit } from '../../common/constant';
import { Project, User } from '../../common/type';
import './index.less';
interface SearchPanelProps {
    users:User[];
    param:Partial<Pick<Project, "name" | "personId">>;
    setParam:(param:SearchPanelProps["param"]) => void
}
export const SearchPanel = (
    // {users,param,setParam}:SearchPanelProps
    ) => {
        const {RangePicker} = DatePicker
    const [loading,setLoading] = useState<boolean>(false)
    const formItemLayout = {
        labelCol:{flex:'106px'},
        labelWrap:true,
        colon:false,
        preserve:false,
    }
    const formRef = useRef(null)
    const [form ]= Form.useForm()
    // useEffect(()=>{
    //     const param = formRef?.current.getFieldsValue()
    // },[])
    const queryProject = (value: any)=>{
        // const param = formRef?.current.getFieldsValue()
        const {date,account,currency} = form.getFieldsValue()
        const startDate = moment(date[0]).format('YYYY-MM-DD');
        const endDate = moment(date[1]).format('YYYY-MM-DD')
        console.log(startDate,endDate)
    }
    return (
        <Spin spinning={loading}>
            <Form {...formItemLayout} 
            form={form} 
            onFinish={queryProject} 
            ref={formRef}
            style={{display:'block'}}
        >
            <div className={'c-search-panel'}>
            <div className={'leftContent'}
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fill, ${348}px)`,
            }}>
                     <Form.Item name={"date"} label={"起止日期"} rules={[
                    {
                        required:true,
                        message:'please choose the date'
                    }
                ]}>
                    <RangePicker/>
                </Form.Item>
            <Form.Item name={"account"} label={"编码"}>
                <Input
                placeholder={'请输入'}
                type='text'
                /> 
            </Form.Item>
            <Form.Item name={"currency"} label={"币种"}>
                <Select
                mode='multiple'
                placeholder='please select'
                allowClear
                options={currency}
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                />
            </Form.Item>
            <Form.Item name={"unit"} label={"单位"}>
                <TreeSelect
                treeData={unit}
                treeCheckable='true'
                showCheckedStrategy='SHOW_PARENT'
                placeholder='please select'
                />
            </Form.Item>
            </div>
            <div className={'rightBtn'}>
                <Button type='primary' htmlType='submit' style={{marginRight:12}}>
                    查询
                </Button>
            </div>
            </div>
        </Form>
        </Spin>
        
    );
};

export default SearchPanel;