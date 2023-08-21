import { HttpService } from "../services/HttpService";
import platformService, { Platform } from "../services/platformService";
import useData from "./useData";

const usePlatforms = () => useData<Platform, HttpService>(platformService);

export default usePlatforms;