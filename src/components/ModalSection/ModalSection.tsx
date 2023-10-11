import { Button, Divider, Modal, Row } from "antd";
import { useState } from "react";
import FolderList from "./FolderList";
import DetailsInfomation from "./DetailsInfomation";
import "./styles.scss"
import ImageList from "./ImageList";
import { MediaProvider } from "../../hooks/useMediaContext";


const ModalSection = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Add Media
            </Button>
            <Modal
                title="Thêm media"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={"100%"}
            >
                <Divider></Divider>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <MediaProvider>
                        <FolderList></FolderList>
                        <ImageList></ImageList>
                        <DetailsInfomation></DetailsInfomation>
                    </MediaProvider>
                </Row>
                <Divider></Divider>
            </Modal >
        </>
    );
};

export default ModalSection;