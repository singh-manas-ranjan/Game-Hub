import { AxiosRequestConfig } from "axios";
import apiClient from "./apiClient";

export interface FetchResponse<T>{
    count: number,
    results: T[],
    next: string | null
  }

export class HttpService<T>{

    endPoint : string;

    constructor(endPoint : string){
        this.endPoint = endPoint;
    }

    getAll(requestConfig? : AxiosRequestConfig){

        return apiClient.get<FetchResponse<T>>(this.endPoint, requestConfig).then(res => res.data)
    }
    
    get(id: number | string){
        return apiClient.get<T>(`${this.endPoint}/${id}`).then(res => res.data);
    }
}
const create = <T>(endPoint : string) =>{
    return new HttpService<T>(endPoint);
}

export default create;