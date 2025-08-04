import { EmlpResponse } from "../types/EmlResponse";
import { Employee } from "../types/Employee";

export default interface IEmployee {

    getEmployees():Promise<EmlpResponse|string>;
    getEmployeeByName(name:string):Promise<EmlpResponse|string>;

}