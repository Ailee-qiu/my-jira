import { Button, Form, Input } from 'antd';
import React, { useRef } from 'react';
import { LongButton } from '.';

const Login = () => {
    const loginRef = useRef(null)
    const [form] = Form.useForm()
    const onSubmit =(values:{
        username:string,
        password:string
    })=>{
        // const { username,password }= form.getFieldsValue()
        console.log(values)
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
          登录
        </LongButton>
            </Form.Item>
        </Form>
    );
};

export default Login;