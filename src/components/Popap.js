import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Form, Input, Button } from 'antd';

export default () => {
    const dispatc = useDispatch();
    const { phone, name, message } = useSelector((state) => {
        return {
            phone: state.phone,
            name: state.name,
            message: state.message
        };
    });

    return (
        <Form>
            <Form.Item
                label="Телефон"
                name="phon"
                rules={[
                  {
                    required: true,
                    message: 'Введите телефон, например "0965555555"',
                    max: 10,
                    pattern: "[0-9]{10}"
                  },
                ]}
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
                name="name"
                rules={[
                    {
                      required: true,
                      message: 'Введите имя!',
                    },
                  ]}
                hasFeedback
            >
                <Input
                    value={name}
                    onChange={(e) => { dispatc({ type: "CHANGESINPUT", input: "name", value: e.target.value }) }}
                />
            </Form.Item>

            <Form.Item
                label="Сообщение"
                name="message"
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
                    htmlType="submit"
                    onClick={() => {dispatc({type: "SUBMIT"})}}
                >
                    Отправить
            </Button>
            </Form.Item>
        </Form>
    );
};