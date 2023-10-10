import { Col, List, Typography } from 'antd';
import { FolderFilled } from '@ant-design/icons';
import { useMediaContext } from '../../hooks/useMediaContext';





const FolderList = () => {
    const { data } = useMediaContext()

    const folderNames: string[] | undefined = data?.map(folder => folder.nameFolder);
    const { selectedFolder, setSelectedFolder, setSelectedImageById } = useMediaContext()
    const firstImage = data?.find(item => item.nameFolder === selectedFolder)?.images[0]
    const handleSelectFolder = (item: string) => {
        setSelectedFolder(item)
        setSelectedImageById(firstImage?.id)
    }

    return (
        <Col className="gutter-row folder-list" span={5}>
            <List
                header={<div><FolderFilled /> <span style={{ fontWeight: "bold" }}>Thư mục ({folderNames?.length})</span></div>}
                bordered
                dataSource={folderNames}
                renderItem={(item) => (
                    <List.Item style={{ cursor: "pointer", userSelect: "none" }} className={`${item === selectedFolder ? "folder--selected" : "folder--allowhover"}`} onClick={() => handleSelectFolder(item)}>
                        <Typography.Text><FolderFilled className='folder__icon' /></Typography.Text> {item}
                    </List.Item>
                )}
            />
        </Col >
    );
};

export default FolderList;