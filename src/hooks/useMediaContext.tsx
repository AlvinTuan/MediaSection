import { createContext, useContext, useState } from "react";
import MediaData from "../components/modal-select-img/data.json";

type Props = {
    children?: React.ReactNode;
};

type data = {
    id: number;
    nameFolder: string;
    images: {
        urlImage: string;
        timeUpload: string;
        extension: string;
    }[];
};

type Image = {
    urlImage: string;
    timeUpload: string,
    extension: string
};

type MediaContext = {
    mediaUrl: string;
    setMediaUrl: React.Dispatch<React.SetStateAction<string>>;
    newFolderName: string;
    setNewFolderName: React.Dispatch<React.SetStateAction<string>>;
    data: data[];
    setData: React.Dispatch<React.SetStateAction<data[]>>;
    selectImage: Image;
    setSelectImage: React.Dispatch<React.SetStateAction<Image>>;
};

const MediaContext = createContext<MediaContext>(null!);

export function MediaProvider({ children }: Props) {
    const [mediaUrl, setMediaUrl] = useState<string>("");
    const [newFolderName, setNewFolderName] = useState<string>("");
    const [data, setData] = useState(MediaData);
    const [selectImage, setSelectImage] = useState<Image>({
        urlImage: "",
        timeUpload: "",
        extension: ""
    });
    return (
        <MediaContext.Provider
            value={{
                mediaUrl,
                setMediaUrl,
                newFolderName,
                setNewFolderName,
                data,
                setData,
                selectImage,
                setSelectImage,
            }}
        >
            {children}
        </MediaContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMediaContext() {
    const mediaContext = useContext(MediaContext);
    if (!mediaContext) {
        throw new Error("mediaContext has to be used within <MediaContext.Provider>");
    }
    return mediaContext;
}
