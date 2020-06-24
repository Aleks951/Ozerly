import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import 'antd/dist/antd.css';
import { Button, Alert } from 'antd';

import Popap from "./Popap";

export default () => {
    const dispatc = useDispatch();
    const { showPopap, success } = useSelector((state) => { return { showPopap: state.showPopap, success: state.success }; });
    let content = (
        
        <Button
            type="primary"
            onClick={() => { dispatc({ type: "SHOWPOPAP" }) }}
        >
            Click me!
        </Button>
    );

    if (success) {
        content = (
            <Alert message="Сообщение отправлено!" type="success" showIcon />
        );
    };

    return (
        <div className="my-wrap">
            {showPopap ? <Popap /> : content}
        </div>
    );
}