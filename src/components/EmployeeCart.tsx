import { CSSProperties, useState } from "react";
import ModalWindow from "../common/ModalWindow";
import { Employee } from "../types/Employee"
import { Box, SxProps, Theme, Typography } from "@mui/material";
import EmployeeDetail from "./EmployeeDetail";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailIcon from '@mui/icons-material/Mail';
import { Image } from "@mui/icons-material";

type Props = {
   employee:Employee
}

const EmployeeCart:React.FC<Props> = ({employee}) => {

    const style:SxProps<Theme> = {
            display: "flex",
            flexDirection: "column",
            padding: 2,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: 2, 
            cursor: "pointer", 
            width:"357px",
            height:"314px"
        };

    const [activeModalWindow, setActiveModalWindow] = useState<boolean>(false)

    const handlerClick = () => { 
        setActiveModalWindow(true)  
    }

    const handleCloseButton = () => {
        setActiveModalWindow(false);
    }

    return <Box  sx = {style}>
                <ModalWindow active ={activeModalWindow} element = {<EmployeeDetail employee={employee} onClose={handleCloseButton}></EmployeeDetail>} setActive={setActiveModalWindow}></ModalWindow>
                <Box sx = {{height:"100%"}} onClick = {handlerClick}>
                        <Typography variant="h6" sx={{padding:1}}>{employee.name}</Typography>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <Box component={"img"} src="/assets/phone.png" alt="phone" sx={{ width: 20, height: 20, padding:1.5}}></Box>
                        <Typography variant="body2" color="text.secondary">{employee.phone}</Typography>
                     </Box>  
                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <Box component={"img"} src="/assets/mail.png" alt="phone" sx={{ width: 20, height: 20, padding:1.5 }}></Box>
                        <Typography variant="body2" color="text.secondary">{employee.email}</Typography>
                    </Box>    
                </Box> 
            </Box>
}

export default EmployeeCart