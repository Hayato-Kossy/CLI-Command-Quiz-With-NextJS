import React from 'react'

function Quiz1() {
  return (
    <div id="Quiz" className="bg-result container border border-success vh-60 p-3  col-md-5">
        <div id="title" className="p-5 text-center">
            <h3 className="text-success" id="question">問題１：ディレクトリの作成</h3>
        </div>
        <div className="p-3">
            <h4 className="text-success">pythonディレクトリとJavaディレクトリを作成してください。</h4>
        </div>
        <div className="p-3">
            <h5 className="text-success">ヒント：mkdir ディレクトリ名　でディレクトリを作成できます。</h5>
        </div>
    </div>  
    )
}

export default Quiz1