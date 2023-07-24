import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex'>
      <div className='container mx-auto'>
        <div className="flex flex-col p-16  items-center  bg-center bg-no-repeat bg-contain h-screen" style={{backgroundImage: `url('/bg.png')`,}}>
          <div className='flex flex-col h-11 w-full' >
            <h3 className='text-purpleH3 text-4xl font-medium'>Sistema de</h3>
            <h1 className='text-purpleH1 text-6xl font-extrabold pl-20'>Autenticação</h1>
          </div>        
        </div>
      </div>
      
      
      <div className='bg-purpleBG w-2/5 h-screen flex justify-center items-center text-white'>
        <div className='container px-20 gap-4 flex flex-col items-center'>
          <div className='flex flex-col gap-4 items-center'>
            <button className='flex text-textGray p-4 items-center gap-4 bg-white border rounded-md w-96 h-16 font-medium justify-center'> 
              <Image width={32} height={32} src='/googleIcon.png' alt='Group' />
              <p>Continue with google</p>
            </button>
                  
              
              <button className='flex text-textGray p-4 items-center gap-4 bg-white border rounded-md w-96 h-16 font-medium justify-center'>
                  <Image width={32} height={32} src='/facebookIcon.png' alt='Group' />
                  <p>Continue with facebook</p>
              </button>

              <div className='flex w-full items-center'>
                <div className='w-full h-[1px] bg-white'></div>
                <h2 className='px-5 font-medium text-grayPrimary whitespace-nowrap text-xl'>OU</h2>
                <div className='w-full h-[1px] bg-white'></div>
              </div>

              <div className='flex flex-col gap-2'>
                <h3 className='font-medium text-lg'>Email</h3>
                <input className='h-12 rounded-3xl border-purpleBorder shadow-xl w-96 text-black p-4' type="text" />
              </div>

              <div className='flex flex-col gap-2 mt-3'>
                <h3 className='font-medium text-lg'>Senha</h3>
                <input className='h-12 rounded-3xl border-purpleBorder shadow-xl w-96 text-black p-4' type="password" />
              </div>

              <div className='flex flex-col items-center w-full mt-10 gap-4'>
                <button className='rounded w-full bg-greenButton font-semibold text-2xl p-4 border-greenButtonBorder border-[1px]'>Sign In</button>
                <p className='font-extralight'>Don’t have an account? <span className='font-semibold'><a href=""> Sing up now</a></span></p>
              </div>
          </div>            
        </div>
      </div>
    </div>
  )
}
