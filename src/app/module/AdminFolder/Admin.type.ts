 /**
 * Author: Pernilla Stalbring Solino-Moreno
 * Date: Jun 2023
 *
 * This is file was created to move from AdminSlice and clean up AdminSlice.In this file i can write types i can use as AdminSlice.
 */
 export interface IAdmin {
    id: number;
    username: string;
    role: string;
    purchase: number;
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

}

export const defaultList: IAdmin[]= [
    {
        id: 1,
        username: "Bob",
        role: "ADMIN",
        purchase: 3, 

    },
    {
        id: 2,
        username: "Greta",
        role: "ADMIN",
        purchase: 3,
    },
    { 
        id: 3,
        username: "Yves",
        role: "USER",
        purchase: 3

    }

];