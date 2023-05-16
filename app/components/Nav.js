import Link from "next/link";
const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center p-2 md:p-4">
        <h2 className="flex-1 text-2xl font-bold">
          <Link href="/">Golf Tracker</Link>
        </h2>
        <button className="px-4 py-2 bg-green-600 text-white border-0 m-4">
          Login
        </button>
        <button className="px-4 py-2 bg-green-600 text-white border-0 m-4">
          Logout
        </button>
        <button className="px-4 py-2 bg-green-600 text-white border-0 m-4">
          Sign Up
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
