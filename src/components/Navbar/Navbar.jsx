import Image from 'next/image';
import NavImg from '../../../public/assets/Wanderlast-1.png'

const Navbar = () => {
    return (
        <div>
           <div className='flex justify-between items-center gap-6 p-3 max-w-[85%] mx-auto'>
            <div>
                <ul className='flex gap-2'>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>My Bookings</li>
                    <li>Admin</li>
                </ul>
            </div>
            <div>
                <aside>
                    <Image src={NavImg} width={300} height={100} alt='nav-image'>

                    </Image>
                </aside>
            </div>
            <div className='flex gap-2'>
                <button className='btn'>Profile</button>
                <button className='btn'>Login</button>
                <button className='btn'>SingUp</button>
            </div>
           </div>
        </div>
    );
};

export default Navbar;