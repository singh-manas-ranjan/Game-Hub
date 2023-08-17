import create from "./HttpService"

export interface Genre{
    id: number,
    name: string
}

export interface GenreResponse{
    count: number,
    results : Genre[]
}

export default create('/genres');