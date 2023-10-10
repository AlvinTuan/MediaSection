import { ExclamationCircleFilled, InfoOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, Modal, Typography } from 'antd';

import data from "./data.json"
import { useState } from 'react';
import { useMediaContext } from '../../hooks/useMediaContext';


const { confirm } = Modal;

const DetailsInfomation = () => {
    const [ellipsis] = useState(true);
    const { selectedFolder, selectedImageById } = useMediaContext()
    const folder = data.find(item => item.nameFolder === selectedFolder)
    const image = folder?.images.find(item => item.id === selectedImageById)

    const showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    return (
        <Col className="gutter-row details-info" span={5}>
            <h2 className="details__header">
                <InfoOutlined className="icon-info" />
                Chi tiết đính kèm</h2>
            <div className="details__body">
                <div className="info">
                    {image?.urlImage === undefined ? <img src='https://thenounproject.com/api/private/icons/741653/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0'></img> :
                        <img src={image?.urlImage} />
                    }
                    <div>
                        <Typography.Text
                            style={ellipsis ? { width: 111 } : undefined}
                            ellipsis={ellipsis ? { tooltip: `${image?.urlImage}` } : false}
                            className='info__name'
                        >
                            {image?.urlImage || "Name of Image11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"}
                        </Typography.Text>
                        <p className="info__time">{image?.timeUpload || "Time upload"}</p>
                        <p className="info__format">{image?.extension || "Format image"}</p>
                        <Button onClick={showDeleteConfirm} type="primary" danger>
                            Xóa
                        </Button>
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
                        <Typography.Text
                            style={ellipsis ? { width: "100%" } : undefined}
                            ellipsis={ellipsis ? { tooltip: `${image?.urlImage}` } : false}
                            copyable
                        >
                            {image?.urlImage || "URL of Image"}
                        </Typography.Text>
                    </Form.Item>
                    <Button type="primary" style={{ "float": "right" }}>
                        Cập nhật
                    </Button>
                </Form>
            </div>
        </Col>
    );
};

export default DetailsInfomation;