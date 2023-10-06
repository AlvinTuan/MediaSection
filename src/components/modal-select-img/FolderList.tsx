import { FolderFilled } from '@ant-design/icons';
import { Col, Image, List, Row, Typography } from 'antd';
import { useEffect } from 'react';
import ButtonCreateFolder from './ButtonCreateFolder';
import ButtonUploadFile from './ButtonUploadFile';
import MediaData from "./data.json"
import { useMediaContext } from '../../hooks/useMediaContext';



const FolderList = () => {
    const { data, setData, setSelectImage, selectFolder, setSelectFolder } = useMediaContext();
    console.log("🚀 ~ file: FolderList.tsx:13 ~ FolderList ~ data:", data)
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
                                <ButtonUploadFile selectFolder={selectFolder}></ButtonUploadFile>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <div className='list-image'>
                    {MediaData.find(item => item.nameFolder === selectFolder)?.images.map(image => (
                        <label htmlFor={image.urlImage} key={image.urlImage} onClick={() => setSelectImage(image)}>
                            <input type="radio" id={image.urlImage} name='image' style={{ "display": "none" }} />
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