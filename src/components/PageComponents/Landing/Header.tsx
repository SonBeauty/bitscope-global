import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [mobile, setmobile] = useState(false);
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link href="#" className="navbar-brand">
            <Image
              width={140}
              height={30}
              alt="Logo"
              src="/image/400X200.png"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div
              className={`toggle-wrap ${mobile && "active"}`}
              onClick={() => setmobile(!mobile)}
            >
              <span className="toggle-bar"></span>
            </div>
          </button>
          <div className="navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item has_dropdown">
                <Link href="#" className="nav-link">
                  Home
                </Link>
                <span className="drp_btn">
                  <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                </span>
                <div className="sub_menu">
                  <ul>
                    <li>
                      <Link href="#">Home Defoult</Link>
                    </li>
                    <li>
                      <Link href="#">Home Dark Hero</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#_it_work" className="nav-link">
                  How it works
                </Link>
              </li>
              <li className="nav-item has_dropdown">
                <Link href="#" className="nav-link">
                  Pages
                </Link>
                <span className="drp_btn">
                  <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                </span>
                <div className="sub_menu">
                  <ul>
                    <li>
                      <Link href="#">About Us</Link>
                    </li>
                    <li>
                      <Link href="#">Reviews</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li className="nav-item has_dropdown">
                <Link href="#" className="nav-link">
                  Blog
                </Link>
                <span className="drp_btn">
                  <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                </span>
                <div className="sub_menu">
                  <ul>
                    <li>
                      <Link href="#">Blog List</Link>
                    </li>
                    <li>
                      <Link href="#">Blog Single</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link dark_btn">
                  GET STARTED
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}