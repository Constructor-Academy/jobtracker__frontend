import {SET_PDF_URL} from "../types";

export const setPdfSourceAction = (url) => {
    return {
        type: SET_PDF_URL,
        payload: url,
    };
};
