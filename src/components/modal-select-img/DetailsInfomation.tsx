import { DeleteOutlined, InfoOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, Typography } from 'antd';
import { useMediaContext } from './ModalSelectImg';

const DetailsInfomation = () => {
    const { selectImage } = useMediaContext();

    return (
        <Col className="gutter-row" span={5}>
            <div className="infomation-details">
                <h2 className="details__header">
                    <InfoOutlined className="icon-info" />
                    Chi tiết đính kèm</h2>
                <div className="details__body">
                    <div className="details__image">
                        <div className="images__info">
                            {selectImage.urlImage === "" ? <img src='https://thenounproject.com/api/private/icons/741653/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0' style={{ "height": "130px", "objectFit": "cover" }}></img> :
                                <img src={selectImage.urlImage} alt="" style={{ "height": "130px", "objectFit": "cover" }} />
                            }
                            <div className="info">
                                <p className="info__name">{selectImage.nameImage || "Name of Image"}</p>
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