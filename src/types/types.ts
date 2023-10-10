export interface Image {
    id: number;
    urlImage: string;
    timeUpload: string;
    extension: string;
}

export interface Folder {
    id: number;
    nameFolder: string;
    images: Partial<Image>[];
}
