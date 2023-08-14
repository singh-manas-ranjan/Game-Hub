import apiClient from "./apiClient";

class HttpService{

    endPoint : string;

    constructor(endPoint : string){
        this.endPoint = endPoint;
    }

    getAll<T>(){
        const controller = new AbortController();
        const request = apiClient.get<T>(this.endPoint,{
            signal : controller.signal
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