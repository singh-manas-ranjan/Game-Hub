import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params :{
        key: "2084b64baedd4b9aae1b90dfc9b131a0"
    }
})
