"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
type Props = {}

export default function HomePage({ }: Props) {
  const { data: session, status, update } = useSession()
  console.log("SessionHere", session, status);

  const successfulProjects = [
    { id: 1, name: 'Project 1', status: 'Success', date: '2024-03-14' },
    { id: 2, name: 'Project 2', status: 'Success', date: '2024-03-13' },
    { id: 3, name: 'Project 3', status: 'Success', date: '2024-03-12' },
    { id: 4, name: 'Project 4', status: 'Success', date: '2024-03-11' }
  ];

  // Dummy data for failed projects
  const failedProjects = [
    { id: 1, name: 'Project 5', status: 'Failed', date: '2024-03-10' },
    { id: 2, name: 'Project 6', status: 'Failed', date: '2024-03-09' },
    { id: 3, name: 'Project 7', status: 'Failed', date: '2024-03-08' }
  ];


  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className=" text-black p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Projects</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Create New Project
        </button>
      </header>

      {/* Main content */}
      <main className="flex flex-grow">
        {/* Successfully deployed projects (70% width) */}
        <div className="flex-1 p-4">
          <h2 className="text-lg font-semibold mb-4">Successfully Deployed Projects</h2>
          <div className="overflow-y-auto max-h-full">
            {successfulProjects.slice(0, 4).map(project => (
              <div key={project.id} className="border border-gray-300 rounded p-4 mb-4">
                <div className='flex justify-between'>
                  <h3 className="font-semibold mb-2">{project.name}</h3>
                  <button>
                    <Image alt='gitUrl' src={"/download.png"} width={30} height={10} />
                  </button>
                </div>
                <p>Live: <a href="">https://sjhdhjsdyuweu.com</a> </p>
                <p>Status: <span className={project.status === 'Success' ? 'text-green-600' : 'text-red-600'}>{project.status}</span></p>
                <p>Date: {project.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Failed projects (30% width) */}
        <div className="flex-1 p-4">
          <h2 className="text-lg font-semibold mb-4">Failed Projects</h2>
          <div className="overflow-y-auto max-h-full">
            {failedProjects.slice(0, 3).map(project => (
              <div key={project.id} className="border border-gray-300 rounded p-4 mb-4">
                <div className='flex justify-between'>
                  <h3 className="font-semibold mb-2">{project.name}</h3>
                  <button>
                    <Image alt='gitUrl' src={"/download.png"} width={30} height={10} />
                  </button>
                </div>
                <p>Status: <span className={project.status === 'Success' ? 'text-green-600' : 'text-red-600'}>{project.status}</span></p>
                <p>Date: {project.date}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );



}