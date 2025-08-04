import { EmlpResponse } from "../types/EmlResponse";
import IEmployee from "./IEmployee";

export default class EmploeeService implements IEmployee {

    private baseUrl:string;

    constructor(url:string){
        this.baseUrl = url
    }

    async getEmployees(): Promise<EmlpResponse | string> {
        try {
            
            const response = await fetch(this.baseUrl,{
                method:"GET"
            })

            return response.json()

        } catch (error:any) {
            return error
        }
        
    }
    async getEmployeeByName(name: string): Promise<EmlpResponse | string> {
            try {
                const response = await fetch(`${this.baseUrl}?term=${name}`,{
                method:"GET"
            })

            return response.json()

        } catch (error:any) {
            return error
        }
    }

}