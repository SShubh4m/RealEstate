import {FaSearch} from 'react-icons/fa';
import {Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='bg-gray-100 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link to='/'>
    <h1 className='font-bold text-sm sm:text-x flex flex-wrap'>
        <span className='text-gray-500'>Real</span>
        <span className='text-gray-700'>Estate</span>
        </h1> </Link>
        <form className='bg-gray-200 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder="Search.." className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
            <Link to='/'><li className='hidden sm:inline text-gray-600 hover:underline'>Home</li></Link>
            <Link to='/about'><li className='hidden sm:inline text-gray-600 hover:underline'>About</li></Link>
            <Link to='/sign-in'><li className=' text-gray-600 hover:underline'>Sign In</li></Link>
        </ul>
    </div>
      
    </header>
  )
}
