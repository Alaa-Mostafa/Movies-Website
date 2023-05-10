import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='mt-4 bg bg-primary-subtle p-3 w-75 m-auto border border-1 rounded-2 d-flex justify-content-evenly'>
            <Link to="/movies" className='text-decoration-none bg-primary text-light py-2 px-5 rounded-5'>Home</Link>
            <Link to="/notFound" className='text-decoration-none bg-primary text-light py-2 px-5 rounded-5'>Error</Link>
        </div>
    );
};

export default Navbar;