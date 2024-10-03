import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <div className="font-bold text-center text-3xl ">
          {/* logo */}
          <p>Tanzeel Newz</p>
          <hr />
        </div>
        <div>
          {/* NAVBAR */}
          <nav>
            <ul className="justify-center text-xl flex gap-x-7 list-none ">
              <li>
                <Link
                  href="/"
                  className=" text-black hover:text-gray-300 duration-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/sport"
                  className=" text-black hover:text-gray-300 duration-500"
                >
                  Sport
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className=" text-black hover:text-gray-300 duration-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className=" text-black hover:text-gray-300 duration-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
        </div>
      </div>
    </header>
  );
}
