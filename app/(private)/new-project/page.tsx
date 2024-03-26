"use client"

import axiosAPI_SERVICE_Instance from '@/utils/axios';
import React, { useRef, useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


type Props = {}

export default function NewProject({ }: Props) {

    const newProjectFormValidator = useRef(new SimpleReactValidator())
    const [_, forceUpdate] = useState(0)

    const [form, setForm] = useState({
        projectName: "",
        gitURL: "",
        metadata: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name
        const value = e.target.value
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validForm = newProjectFormValidator.current.allValid()
 
        if (validForm) {
           const res= await axiosAPI_SERVICE_Instance.post("/health")
           console.log(res);
           
        } else {
            newProjectFormValidator.current.showMessages()
            forceUpdate(_ ^ 1) // NOR operator 

        }
        //here we need to call the Api  and gett teh response quickly and load state also        
    }
    


    return (
        <main>
            <h1 className='text-lg text-black font-serif underline'>New Project</h1>
            <div className="grid grid-cols-3 gap-4 h-screen">
                <form onSubmit={handleSubmit} className="col-span-2 p-8">

                    <div className="bg-cyan-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">

                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="projectName">
                                Project Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="projectName" type="text" placeholder="Enter Project Name" name='projectName' onChange={handleInputChange} />

                            <p className='text-red-800 bg-white/85  font-serif'>
                                {newProjectFormValidator.current.message('projectName', form.projectName, 'required|min:5')}
                            </p>
                        </div>

                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="githubUrl">
                                GitHub URL
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="githubUrl" type="text" name='gitURL' placeholder="Enter GitHub URL" onChange={handleInputChange} />
                            <p className='text-red-800 bg-white/85  font-serif'>
                                {newProjectFormValidator.current.message('gitURL', form.projectName, 'required')}
                            </p>
                        </div>

                        <div className="mb-4">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="metadata">
                                Metadata
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="metadata" placeholder="Enter Metadata" onChange={handleInputChange}></textarea>
                        </div>

                        <button type='submit' className='p-2 border-r-4 bg-black text-white font-thin font-serif'>SUBMIT</button>
                    </div>
                </form>

                <div className="col-span-1 bg-gray-200 p-8">

                    <div className="h-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-lg font-bold mb-4">Status</h2>

                    </div>
                </div>
            </div>
        </main>


    )
}