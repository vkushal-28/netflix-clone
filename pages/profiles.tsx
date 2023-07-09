import React from 'react'
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

export async function name(context:NextPageContext) {
    const session = await getSession()
    if(!session){
        return{
            redirect:{
                destination:'/auth',
                permanent:false
            }
        }
    }
    return {
        props:{}
    } 
}
const Profiles = () => {
const router= useRouter();
    return (
    <div className='flex items-center h-full justify-center'>
        <div className="flex flex-col">
            <div className="text-3xl md:text-6xl text-white text-center">Who is watching?</div>
            <div className="flex items-center justify-center gap-8 mt-10">
                <div onClick={()=>{router.push('/')}}>
                    <div className="group flex-row w-44 mx-auto">
                        <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                            <img src='/images/default-blue.png' alt='Profile' />

                        </div>
                        <div className="mt-4 text-gray text-2xl text-center group-hover:text-white">Name</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profiles