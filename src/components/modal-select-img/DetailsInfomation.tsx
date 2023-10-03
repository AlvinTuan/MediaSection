import { DeleteOutlined, InfoOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, Typography } from 'antd';
import { useMediaContext } from './ModalSelectImg';

const DetailsInfomation = () => {
    const mediaContext = useMediaContext();

    return (
        <Col className="gutter-row" span={5}>
            <div className="infomation-details">
                <h2 className="details__header">
                    <InfoOutlined className="icon-info" />
                    Chi tiết đính kèm</h2>
                <div className="details__body">
                    <div className="details__image">
                        <div className="images__info">
                            <img src="https://images.unsplash.com/photo-1675889335685-4ac82f1e47ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" alt="" />
                            <div className="info">
                                <p className="info__name">image name</p>
                                <p className="info__time">image time</p>
                                <p className="info__format">image format</p>
                                <Button danger><DeleteOutlined />Xóa</Button>
                            </div>
                        </div>
                    </div>
                    <Divider></Divider>
                    <Form layout="vertical">
                        <Form.Item name="tieu-de" label="Tiêu đề" rules={[{ required: true }]}>
                            <Input></Input>
                        </Form.Item>
                        <Form.Item name={"chu-thich"} label="Chú thích">
                            <Input.TextArea></Input.TextArea>
                        </Form.Item>
                        <Form.Item name={"duong-dan"} label="Đường dẫn">
                            <Typography.Paragraph copyable code>
                                This is a copyable text.
                            </Typography.Paragraph>
                        </Form.Item>
                        <Button type="primary" style={{ "float": "right" }}>
                            Cập nhật
                        </Button>
                    </Form>
                </div>

            </div>
        </Col>
    );
};

export default DetailsInfomation;