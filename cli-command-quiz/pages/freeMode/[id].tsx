import FreeModeCLI from "@/componets/freeModeCLI";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
const userName = localStorage.getItem("userName")!

const freeMode = () => {
    return(
        <FreeModeCLI userName = {userName}/>
    ) 
}

export default freeMode;