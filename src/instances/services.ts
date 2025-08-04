import EmploeeService from "../services/EmployeeService";
import IEmployee from "../services/IEmployee";

export const employeesService:IEmployee = new EmploeeService(`${process.env.SERVER_HOST || "http://localhost"}:${process.env.PORT || "3000"}`)