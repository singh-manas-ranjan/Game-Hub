import create from "./HttpService"
export interface Platform{
    id: number,
    name: string,
    slug: string
}

export default create<Platform>('/platforms/lists/parents')
