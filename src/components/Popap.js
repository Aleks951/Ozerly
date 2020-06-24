import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Form, Input, Button } from 'antd';

export default () => {
    const dispatc = useDispatch();
    const { phone, name, message, validate } = useSelector((state) => {
        return {
            phone: state.phone,
            name: state.name,
            message: state.message,
            validate: state.validate
        };
    });

    return (
        <Form>
            <Form.Item
                label="Телефон"
                validateStatus={validate.phone}
                required={true}
                hasFeedback
            >
                <Input
                    type="number"
                    value={phone}
                    onChange={(e) => { dispatc({ type: "CHANGESINPUT", input: "phone", value: e.target.value }) }}
                />
            </Form.Item>

            <Form.Item
                label="Имя"
                validateStatus={validate.name}
                required={true}
                hasFeedback
            >
                <Input
                    value={name}
                    onChange={(e) => { dispatc({ type: "CHANGESINPUT", input: "name", value: e.target.value }) }}
                />
            </Form.Item>

            <Form.Item
                label="Сообщение"
                validateStatus={validate.message}
                hasFeedback
            >
                <Input
                    value={message}
                    onChange={(e) => { dispatc({ type: "CHANGESINPUT", input: "message", value: e.target.value }) }}
                />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                onClick={() => {dispatc({type: "SUBMIT"})}}
                >
                    Отправить
            </Button>
            </Form.Item>
        </Form>
    );
};