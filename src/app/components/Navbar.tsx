"use client";

import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

import NavLink from "./NavLink";
import Profile from "./Profile";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex items-center gap-4">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/users">users</NavLink>
      <NavLink href="/notes">notes</NavLink>

      <div className="ml-auto flex items-center gap-4">
        {session ? (
          <>
            <NavLink href="/notes/new">create new note</NavLink>
            <em className="text-gray-300">{session.user?.name} logged in</em>

            <div className="relative">
              <button className="cursor-pointer" onClick={() => setOpen(!open)}>
                <Profile />
              </button>

              <div className="absolute top-full right-0 mt-1">
                {open && (
                  <button
                    onClick={() => signOut()}
                    className="bg-blue-600 hover:bg-blue-800 px-3 py-1 rounded text-sm cursor-pointer"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/register">Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
