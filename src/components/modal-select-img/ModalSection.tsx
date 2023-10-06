import { Button, Divider, Modal, Row } from "antd";
import { useState } from "react";
import { MediaProvider } from "../../hooks/useMediaContext";
import FolderList from "./FolderList";
import DetailsInfomation from "./DetailsInfomation";
import "./ModalSelectImg.scss"

const ModalSection = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Open Modal of 1000px width
            </Button>
            <Modal
                title="Modal 1000px width"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={"100%"}
            >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <MediaProvider>
                        <FolderList></FolderList>
                        <DetailsInfomation></DetailsInfomation>
                    </MediaProvider>
                </Row>
                <Divider></Divider>
            </Modal>
        </>
    );
};

export default ModalSection;