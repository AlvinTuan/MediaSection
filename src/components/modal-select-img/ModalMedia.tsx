import { Button } from 'antd';
import { useState } from 'react';
import ModalSelectImg from './ModalSelectImg';

const ModalMedia = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    return (
        <>
            <Button type="primary" onClick={() => setShowModal(true)}>Thêm media</Button>
            <ModalSelectImg open={showModal} handleClose={() => setShowModal(false)}></ModalSelectImg>
        </>
    );
};

export default ModalMedia;