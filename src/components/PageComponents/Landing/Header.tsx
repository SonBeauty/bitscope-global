import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
export default function Header() {
  const [mobile, setmobile] = useState<boolean>(false);
  const size = useWindowSize();
  console.log(size);
  useEffect(() => {
    if (size.width && size.width < 991) {
      setmobile(true);
    } else {
      setmobile(false);
    }
  }, [size.width]);
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link href="#" className="navbar-brand">
            <Image
              width={200}
              height={80}
              alt="Logo"
              src="/image/600X300.png"
              className="w-80"
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
                <Link
                  href="#"
                  className="nav-link btn px-8 py-2 bg-white rounded-3xl border-2 border-purple-400"
                >
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
