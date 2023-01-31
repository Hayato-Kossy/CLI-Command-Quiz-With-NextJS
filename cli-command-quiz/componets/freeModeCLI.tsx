import * as React from 'react';
import { useRef, useLayoutEffect} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import freeMode from '@/pages/freeMode/[id]';
import { useState } from 'react';
import { Controller } from '@/src/controller/Controller';
import { CLI } from '@/src/model/CLI';
import AppendParagraph from './appendParagraph';

function FreeModeCLI({ userName }: { userName: string}) {
    // const [CLIOutputDiv, setCLIOutputDiv] = useState('');
    const [CLIInputDiv, setCLIInputDiv] = useState('');
    const scrollBottomRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        scrollBottomRef?.current?.scrollIntoView();
    });
    const handleChangeCLIInputDiv = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCLIInputDiv(e.target.value);
    }
    const executeCLI = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.nativeEvent.isComposing || e.key !== 'Enter' || CLIInputDiv == "") return
        console.log(CLIInputDiv);
        setCLIInputDiv("");
        appendEchoParagrah()
    }

    const appendEchoParagrah = () => {
        let CLITextOutPut = document.getElementById("CLITextOutPut")!
        CLITextOutPut.innerHTML += 
        `
        <div className="m-0 output-text align-top"> 
        <span>&nbsp;${userName}</span>
        <span>@</span>
        <span className='mr-3'> MacBook %&nbsp;${CLIInputDiv}</span>
        </div>
        `
    }

    return (
        <>
        <div id ="submit"></div>
        <div className="bg-result vh-100 d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-center py-4">       
            <div className="container col-8 px-0" id="content">
            <div id="CLITextOutPut"className="CLI output-text ml-3"></div>
                <div className="m-0 output-text ml-3">      
                <span>&nbsp;{userName}</span>
                  <span>&nbsp;@</span>
                  <span className='mr-3'> MacBook %&nbsp;
                  <input
                  style={{
                    background:"transparent",
                    color:"	#28a745",
                    outline:"none",
                    border:"none",
                    fontSize:"x-large",
                    width:"65%",
                  }}
                  value={CLIInputDiv}
                  onChange={handleChangeCLIInputDiv}
                  onKeyDown={executeCLI}
                  placeholder="type any command"
                  type="text"
                  />
                <div ref={scrollBottomRef}></div>
                    </span>
                </div>
                </div>
                </div>
            </div>
        </>
        )
}

export default FreeModeCLI;