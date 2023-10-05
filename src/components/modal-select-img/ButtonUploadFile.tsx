import { Button } from "antd";
import { useRef } from "react";
import MediaData from "./data.json"
import { useMediaContext } from "../../hooks/useMediaContext";

interface props {
    selectFolder: string
}

const ButtonUploadFile = ({ selectFolder }: props) => {
    const { setData } = useMediaContext()
    // console.log("🚀 ~ file: ButtonUploadFile.tsx:18 ~ ButtonUploadFile ~ data:", data)
    const selectedFolderIndex = MediaData.findIndex(item => item.nameFolder === selectFolder);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleInputClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();

            reader.onload = (event) => {
                if (event.target) {
                    const dataURL = event.target.result as string;
                    const extension = file.name.split('.').pop() || '';
                    const timeUpload = new Date().toLocaleString(); // Get current time in HH:mm:ss DD/MM/yyyy format

                    const newImage = { urlImage: dataURL, timeUpload, extension };
                    const updatedMediaData = [...MediaData];
                    if (selectedFolderIndex !== -1) {
                        updatedMediaData[selectedFolderIndex].images.push(newImage);
                    }
                    setData(updatedMediaData);
                }
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        < >
            <input type="file" hidden ref={fileInputRef} onChange={handleFileUpload} />
            <Button type="primary" onClick={handleInputClick} style={{ float: "right" }}>
                Tải tệp tin
            </Button>
        </>
    );
};

export default ButtonUploadFile;