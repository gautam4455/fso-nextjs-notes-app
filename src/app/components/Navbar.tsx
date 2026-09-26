"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav>
      <Link href="/">home</Link>
      {" | "}
      <Link href="/users">users</Link>
      {" | "}
      <Link href="/notes">notes</Link>
      {" | "}
      {session ? (
        <>
          <Link href="/notes/new">create new note</Link>
          {" | "}
          <em>{session.user?.name} logged in</em>{" "}
          <button onClick={() => signOut()}>logout</button>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
          {" | "}
          <Link href="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
