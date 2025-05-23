import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

const page = async () => {
  const snippets = await prisma.snippet.findMany();
  // console.log(snippets)
  
  return (
    <>
      

      <div className="flex justify-between bg-[#ECFAE5] p-2">
        <div className="font-extrabold text-4xl text-[#B03052]">All Snippets</div>
        <div>
          <Link href="/snippet/new">
            <Button>
              <FaPlus />
              NEW
            </Button>
          </Link>
        </div>
      </div>

      {snippets.map((snippet) => (
        <div key={snippet.id} className="flex items-center justify-between bg-gray-200 p-2 rounded-md my-2">
          <h1>{snippet.title}</h1>
          
          <Link href={`/snippet/${snippet.id}`}>
            <Button variant={'link'}>View</Button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default page;
