import httpService from "../../../service/HttpService";
import ApiConfig from "../../../service/ApiConfig";
import { IAdmin } from "./Admin.type";

export const getAdminUserList = async () => {

    return await httpService.get<IAdmin[]>(ApiConfig.user);

};


