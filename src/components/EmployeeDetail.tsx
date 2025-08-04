import { Employee } from "../types/Employee"
import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
   employee:Employee,
   onClose: () => void;
}

const EmployeeDetail:React.FC<Props> = ({employee, onClose }) => {
    const secondaryInfo:string = "Разработчики используют текст для зополнения макета таблицы Разработчики используют текст для зополнения макета таблицы"

    return (
    <Box
      sx={{
        position: "relative",
        padding: 4,
        borderRadius: 3,
        backgroundColor: "#fff",
        width: 400,
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography variant="h6" fontWeight={700} mb={2}>
        {employee.name}
      </Typography>
            <IconButton
        onClick={onClose}
        sx={{ position: "absolute", top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>

      <Box display="grid" gap={1} mb={3}>
        <InfoRow label="Телефон:" value={employee.phone} />
        <InfoRow label="Почта:" value={employee.email} />
        <InfoRow label="Дата приема:" value={employee.hire_date} />
        <InfoRow label="Должность:" value={employee.position_name} />
        <InfoRow label="Подразделение:" value={employee.department} />
      </Box>

      <Typography fontWeight={600} mb={1}>
        Дополнительная информация:
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {secondaryInfo}
      </Typography>
    </Box>
  );
};

// Вспомогательный компонент для строк информации
const InfoRow = ({ label, value }: { label: string; value?: string }) => (
  <Box display="flex" gap={1}>
    <Typography fontWeight={500} minWidth={130}>
      {label}
    </Typography>
    <Typography color="text.secondary">{value}</Typography>
  </Box>
);

export default EmployeeDetail