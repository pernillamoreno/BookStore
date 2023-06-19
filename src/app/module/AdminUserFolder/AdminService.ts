import httpService from "../../../service/HttpService";
import ApiConfig from "../../../service/ApiConfig";
import { IAdmin, IUserForm } from "./Admin.type";

export const getAdminUserListApi = async () => {

    return await httpService.get<IAdmin[]>(ApiConfig.user);
};


export const createAdminUserApi = async (data: IUserForm) => {
   return await httpService.post<IAdmin>(ApiConfig.user, data)

};
export const deleteAdminUserApi = async (id: number) => {
    const url = `${ApiConfig.user}/${id}`;
    return await httpService.delete(url);
  };
  export const updateAdminUserApi = async (id: number, data: IUserForm) => {
    const url = `${ApiConfig.user}/${id}`;
    return await httpService.put(url, data);
  };


