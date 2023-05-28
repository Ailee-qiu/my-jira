import { Button, Form, Input } from 'antd';
import React, { useRef } from 'react';
import { getHttp } from '../../common/httpRequest';
import { LongButton } from '.';

const Register = () => {
    const loginRef = useRef(null)
    const [form] = Form.useForm()
    const onSubmit =(values:{username:string,password:string})=>{
        const params= form.getFieldsValue()
        getHttp(params)
    }
    return (
        <Form onFinish={onSubmit} ref={loginRef} form={form}>
            <Form.Item 
            name={'username'} 
            rules={[{required:true,message:"请输入用户名"}]}
            >
                <Input placeholder={"用户名"} type="text" id={"username"}/>
            </Form.Item>
            <Form.Item 
            name={'password'}
            rules={[{required:true,message:"请输入用户密码"}]}
            >
                <Input placeholder={"用户密码"} type="password" id={"password"} />
            </Form.Item>
            <Form.Item>
            <LongButton  htmlType={"submit"} type={"primary"}>
                  注册
            </LongButton>
            </Form.Item>
        </Form>
    );
};

export default Register;