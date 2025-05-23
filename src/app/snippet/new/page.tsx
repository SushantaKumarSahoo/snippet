import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'

const CreateSnippetPage = () => {
    async function CreateSnippet(formData:FormData){
    "use server"
    const title= formData.get("title") as string
    const code= formData.get("code") as string

    const snippet = await prisma.snippet.create({
        data:{
            title,
            code
        }
    })
  console.log("created snippet", snippet);
  redirect("/")

}

  return (
    <form action={CreateSnippet}>
        <div className='mb-4'>
            <Label className='mb-2'>Title</Label>
            <Input type='text' name='title' id='title'/>


        </div>

        <div className='mb-4'>
            <Label className='mb-2'>Code</Label>
            <Textarea name='code' id='code'/>
            

        </div>

        <Button type='submit'>New</Button>
    </form>
  )
}

export default CreateSnippetPage