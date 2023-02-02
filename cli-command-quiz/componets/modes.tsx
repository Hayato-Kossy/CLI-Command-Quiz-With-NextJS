import React from "react";
import { Box } from "@mui/system";
import FreeModeButton from "./freeModeButton";
import FileDirectoryQuizButton from "./fileDirectoryQuizButton";
import PrevStudyReport from "./prevStudyReport";
const Modes = () => {
    return (
                <Box
          height='80vh'
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black'
          }}
        >
          <PrevStudyReport></PrevStudyReport>
          <FileDirectoryQuizButton></FileDirectoryQuizButton>
          <FreeModeButton></FreeModeButton>
      </Box>
    )
}

export default Modes