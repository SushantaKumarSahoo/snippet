"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions";

type MySnippet = {
    id: string; 
    title:string;// MongoDB ObjectId is usually string in JS
    code: string;
  };
  

const EditSnippetForm = ({ snippet }: { snippet: MySnippet }) => {
  const [code, setCode] = useState(snippet.code);

  const changeEvenHandler = (value:string = "") => {
    setCode(value);
  }



  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);

  return (
    <div className="flex flex-col gap-4">
      <form action={saveSnippetAction} className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Your Code Editor:</h1>
        <Button type="submit">Save</Button>
      </form>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={changeEvenHandler}
      />
    </div>
  );
};

export default EditSnippetForm;