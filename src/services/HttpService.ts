import { AxiosRequestConfig } from "axios";
import apiClient from "./apiClient";

export class HttpService{

    endPoint : string;

    constructor(endPoint : string){
        this.endPoint = endPoint;
    }

    getAll<T>(requestConfig? : AxiosRequestConfig){
        const controller = new AbortController();
        const request = apiClient.get<T>(this.endPoint,{
            signal : controller.signal, ...requestConfig
        })

        return {
            request,
            cancel : () => controller.abort()
        }
    }
}

const create = (endPoint : string) =>{
    return new HttpService(endPoint);
}

export default create;