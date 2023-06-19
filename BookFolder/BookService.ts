import ApiConfig from "../../../service/ApiConfig";
import httpService from "../../../service/HttpService";
import { IBook, IBookForm } from "./Book.type";
export const getBookListApi = async () => {

    return await httpService.get<IBook[]>(ApiConfig.user);
};


export const createBookApi = async (data: IBookForm) => {
   return await httpService.post<IBook>(ApiConfig.book, data)

};
export const deleteBookApi = async (id: number) => {
    const url = `${ApiConfig.book}/${id}`;
    return await httpService.delete(url);
  };
  export const updateBookApi = async (id: number, data: IBookForm) => {
    const url = `${ApiConfig.book}/${id}`;
    return await httpService.put(url, data);
  };


