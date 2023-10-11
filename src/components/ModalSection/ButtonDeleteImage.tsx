import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useMediaContext } from "../../hooks/useMediaContext";


const { confirm } = Modal;

const ButtonDeleteImage = () => {
    const { dispatch, selectedFolder, selectedImageById } = useMediaContext()

    const showDeleteConfirm = () => {
        confirm({
            title: 'Bạn có muốn xóa ảnh đã chọn?',
            icon: <ExclamationCircleFilled />,
            okText: 'Xác nhận',
            okType: 'danger',
            cancelText: 'Hủy',
            onOk() {
                dispatch({ type: "delete-image", folderName: selectedFolder, idImage: selectedImageById })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    return (
        <Button onClick={showDeleteConfirm} type="primary" danger>
            Xóa
        </Button>
    );
};

export default ButtonDeleteImage;