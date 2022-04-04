import axios from "axios";

const instance = axios.create ({
    baseURL: `https://neko-cafe-back.herokuapp.com/`
});

export const testAPI = {
    createRequest (status: boolean) {
        return instance.post<any, AxiosSuccessType,{success: boolean}>(`auth/test/`, {success: status});
    }
}


type AxiosSuccessType = {
    data : {
        "errorText": string
        "info": string
        "yourBody": {
            "success": boolean
        },
        "yourQuery": {}
    }
}