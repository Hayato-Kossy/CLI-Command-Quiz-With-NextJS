import React from 'react'
import FileDirectoryQuizCLI from '@/componets/fileDirectoryQuizCLI'
import Quiz1 from '../Quiz/Quiz1'
import { HomeAppBar } from '@/componets/appBar'
const userName = localStorage.getItem("userName")!

function fileDirectoryQuiz() {
  return (
    <>
    <div className="bg-result vh-100 d-flex flex-column justify-content-center">
    <div className="row">
    <Quiz1></Quiz1>
    <FileDirectoryQuizCLI userName={userName}></FileDirectoryQuizCLI>
    </div>
    </div>
    <footer>
    <div className="d-flex">
    <HomeAppBar></HomeAppBar>
    </div>
    </footer>  
    </>
)
}

export default fileDirectoryQuiz