import { createContext, useContext, useReducer, useState } from "react";
import { Folder, Image } from "../types/types";
import { data as MediaData } from "../components/ModalSection/data";

type props = {
    children: React.ReactNode
}

type ActionType = {
    type: 'create-folder',
    folder: Folder
} | {
    type: 'upload-image',
    image: Image
} | {
    type: 'delete-image',
    folderName: string
    idImage: number | undefined
}

const mediaReducer = (state: Folder[], action: ActionType) => {
    switch (action.type) {
        case 'create-folder':
            return [
                ...state,
                {
                    id: action.folder.id,
                    nameFolder: action.folder.nameFolder.trim(),
                    images: action.folder.images
                }
            ]
        case 'delete-image':
            return state.map(folder => {
                if (folder.nameFolder === action.folderName) {
                    folder.images = folder.images.filter(image => image.id !== action.idImage)
                }
                return folder
            })
        default:
            throw new Error("")
    }
}

type MediaContext = {
    data: Folder[]
    dispatch: React.Dispatch<ActionType>
    selectedFolder: string,
    setSelectedFolder: React.Dispatch<React.SetStateAction<string>>
    selectedImageById: number | undefined
    setSelectedImageById: React.Dispatch<React.SetStateAction<number | undefined>>
}


const MediaContext = createContext<MediaContext>(null!);

export function MediaProvider({ children }: props) {
    const [selectedFolder, setSelectedFolder] = useState<string>(MediaData[0].nameFolder);
    const [selectedImageById, setSelectedImageById] = useState<number | undefined>(MediaData[0].images[0].id);
    const [data, dispatch] = useReducer(mediaReducer, MediaData, () => {
        const localData = localStorage.getItem('data')
        return localData ? JSON.parse(localData) : MediaData
    })

    return <MediaContext.Provider value={{ data, dispatch, selectedFolder, setSelectedFolder, selectedImageById, setSelectedImageById }}>{children}</MediaContext.Provider>
}

export function useMediaContext() {
    const mediaContext = useContext(MediaContext)
    if (!mediaContext) {
        throw new Error("mediaContext has to be used within <MediaContext.Provider>")
    }
    return mediaContext
}