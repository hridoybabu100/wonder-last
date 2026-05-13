import Image from "next/image";
import NavImg from "../../../public/assets/Wanderlast-1.png";
import Link from "next/link";

const Navbar = () => {
  const links = (
    <>
      <Link href={"/"}>
        <li>Home</li>
      </Link>
      <Link href={"/destination"}>
        {" "}
        <li>Destinations</li>
      </Link>
      <Link href={"/book"}>
        {" "}
        <li>My Bookings</li>
      </Link>
      <Link href={"/admin"}>
        <li>Admin</li>
      </Link>
    </>
  );
  return (
    <div>
      <div className="flex justify-between items-center gap-6 p-3 max-w-[85%] mx-auto">
        <div>
          <ul className="flex gap-2">{links}</ul>
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
        <div className="flex gap-2">
          <Link href={"/profile"}>
            {" "}
            <button className="btn">Profile</button>
          </Link>
          <Link href={"/login"}>
            {" "}
            <button className="btn">Login</button>
          </Link>
          <Link href={"/register"}>
            {" "}
            <button className="btn">SingUp</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
