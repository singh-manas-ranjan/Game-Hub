import create from "./HttpService"

export interface Genre{
    id: number,
    name: string
}

export default create('/genres');