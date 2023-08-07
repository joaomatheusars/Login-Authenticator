import React, { use, useState } from "react";
import Login from './login';
import '@/lib/seed';
import { useFormik } from 'formik';
import registerValidate from '../lib/validate'

const CreateAccount = () => {
  const [toggle, setToggle] = useState(false);
  const handleHideData = () => {
      setToggle(!toggle);
  };

  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
      cpassword:'',
    },
    validate:registerValidate,
    onSubmit
  })

  async function onSubmit(values:object){
    console.log(values)
  }



  return (       
      <div>
        {!toggle &&(
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className='flex flex-col gap-4 items-center'>
                <h1 className="font-bold text-3xl mb-4">Create Account</h1>
                <div className='flex flex-col gap-2'>
                  <h3 className='font-medium text-lg'>Email</h3>
                  <input 
                    className='h-12 rounded-3xl border-purpleBorder shadow-xl w-96 text-black p-4' 
                    type="email" 
                    {...formik.getFieldProps('email')}
                  />
                </div>
                
                <div className='flex w-full justify-center items-center mt-2 text-red-400'>
                    {formik.errors.email && formik.touched.email? <span>{formik.errors.email}</span>:<></>}
                </div>

                <div className='flex flex-col gap-2 mt-3'>
                  <h3 className='font-medium text-lg'>Password</h3>
                  <input 
                    className='h-12 rounded-3xl border-purpleBorder shadow-xl w-96 text-black p-4' 
                    type="password"
                    {...formik.getFieldProps('password')}
                    />
                </div>

                <div className='flex w-full justify-center items-center mt-2 text-red-400'>
                    {formik.errors.password && formik.touched.password? <span>{formik.errors.password}</span>:<></>}
                </div>

                <div className='flex flex-col gap-2 mt-3'>
                  <h3 className='font-medium text-lg'>Confirm Password</h3>
                  <input 
                    className='h-12 rounded-3xl border-purpleBorder shadow-xl w-96 text-black p-4' 
                    type="password"
                    id="passwordrepeat"
                    {...formik.getFieldProps('cpassword')}
                  />
                </div>
                
                <div className='flex w-full justify-center items-center mt-2 text-red-400'>
                    {formik.errors.cpassword && formik.touched.cpassword? <span>{formik.errors.cpassword}</span>:<></>}
                </div>

                <div className='flex flex-col items-center w-full mt-10 gap-4'>
                  <button className='rounded w-full bg-greenButton font-semibold text-2xl p-4 border-greenButtonBorder border-[1px] hover:bg-greenHouverButton'>Create</button>
                </div>            
              </div>
            </form>
            <div className="w-full justify-center items-center flex">
              <p className='font-extralight mt-4'>Have an account? <span className='font-semibold'><button onClick={handleHideData}>Sing in now</button></span></p>
            </div>
          </div>
        )}
      {toggle &&(<Login/>)}
    </div>
  );
}

export default CreateAccount;
