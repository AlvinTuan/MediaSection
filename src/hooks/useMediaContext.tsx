import { createContext, useContext, useState } from "react";
import MediaData from "../components/modal-select-img/data.json";

type Props = {
    children?: React.ReactNode;
};

export type Data = {
    id: number;
    nameFolder: string;
    images: {
        id: string;
        urlImage: string;
        timeUpload: string;
        extension: string;
    }[];
};

type Image = {
    id: string;
    urlImage: string;
    timeUpload: string,
    extension: string
};

type MediaContext = {
    mediaUrl: string;
    setMediaUrl: React.Dispatch<React.SetStateAction<string>>;
    newFolderName: string;
    setNewFolderName: React.Dispatch<React.SetStateAction<string>>;
    data: Data[];
    setData: React.Dispatch<React.SetStateAction<Data[]>>;
    selectImage: Image;
    setSelectImage: React.Dispatch<React.SetStateAction<Image>>;
    selectFolder: string;
    setSelectFolder: React.Dispatch<React.SetStateAction<string>>;
};

const MediaContext = createContext<MediaContext>(null!);

export function MediaProvider({ children }: Props) {
    const [mediaUrl, setMediaUrl] = useState<string>("");
    const [newFolderName, setNewFolderName] = useState<string>("");
    const [data, setData] = useState(MediaData);
    const [selectImage, setSelectImage] = useState<Image>({
        id: "",
        urlImage: "",
        timeUpload: "",
        extension: ""
    });
    const [selectFolder, setSelectFolder] = useState<string>("");

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
                selectFolder,
                setSelectFolder
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
