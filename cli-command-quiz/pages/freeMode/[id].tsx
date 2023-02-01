import FreeModeCLI from "@/componets/freeModeCLI";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
const userName = "guest"

const freeMode = () => {
    return(
        <FreeModeCLI userName = {userName}/>
    ) 
}

export default freeMode;