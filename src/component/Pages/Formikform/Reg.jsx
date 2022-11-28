import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik' 
 import * as yup from 'yup' 
import logImg from '../../Resources/log.jpg' 




const schema= yup.object().shape({
Name: yup.string().required('name is required') , 
Registrationcode: yup.string().required('code is required')
})
function Reg(){
    return(
        
        
       
            <Formik
            initialValues={{
                Name:'',
                Registrationcode:''

            }}
            validationSchema={schema}
            onSubmit={values=>{
                console.log(values)
            }}
            >
           {({handleSubmit})=>{
            return <Form onSubmit={handleSubmit} className='w-screen h-screen flex justify-center items-center '>
                <div className=' h-5/6 w-7/12 grid grid-cols-7 border  rounded-lg z-3 shadow-gray-800'>
            <div className='col-span-2 '>
                <img className='  w-full h-full object-cover rounded-lg' src={logImg} alt=""/>
            </div>
        
                <div className='col-span-5    bg-gray-200 p-5 rounded-lg '>
                <div className='text-3xl font-medium p-5'>
                <h1>Registration Info</h1>
                </div>
        <div className='  grid grid-cols-2 gap-3 p-5'>
        <div className='flex flex-col gap-2'>
                    <label className=' text-l'>Name</label>
                    <Field type='text' name='Name' placeholder='enter your name' 
                    className='border rounded-md h-10 border-gray-100 outline-none p-2'  />
                    <ErrorMessage name='Name' component={'div'} className='text-red-500' />
                    </div>
                    
                    <div className='flex flex-col gap-2'>
                    <label className=''>Birthdate</label>
                    <Field type='date'name='Birthdate'
                    className='border rounded-md h-10' />
                </div>
                <div className=' gap-4'>
             <Field as="Select" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option >Gender</option>
  <option value="M">Male</option>
  <option value="F">Female</option>
  <option value="O">Other</option>
</Field>
       </div>          
                 
              <div className='flex flex-col gap-4'>
              {/* <label for="class" class="block mb-2 text-sm font-medium  dark:text-white">Class</label> */}
<Field  as='Select' id="class" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option >Class</option>
  <option value="IM">Intermediate</option>
  <option value="UG">Undergraduate</option>
  <option value="PG">Postgraduate</option>
</Field>
       </div>          
       <div className='flex flex-col gap-2'>
                    <label className=' text-l'>Registration code</label>
                    <Field type='text' name='Registrationcode' placeholder='enter your code' 
                    className='border rounded-md h-10 border-gray-100 outline-none p-2'  />
                    <ErrorMessage name='Registrationcode' component={'div'} className='text-red-500' />
                    </div> 
                     </div>    
                <div className='p-5'>
                 <button 
                 className='bg-green-500 text-white shadow-lg
                  cursor-pointer rounded-sm hover:scale-110 px-10 py-4  '
                   type='submit'>Search</button>   
                </div>
                </div>
                </div>
                
        </Form>
           }}
        </Formik>
          
        )
    } 
    
    export default Reg
           