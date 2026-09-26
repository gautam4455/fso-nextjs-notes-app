"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid username or password");
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-container gap-3">
          <div className="grid-item">
            <label className="font-bold">Username:</label>

            <input
              type="text"
              name="username"
              placeholder="Enter your email/username"
              required
              className="ml-1 p-1 border rounded"
            />
          </div>

          <div className="grid-item">
            <label className="font-bold">Password:</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="ml-1 p-1 border rounded"
            />
          </div>

          <div className="grid-item">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
