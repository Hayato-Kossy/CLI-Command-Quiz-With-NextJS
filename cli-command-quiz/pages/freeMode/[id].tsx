import CLI from "@/componets/CLI";
import { type } from "os";
import React, {FC, useState} from "react";

type News= [
    {
      id: "1",
      title: "test1",
      content: "texttext1",
    },
    {
      id: "2",
      title: "test2",
      content: "texttext2",
    },
  ]

const freeMode = (news:News) => {

    return(


        <CLI/>

    ) 
}

export default freeMode;