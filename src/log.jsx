
import React from 'react'
import logImg from './log.jpg'
function Log(){
    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover'src={logImg} alt=""/>
            </div>
            <div className='bg-blue-300 flex flex-col justify justify-center'>
                <form className='max-w-[700px] h-screen w-full mx-auto bg-blue-500 p-8 px-8 rounded-lg space-y-5'>
                <div className='text-3xl font-medium'>
                <h1>Registration Info</h1>
        </div>
        <div className='flex flex-col gap-2'>
                    <label className=' text-l'>Name</label>
                    <input type='text' name='Name' placeholder='enter your name' 
                    className='border rounded-md h-10 border-gray-100 outline-none p-2'  />
                    
                    </div>
                    
                    <div className='flex flex-col gap-2'>
                    <label className=''>Birthdate</label>
                    <input type='date'name='Birthdate'
                    className='border rounded-md h-10' />
                </div>
                <div className='flex flex-col gap-4'>
             <select id="Gender" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Gender</option>
  <option value="M">Male</option>
  <option value="F">Female</option>
  <option value="O">Other</option>
</select>
       </div>          
                 {/* <div id='gender' className='text-sm mb-2'><label>Gender:</label>
             <input type='radio' name='gender' id='male' className='text-sm mx-1' checked /><label for='male'>Male</label>
             <input type='radio' name='gender' id='female' className='text-sm mx-1' checked /><label for='male'>Female</label>
             <input type='radio' name='gender' id='other' className='text-sm mx-1' checked /><label for='male'>Other</label>
             </div>  */}
              <div className='flex flex-col gap-4'>
              {/* <label for="class" class="block mb-2 text-sm font-medium  dark:text-white">Class</label> */}
<select id="class" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Class</option>
  <option value="IM">Intermediate</option>
  <option value="UG">Undergraduate</option>
  <option value="PG">Postgraduate</option>
</select>
       </div>          
       <div className='flex flex-col gap-2'>
                    <label className=' text-l'>Registration code</label>
                    <input type='text' name='Registrationcode' placeholder='enter your code' 
                    className='border rounded-md h-10 border-gray-100 outline-none p-2'  />
                    </div>        
                    <div>
                 <button 
                 className='bg-green-500 text-white shadow-lg
                  cursor-pointer rounded-sm hover:scale-110 px-10 py-4  '
                   type='submit'>Search</button>   
                </div> 
        
                </form>
                
            </div>
        </div>
        )
    } 
    
    export default Log