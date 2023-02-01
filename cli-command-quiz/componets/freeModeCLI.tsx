import * as React from 'react';
import { useRef, useLayoutEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { CLI } from '@/src/model/CLI';
import { HomeAppBar } from './appBar';

const cli:CLI = new CLI();

function FreeModeCLI({ userName }: { userName: string}) {
    // Controller.activateCLI(cli);
    const [CLIInputDiv, setCLIInputDiv] = useState('');
    const handleChangeCLIInputDiv = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCLIInputDiv(e.target.value);
    }
    const scrollBottomRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        scrollBottomRef?.current?.scrollIntoView();
    });

    const executeCLI = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.nativeEvent.isComposing || e.key !== 'Enter' || CLIInputDiv == "") return
        setCLIInputDiv("");
        appendEchoParagrah();
        appendResultParagraph(evaluatedResultsString())
        console.log(cli.getUserData)
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

    const appendResultParagraph =(message:string) => {
        let CLITextOutPut = document.getElementById("CLITextOutPut")!
        CLITextOutPut.innerHTML += 
        `
        <div class="m-0 output-text">
        <span>&nbsp;${userName}</span> % ${message}
        </div>
        `
    }

    const  evaluatedResultsString = () => {
        let parsedStringInputArray:string[] = CLIInputDiv.trim().split(" ")
        return cli.evaluatedResultsStringFromParsedStringInputArray(parsedStringInputArray)
    }

    return (
        <>
        <div id ="submit"></div>
        <div className="bg-result vh-100 d-flex flex-column justify-content-center">
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
                <header>
        <div className="d-flex">
        <HomeAppBar></HomeAppBar>
        </div>
        </header>
            
</>
        )
}

export default FreeModeCLI;