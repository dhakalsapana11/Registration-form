// import logo from './logo.svg';
/* import './next.css';
 */
function Next() {
  return (
     <div className=' m-auto h-[600px] shadow-lg shadow-gray-600 sm:max-w-[450px]'> 
        <form className= 'max-w-[500px] w-full mx-auto bg-white p-5'>
            <h2 className='text-4xl  font-bold text-center py-4'> Sign Up</h2>
        
        <div className='flex flex-col py-2 '>
            <label>Name:</label>
            <input className='border p-2 w-full' type="text" placeholder="Enter your name" />
        </div> 
        
        
        <div className='flex flex-col py-2'>
            <label>Email:</label>
            <input className='border p-2' type="text" placeholder="Enter your email" />
        </div>
        <div className='flex flex-col py-2'>
            <label>Password:</label>
            <input className='border p-2' type="password" placeholder="Enter password" />
        </div>
        <div className='flex flex-col py-2'>
            <label>Confirm Password:</label>
            <input className='border p-2' type="password" placeholder="confirm password" />
        </div>
        <button className='border w-fit h-fit my-5 px-6 py-2 rounded-md bg-green-600 hover:bg-green-500 text-white'> Sign Up </button>
    <div className='flex justify-between'>
        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember me</p>
        </div>
        </form>
        </div>
        
        
        )
    }

export default Next;

