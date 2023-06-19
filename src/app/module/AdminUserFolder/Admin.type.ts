
 /**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This is file was created to move from AdminSlice and 
 * clean up AdminSlice.In this file i can write types i can use as AdminSlice.
 */
 export interface IAdmin {
  
  
    id: number;
    username: string;
    password: string;
    role: string;

}

export enum ApiStatus {
    "loading",
    "ideal",
    "success",
    "error"
}
export interface IAdminState {
    list : IAdmin[],
    listStatus: ApiStatus;
    createUserFormStatus: ApiStatus;
    updateUserFormStatus: ApiStatus;
   
}


export interface IUserForm {
    username: string;
    password: string;
    role:string;

}

export interface IUpdateAdminUserActionProps {
    id : number;
    data: IUserForm;

  }

