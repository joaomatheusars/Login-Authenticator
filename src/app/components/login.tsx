'use client';
import Image from 'next/image'
import { signIn, signOut, useSession } from "next-auth/react";
import CreateAccount from "./createAccount"
import React, { useRef, useState } from "react";
import { useFormik } from 'formik';
import login_validate from '../lib/validate'
import { useRouter } from 'next/navigation'


const Login = () => {
  const {data:session} = useSession()
  const {status, data} = useSession();
  const handlerLoginClick = () => signIn('google');
  const handleLogoutClick = () => {signOut({redirect: false})};
  const [toggle, setToggle] = useState(false);
  const handleHideData = () => {setToggle(!toggle);};
  const router = useRouter();

    return (
      <div className='container mx-auto'>
        {!toggle &&(
          <div>
            {status === 'unauthenticated' &&(
              <div className='flex flex-col gap-4 items-center'>
                <button className='flex text-textGray p-4 items-center gap-4 bg-white border rounded w-96 h-16 font-medium justify-center' onClick={handlerLoginClick}> 
                  <Image width={32} height={32} src='/googleIcon.png' alt='Group' />
                  <p>Sign In with Google</p>
                </button>

                <div className='flex w-full items-center'>
                  <div className='w-full h-[1px] bg-white'></div>
                  <h2 className='px-5 font-medium text-grayPrimary whitespace-nowrap text-xl'>OR</h2>
                  <div className='w-full h-[1px] bg-white'></div>
                </div>
                    
                <form >
                  <div className='flex flex-col gap-2'>
                    <h3 className='font-medium text-lg'>Email</h3>
                    <input 
                      className='h-12 rounded-3xl border-purpleBorder shadow-xl w-96 text-black p-4' 
                      type="email" 
                    />
                    
                  </div>

                  
                  
                  <div className='flex flex-col gap-2 mt-3'>
                    <h3 className='font-medium text-lg'>Password</h3>
                    <input 
                      className='h-12 rounded-3xl border-purpleBorder shadow-xl w-96 text-black p-4' 
                      type="password"  
                      id="password"
                    />
                    
                  </div>

                  <div className='flex flex-col items-center w-full mt-10 gap-4'>
                    <button type="submit" className='rounded w-full bg-greenButton font-semibold text-2xl p-4 border-greenButtonBorder border-[1px] hover:bg-greenHouverButton'>Sign In</button>
                    <p className='font-extralight'>Don’t have an account? <span className='font-semibold'><button onClick={handleHideData}>Sing up now</button></span></p>
                    </div>
                </form>
              </div>
            )}
          </div>
        )}

        {status === 'authenticated' && data.user &&(
          <button className='flex text-textGray p-4 items-center gap-4 bg-white border rounded-md w-96 h-16 font-medium justify-center' onClick={handleLogoutClick}> 
            <Image width={32} height={32} src={data.user?.image!} alt='Group' className='rounded-full' />
            <p>SignOut <span className='font-bold'>{data.user?.name!}</span></p>
          </button>
        )}

        {toggle &&(
            <CreateAccount/>
        )}
      </div>
    );
}
 
export default Login;