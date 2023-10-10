import data from "../components/ModalSection/data.json";

localStorage.setItem("data", JSON.stringify(data));

export const defaultFolder = data[0];
