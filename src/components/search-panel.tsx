import { Button, DatePicker, Form, Input, Select, Spin } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Project, User } from '../common/type';
import moment from 'moment';
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
    const options: any[] | undefined = [
        {
          value: '10',
          label: '人民币',
        },
        {
          value: '21',
          label: '港币',
        },
        {
          value: '32',
          label: '美元',
        }]
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
            style={{ marginBottom: "2rem" }} 
            layout={"inline"} 
            onFinish={queryProject} 
            ref={formRef}>
                <Form.Item name={"date"} label={"日期"} rules={[
                    {
                        required:true,
                        message:'please choose the date'
                    }
                ]}>
                    <RangePicker/>
                </Form.Item>
            <Form.Item name={"account"} label={"账号"}>
                <Input
                placeholder={'账号'}
                type='text'
                /> 
            </Form.Item>
            <Form.Item name={"currency"} label={"币种"}>
                <Select
                mode='multiple'
                placeholder='please select'
                allowClear
                style={{ width: 150 }}
                size={'middle'}
                options={options}
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit' style={{margin:40}}>
                    查询
                </Button>
            </Form.Item>
        </Form>
        </Spin>
        
    );
};

export default SearchPanel;