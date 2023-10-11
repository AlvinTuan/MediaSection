import { Button } from "antd";
import { useRef } from "react";
import { useMediaContext } from "../../hooks/useMediaContext";

const ButtonUploadFile = () => {
    const { data, setData, selectedFolder } = useMediaContext()
    console.log("🚀 ~ file: ButtonUploadImage.tsx:7 ~ ButtonUploadFile ~ selectedFolder:", selectedFolder)
    const selectedFolderIndex = data.findIndex(item => item.nameFolder === selectedFolder);
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
                    const id = data[selectedFolderIndex].images.length + 1
                    const dataURL = event.target.result as string;
                    const extension = file.name.split('.').pop() || '';
                    const timeUpload = new Date().toLocaleString(); // Get current time in HH:mm:ss DD/MM/yyyy format

                    const newImage = { id, urlImage: dataURL, timeUpload, extension };
                    const updatedMediaData = [...data];
                    if (selectedFolderIndex !== -1) {
                        updatedMediaData[selectedFolderIndex].images.push(newImage);
                    }
                    setData(updatedMediaData);
                    // Lưu dữ liệu xuống Local Storage
                    localStorage.setItem('mediaData', JSON.stringify(updatedMediaData));
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