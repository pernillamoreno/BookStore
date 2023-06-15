import httpService from "../../../service/HttpService";
import ApiConfig from "../../../service/ApiConfig";
import { IAdmin, IUserForm } from "./Admin.type";

export const getAdminUserListApi = async () => {

    return await httpService.get<IAdmin[]>(ApiConfig.user);
};


export const createAdminUserApi = async (data: IUserForm) => {
   return await httpService.post<IAdmin>(ApiConfig.user, data)

};


