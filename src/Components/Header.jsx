import { Navbar } from "flowbite-react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <Navbar rounded className=" w-full bg-opacity-10 bg-black">
        <Navbar.Brand >
          <span className="self-center whitespace-wrap text-xl font-semibold dark:text-white">
            Are you intrested in Online Learning? Contact Us.
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About Us</Navbar.Link>
          <Navbar.Link href="#">Courses</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
          <Navbar.Link href="#" className="flex flex-wrap ">
            <AiOutlineShoppingCart className="mr-1 w-5 h-5"/>Register Here | Membership Login 
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
