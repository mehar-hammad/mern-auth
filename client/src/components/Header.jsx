import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <Link to='/'>
          <h1 className='font-bold'>Auth App</h1>
        </Link>

        <ul className='flex gap-4'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/About'>
            <li>About</li>
          </Link>
          <Link to='/Sign-in'>
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
