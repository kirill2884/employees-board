import { CSSProperties, useEffect, useState } from "react"
import EmployeeList from "../components/EmployeeList"
import { Employee } from "../types/Employee"
import { Box, Typography} from "@mui/material";
import SearchInput from "../common/SearchInput";
import EmployeeService from "../services/EmployeeService";
import { employeesService } from "../instances/services";
import { EmlpResponse } from "../types/EmlResponse";

const MainPage:React.FC = () => {

	const [employees, setEmployees] = useState<Employee[]>([]);
  	const [error, setError] = useState<string>("");
	const [search, setSearch] = useState<boolean>(false)
 	const [searchStr, setSearchStr] = useState<string>("")

		useEffect(() => {
			const fetchEmployees = async () => {

				let result: string | EmlpResponse;
				result = !search ? await employeesService.getEmployees() : await employeesService.getEmployeeByName(searchStr);

				if (typeof result === "string") {
					setError(result);
				} else {
					setEmployees(result.data);
				}
			};

			fetchEmployees();
		}, [searchStr]);


	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value:string = e.target.value
		setSearch(value != "")
		setSearchStr(value)
	}	

	const style:CSSProperties = {
		width:"80vw",
		display:"flex",
		flexDirection:"column",
		alignItems:"center"
	}



    return <Box sx = {style}>
				<SearchInput searchFn={handleSearch}></SearchInput>
				{error && <Typography sx={{ color: "red" }}>{error}</Typography>}
				{!error && <EmployeeList employees={employees} />}
    		</Box>
}

export default MainPage