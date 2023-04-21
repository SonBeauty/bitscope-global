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
              className={`toggle-wrap ${!mobile && "active"}`}
              onClick={() => setmobile(!mobile)}
            >
              <span className="toggle-bar"></span>
            </div>
          </button>
          <div
            className={`${
              !mobile ? "navbar-collapse" : "navbar-collapse collapse"
            }`}
          >
            <ul className="navbar-nav ml-auto flex gap-2">
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Social
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Tokenomic
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link btn px-8 py-2 puprple_btn">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link dark_btn">
                  GET STARTED
                </Link>
              </li>
              <div className="border-2 border-purple-400 relative rounded-3xl mx-4 flex items-center justify-center gap-2">
                <select className="border-none rounded-3xl bg-purple-50">
                  <option>English</option>
                  <option>Español</option>
                </select>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}