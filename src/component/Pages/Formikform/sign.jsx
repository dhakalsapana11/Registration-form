import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as yup from 'yup'

const schema= yup.object().shape({
Name: yup.string().required('name is required') , 
Email:yup.string().required('email is required'),
Password: yup.string().required('password is required')
})
function Sign(){
    return(
        <div>
            <Formik
            initialValues={{
                Name:'',
                Email:'',
                Password:''

            }}
            validationSchema={schema}
            onSubmit={values=>{
                console.log(values)
            }}
            >
           {({handleSubmit})=>{
            return <Form onSubmit={handleSubmit} className='grid grid-cols-1 gap-8 w-6/12 mx-auto rounded-md
             border border-gray-400 shadow-lg shadow-gray-400 p-8 mt-10'>
                <div className='flex flex-col gap-4'>
                    <label className='font-bold text-xl'>Name</label>
                    <Field type='text' name='Name' placeholder='enter your name' 
                     className='border rounded-md h-16 border-gray-200 outline-none p-2'  />
                    <ErrorMessage name='Name' component={'div'} className='text-red-500' />
                </div>
                <div className='flex flex-col gap-4'>
                    <label className='font-bold text-xl'>Email</label>
                    <Field type='text' name='Email' placeholder='enter email'
                     className='border rounded-md h-16 border-gray-200 outline-none p-2'  />
                    <ErrorMessage name='Email' component={'div'} className='text-red-500' />
                </div>
                <div className='flex flex-col gap-4'>
                    <label className='font-bold text-xl'>Password</label>
                    <Field type='password' name='Password' placeholder='enter password'
                     className='border rounded-md h-16 border-gray-200 outline-none'  />
                    <ErrorMessage name='Password' component={'div'} className='text-red-500' />
                </div>
                <div>
                 <button 
                 className='bg-green-500 text-white shadow-lg
                  cursor-pointer rounded-sm hover:scale-110 px-8 py-4'
                   type='submit'>Sign Up</button>   
                </div>
            </Form>
        }}
                </Formik>
            </div>
          )
        }
        
        export default Sign
        
     
