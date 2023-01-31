import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppendParagraph({ CLIInputDiv, userName }: { CLIInputDiv: string, userName: string}) {
    return (
        <p className="m-0 output-text align-top"> 
        <span>&nbsp;{userName}</span>
        <span>&nbsp;@</span>
        <span className='mr-3'> MacBook %&nbsp;{CLIInputDiv}</span>
        </p>
    )
}

export default AppendParagraph;