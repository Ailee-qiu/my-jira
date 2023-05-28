import { Button, Form, Input, Select, Spin } from 'antd';
import React, { useState } from 'react';
import { Project, User } from '../common/type';
interface SearchPanelProps {
    users:User[];
    param:Partial<Pick<Project, "name" | "personId">>;
    setParam:(param:SearchPanelProps["param"]) => void
}
export const SearchPanel = ({users,param,setParam}:SearchPanelProps) => {
    const [loading,setLoading] = useState<boolean>(false)
    const formItemLayout = {
        labelCol:{flex:'106px'},
        labelWrap:true,
        colon:false,
        preserve:false,
    }
    const [form] = Form.useForm()
    const options: any[] | undefined = []
    const queryProject = ()=>{
        const param = form.getFieldsValue()
        console.log(param)
    }
    return (
        <Spin spinning={loading}>
            <Form {...formItemLayout} form={form} style={{ marginBottom: "2rem" }} layout={"inline"}>
            <Form.Item>
                <Input
                placeholder={'项目名'}
                type='text'
                value={param.name}
                onChange={(event) => setParam({
                    ...param,
                    name:event.target.value
                })}
                /> 
            </Form.Item>
            <Form.Item>
                <Select value={param.personId}
                onChange={(value) => setParam({
                    ...param,
                    personId:value
                })}
                options={options}
                />
            </Form.Item>
            <Form.Item>
                <Button onChange={()=>queryProject}>
                    查询
                </Button>
            </Form.Item>
        </Form>
        </Spin>
        
    );
};

export default SearchPanel;