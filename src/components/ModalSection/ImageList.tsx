import { Button, Col, Image, Row } from 'antd';
import { useMediaContext } from '../../hooks/useMediaContext';
import ButtonCreateFolder from './ButtonCreateFolder';

const ImageList = () => {
    const { data } = useMediaContext()
    const { selectedFolder, selectedImageById, setSelectedImageById } = useMediaContext()
    console.log("🚀 ~ file: ImageList.tsx:10 ~ ImageList ~ selectedImageById:", selectedImageById)
    return (
        <Col className="gutter-row" span={14}>
            <Row gutter={16}>
                <Col className="gutter-row" span={14}>
                    <div style={{ backgroundColor: "#c5c6d0", padding: "8px" }}># Media </div>
                </Col>
                <Col className="gutter-row" span={10}>
                    <Row>
                        <Col span={12}>
                            <ButtonCreateFolder></ButtonCreateFolder>
                        </Col>
                        <Col span={12}>
                            <Button type='primary' style={{ "float": "right" }}>Upload</Button>
                        </Col>
                    </Row>

                </Col>
            </Row>
            <div className='image-list'>
                {data.find(item => item.nameFolder === selectedFolder)?.images.map(image => (
                    <label htmlFor={image.urlImage} key={image.urlImage} onClick={() => setSelectedImageById(image.id)} className={`${image.id === selectedImageById ? "image--checked" : ""}`}>
                        <input type="radio" id={image.urlImage} name='image' className='image-radio' style={{ "display": "none" }} />
                        <div className='image-inner'>
                            <div className="tickmark"></div>
                            <Image preview={false} height={200} width={"100%"} src={image.urlImage} className='image' />
                        </div>
                    </label>
                )
                )}
            </div>
        </Col>
    );
};

export default ImageList;