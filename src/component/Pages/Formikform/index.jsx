import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as yup from 'yup'

const schema=yup.object().shape({
    Username:yup.string().required('username is required'),
     Password:yup.string().required('password is required') 
    
})

function Index() {
  return (
    <div>
        <Formik 
        initialValues={{
            Username:'',
            Password:''
        }}
        validationSchema={schema}
        onSubmit={values=>{
            console.log(values)
        }}
        >
{({handleSubmit})=>{
    return <Form onSubmit={handleSubmit} className='grid grid-cols-1 gap-8 w-7/12 mx-auto rounded-md
     border border-gray-400 shadow-lg shadow-gray-400 p-8 mt-10'>
        <div className='flex flex-col gap-4'>
            <label className='font-bold text-xl'>Username</label>
            <Field type='text' name='Username' placeholder='enter username'
             className='border rounded-md h-16 border-gray-200 outline-none'  />
            <ErrorMessage name='Username' component={'div'} className='text-red-500' />
        </div>
        <div className='flex flex-col gap-4'>
            <label className='font-bold text-xl'>Password</label>
            <Field type='password' name='Password' placeholder='enter password'
             className='border rounded-md h-16 border-gray-200 outline-none'  />
            <ErrorMessage name='Password' component={'div'} className='text-red-500' />
        </div>
        <div>
         <button className='bg-green-500 text-white shadow-lg cursor-pointer rounded-sm hover:scale-110 px-8 py-4' type='submit'>Submit</button>   
        </div>
    </Form>
}}
        </Formik>
    </div>
  )
}

export default Index