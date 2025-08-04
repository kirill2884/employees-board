
import { Employee } from "../types/Employee";
import EmployeeCart from "./EmployeeCart";
import { Box, SxProps, Theme } from "@mui/material";

type Props = {
   employees:Employee[]
}

const EmployeeList:React.FC<Props> = (props) => {

    const style: SxProps<Theme> = {
            display:"grid",
            gridTemplateColumns:{
                xs: "1fr",        
                sm: "repeat(2, 1fr)", 
                md: "repeat(3, 1fr)" 
            },
            gap:2,
      };

    return <Box>
        <Box sx={style}>
            {props.employees.map((empl => {
                return <EmployeeCart employee={empl} key={empl.id}></EmployeeCart>
            }))}
        </Box>
    </Box>
}

export default EmployeeList;