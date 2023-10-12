import { Button, Form, Input, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useMediaContext } from '../../hooks/useMediaContext';

type FieldType = {
    namefolder: string;
};

const ButtonCreateFolder = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data, setData } = useMediaContext()

    useEffect(() => (
        localStorage.setItem("data", JSON.stringify(data))
    ), [data])

    const handleCreateFolder = ({ namefolder }: FieldType) => {
        const newFolder = {
            id: data.length + 1,
            nameFolder: namefolder.trim(),
            images: []
        }
        setData([...data, newFolder])
    }

    const onFinish = (values: FieldType) => {
        console.log('Success:', values);
        handleCreateFolder(values)
        setIsModalOpen(false)
    };

    const onFinishFailed = (errorInfo: unknown) => {
        console.log('Failed:', errorInfo);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <Button type="primary" onClick={showModal} style={{ "float": "right" }}>
                Tạo tệp tin
            </Button>
            <Modal title="Tạo tệp tin mới" open={isModalOpen} footer={null}>
                <Form
                    name="create-folder"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='vertical'

                >
                    <Form.Item<FieldType>
                        name="namefolder"
                        rules={[{ required: true, message: 'Không được để trống...' }]}
                    >
                        <Input placeholder='Nhập tên thư mục mới' />
                    </Form.Item>
                    <Form.Item>
                        <Button style={{ "float": "right" }} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ButtonCreateFolder;