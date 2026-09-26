import { registerUser } from "../actions/users";

const Register = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      <form action={registerUser}>
        <div className="grid grid-container gap-3">
          <div className="grid-item">
            <label className="font-bold">Username:</label>

            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your email/username"
              required
              className="ml-1 p-1 border rounded"
            />
          </div>

          <div className="grid-item">
            <label className="font-bold">Name:</label>

            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
              className="ml-1 p-1 border rounded"
            />
          </div>

          <div className="grid-item">
            <label className="font-bold">Password:</label>

            <input
              type="password"
              name="password"
              id="password"
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
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
