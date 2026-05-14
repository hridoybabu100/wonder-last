'use client'
import Image from "next/image";
import NavImg from "../../../public/assets/Wanderlast-1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const path = usePathname();

  const links = (
    <>
      <Link href={"/"} className={`${path === '/' ? "border border-b-black p-1" : ""}`}>
        <li>Home</li>
      </Link>
      <Link href={"/destination"} className={`${path === '/destination' ? "border border-b-black p-1" : ""}`}>
        {" "}
        <li>Destinations</li>
      </Link>
      <Link href={"/book"} className={`${path === '/book' ? "border border-b-black p-1" : ""}`}>
        {" "}
        <li>My Bookings</li>
      </Link>
      <Link href={"/admin"} className={`${path === '/admin' ? "border border-b-black p-1" : ""}`}>
        <li>Admin</li>
      </Link>
    </>
  );
  return (
    <div>
      <div className="flex justify-between items-center gap-6 p-3 max-w-[85%] mx-auto">
        <div>
          <ul className="flex gap-2 items-center">{links}</ul>
        </div>
        <div>
          <aside>
            <Image
              src={NavImg}
              width={300}
              height={100}
              alt="nav-image"
            ></Image>
          </aside>
        </div>
        <div className="flex gap-2 items-center">
          <Link href={"/profile"} className={`${path === '/profile' ? "border border-b-black p-1" : ""}`}>
            {" "}
            <button className="btn">Profile</button>
          </Link>
          <Link href={"/login"} className={`${path === 'login' ? "border border-b-black p-1" : ""}`}>
            {" "}
            <button className="btn">Login</button>
          </Link>
          <Link href={"/register"} className={`${path === '/register' ? "border border-b-black p-1" : ""}`}>
            {" "}
            <button className="btn">SingUp</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
