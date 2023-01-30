import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function CLI() {
    return (
    <body>
        <div className="bg-result vh-100 d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-center py-4">       
            <div className="container col-8 px-0" id="content">
            <div id="CLIOutputDiv" className="CLI output-text ml-3"></div> 
                <a className="m-0 output-text ml-3">                
                  <span>User</span>
                  <span> @ </span>
                  <span> MacBook % 
                    <input 
                    id = "CLIInputDiv"
                    style={{
                        backgroundColor:'transparent',
                        color: "#03ef03",
                        border: "none",
                        outlineColor: "black",
                        outlineStyle: "none",
                        fontSize:"x-large",
                        width:"65%",                  
                    }}
                    placeholder=" type any command"
                    type="text"/>
                    </span>
                </a>
                </div>
                </div>
            </div>
        </body>
    )
}

export default CLI;