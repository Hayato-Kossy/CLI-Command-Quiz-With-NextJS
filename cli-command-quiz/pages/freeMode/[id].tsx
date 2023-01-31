import FreeModeCLI from "@/componets/freeModeCLI";

const userName = "guest"

const freeMode = () => {
    return(
        <FreeModeCLI userName = {userName}/>
    ) 
}

export default freeMode;