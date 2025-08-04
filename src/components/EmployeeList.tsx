import { CSSProperties } from "@mui/styled-engine";
import { Employee } from "../types/Employee";
import EmployeeCart from "./EmployeeCart";
import { Box, Typography } from "@mui/material";

type Props = {
   employees:Employee[]
}

const EmployeeList:React.FC<Props> = (props) => {

    const style:CSSProperties = {
            display:"grid",
            gridTemplateColumns:"repeat(3, 1fr)",
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