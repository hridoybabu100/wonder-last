"use client";
import Image from "next/image";
import NavImg from "../../../public/assets/Wanderlast-1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  //  console.log(session, 'session');
  const user = session?.user;
  console.log('User', user);

  //     await authClient.signOut({
  //   fetchOptions: {
  //     onSuccess: () => {
  //       router.push("/login"); // redirect to login page
  //     },
  //   },
  // });

  const singOutBtn = async () => {
    await authClient.signOut();
  };

  const path = usePathname();

  const links = (
    <>
      <Link
        href={"/"}
        className={`${path === "/" ? "border border-b-black p-1" : ""}`}
      >
        <li>Home</li>
      </Link>
      <Link
        href={"/destination"}
        className={`${path === "/destination" ? "border border-b-black p-1" : ""}`}
      >
        {" "}
        <li>Destinations</li>
      </Link>
      <Link
        href={"/book"}
        className={`${path === "/book" ? "border border-b-black p-1" : ""}`}
      >
        {" "}
        <li>My Bookings</li>
      </Link>
      <Link
        href={"/admin"}
        className={`${path === "/admin" ? "border border-b-black p-1" : ""}`}
      >
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
          <Link
            href={"/profile"}
            className={`${path === "/profile" ? "border border-b-black p-1" : ""}`}
          >
            {" "}
            <button className="btn">Profile</button>
          </Link>
          {user ? (
            <div className="flex gap-1 items-center">
              <Avatar>
                <Avatar.Image alt="John Doe" src={user?.image} />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <div>
                <Button onClick={singOutBtn} className="rounder-1">
                  Logout
                </Button>
              </div>
            </div>
          ) : (
            <>
              <Link
                href={"/login"}
                className={`${path === "login" ? "border border-b-black p-1" : ""}`}
              >
                {" "}
                <button className="btn">Login</button>
              </Link>
              <Link
                href={"/register"}
                className={`${path === "/register" ? "border border-b-black p-1" : ""}`}
              >
                {" "}
                <button className="btn">SingUp</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
