import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
export default function HeaderMobile() {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [mobile, setmobile] = useState(true);
  return (
    <div
      className={`collapse navbar-collapse mobile-screen ${mobile && "show"}`}
    >
      <ul className="navbar-nav ml-auto">
        <li className="nav-item has_dropdown" onClick={() => setShow(!show)}>
          <Link href="#" className="nav-link">
            Home
          </Link>
          <span className="drp_btn">
            <ChevronDownIcon className="h-6 w-6 text-gray-500" />
          </span>
          {show && (
            <div className="sub_menu w-full">
              <ul>
                <li>
                  <Link href="#">Home Defoult</Link>
                </li>
                <li>
                  <Link href="#">Home Dark Hero</Link>
                </li>
                <li>
                  <Link href="#">Home Wave </Link>
                </li>
                <li>
                  <Link href="#">Home Gredient</Link>
                </li>
                <li>
                  <Link href="#">Home Video</Link>
                </li>
                <li>
                  <Link href="#">Home Video 2</Link>
                </li>
              </ul>
            </div>
          )}
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
        <li className="nav-item has_dropdown" onClick={() => setShow1(!show1)}>
          <Link href="#" className="nav-link">
            Pages
          </Link>
          <span className="drp_btn">
            <ChevronDownIcon className="h-6 w-6 text-gray-500" />
          </span>
          <div
            className="sub_menu"
            style={{ display: show1 ? "block" : "none" }}
          >
            <ul>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Reviews</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Faq</Link>
              </li>
              <li>
                <Link href="#">Sign In</Link>
              </li>
              <li>
                <Link href="#">Sign Up</Link>
              </li>
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
            Pricing
          </Link>
        </li>
        <li className="nav-item has_dropdown" onClick={() => setShow2(!show2)}>
          <Link href="#" className="nav-link">
            Blog
          </Link>
          <span className="drp_btn">
            <ChevronDownIcon className="h-6 w-6 text-gray-500" />
          </span>
          <div
            className="sub_menu"
            style={{ display: show2 ? "block" : "none" }}
          >
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
  );
}