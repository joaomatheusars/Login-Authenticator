import { signIn, signOut, useSession } from "next-auth/react";
import Login from './components/login';
import CreateAccount from "./components/createAccount";

export default function Home() {
  return (
    <div className='flex'>

      <div className='container mx-auto'>
        <div className="flex flex-col p-16  items-center  bg-center bg-no-repeat bg-contain h-screen" style={{backgroundImage: `url('/bg.png')`,}}>
          <div className='flex flex-col h-11 w-full' >
            <h3 className='text-purpleH3 text-4xl font-medium'>System</h3>
            <h1 className='text-purpleH1 text-6xl font-extrabold pl-20'>Authentication</h1>
          </div>        
        </div>
      </div>
      
      
      <div className='bg-purpleBG w-2/5 h-screen flex justify-center items-center text-white'>
        <div className='container px-20 gap-4 flex flex-col items-center'>
          <div className='flex flex-col gap-4 items-center'>
              <Login/>
          </div>
        </div>
      </div>
    </div>
  )
}
