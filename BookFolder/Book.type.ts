export interface IBook {
  
    id: number;
    title: string;
    author: string;
    availability: string;
    order: string;

}

export enum ApiStatus {
    "loading",
    "ideal",
    "success",
    "error"
}
export interface IBookState {
    list : IBook[],
    listStatus: ApiStatus;
    createBookFormStatus: ApiStatus;
    updateBookFormStatus: ApiStatus;
   
}
export interface IBookForm {
    title: string;
    author: string;
    availability: string;
    order: string;

}

export interface IUpdateBookActionProps {
    id : number;
    data: IBookForm;

  }