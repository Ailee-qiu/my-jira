import { Button, Drawer } from 'antd';
import React, { useState } from 'react';

const CDrawer = (props:{visible:boolean,onClose:()=>void}) => {
    const {visible,onClose} = props

    return (
        <>
        <Drawer title='详情页'  placement='right' open={visible} onClose={onClose}>
            <p>hhh</p>
        </Drawer>
        </>
    );
};

export default CDrawer;