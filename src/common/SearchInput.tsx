import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { CSSProperties } from "react";

type Props = {
    searchFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput:React.FC<Props> = (props) => {

        const styleInput:CSSProperties = {
            width:"100%",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            marginBottom:2,
            marginTop:3
        }


  return (
    <Box sx={styleInput}>
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #b6b6ff",
                borderRadius: "500px", 
                padding: "4px 12px",
                width: "100%",
                maxWidth:"1200px"
            }}
            >
            <InputBase
                onChange={props.searchFn}
                placeholder="Search..."
                sx={{
                ml: 1,
                flex: 1,
                color: "Grey",
                input: { padding: 0 },
                }}
            />
            <IconButton sx={{ color: "#16112e1a" }}>
                <SearchIcon />
            </IconButton>
        </Box>
    </Box>
    
  );
};

export default SearchInput;
