import { createContext, useContext, useState } from "react";
import { Folder } from "../types/types";
import { data as MediaData } from "../components/ModalSection/data";

type props = {
    children: React.ReactNode
}

type MediaContext = {
    data: Folder[]
    setData: React.Dispatch<React.SetStateAction<Folder[]>>
    selectedFolder: string,
    setSelectedFolder: React.Dispatch<React.SetStateAction<string>>
    selectedImageById: number | undefined
    setSelectedImageById: React.Dispatch<React.SetStateAction<number | undefined>>

}


const MediaContext = createContext<MediaContext>(null!);

export function MediaProvider({ children }: props) {
    const [selectedFolder, setSelectedFolder] = useState<string>(MediaData[0].nameFolder);
    const [selectedImageById, setSelectedImageById] = useState<number | undefined>(MediaData[0].images[0].id);
    const [data, setData] = useState<Folder[]>(MediaData);
    return <MediaContext.Provider value={{ data, setData, selectedFolder, setSelectedFolder, selectedImageById, setSelectedImageById }}>{children}</MediaContext.Provider>
}

export function useMediaContext() {
    const mediaContext = useContext(MediaContext)
    if (!mediaContext) {
        throw new Error("mediaContext has to be used within <MediaContext.Provider>")
    }
    return mediaContext
}