import httpService from "../../../service/HttpService";
import ApiConfig from "../../../service/ApiConfig";

export const getAdminUserList = async () => {

    httpService.get(ApiConfig.user);

}
