import { FolderFilled } from '@ant-design/icons';
import { Button, Col, Image, List, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';
import ButtonCreateFolder from './ButtonCreateFolder';
import { useMediaContext } from './ModalSelectImg';
import MediaData from "./data.json"



const FolderList = () => {
    const [selectFolder, setSelectFolder] = useState<string | null>(null);
    const { data, setData, setSelectImage } = useMediaContext();
    const folderNames: string[] = data.map(item => item.nameFolder);


    // Load dữ liệu từ local storage
    useEffect(() => {
        const storedData = localStorage.getItem("folders")
        if (storedData) {
            setData(JSON.parse(storedData))
        }
    }, [setData])

    // luu du lieu xuong local storage
    useEffect(() => {
        localStorage.setItem("folders", JSON.stringify(data))
    }, [data])

    return (
        <>
            <Col className="gutter-row" span={5}>
                <List
                    header={<div><FolderFilled /> <span style={{ fontWeight: "bold" }}>Thư mục ({folderNames.length})</span></div>}
                    bordered
                    dataSource={folderNames}
                    renderItem={(item) => (
                        <List.Item style={{ cursor: "pointer", userSelect: "none" }} onClick={() => setSelectFolder(item)}>
                            <Typography.Text><FolderFilled /></Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </Col >
            <Col className="gutter-row" span={14}>
                <Row gutter={16}>
                    <Col className="gutter-row" span={14}>
                        <div style={{ backgroundColor: "#c5c6d0", padding: "8px 2px" }}># Media </div>
                    </Col>
                    <Col className="gutter-row" span={10}>
                        <Row>
                            <Col span={12}>
                                <ButtonCreateFolder></ButtonCreateFolder>
                            </Col>
                            <Col span={12}>
                                <Button style={{ float: "right" }} type="primary">Tải tệp tin</Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <div className='list-image'>
                    {MediaData.find(item => item.nameFolder === selectFolder)?.images.map(image => (
                        <label htmlFor={image.nameImage} key={image.nameImage} onClick={() => setSelectImage(image)}>
                            <input type="radio" id={image.nameImage} name='image' style={{ "display": "none" }} />
                            <Image preview={false} height={200} width={"100%"} src={image.urlImage} />
                        </label>
                    )
                    )}
                </div>

            </Col>
        </>
    );
};

export default FolderList;