import { registerUser } from "../actions/users";

const Register = () => {
  return (
    <div>
      <h2>Register</h2>

      <form action={registerUser}>
        <div>
          <label>Username</label>

          <input type="text" name="username" id="username" required />
        </div>

        <div>
          <label>Name</label>

          <input type="text" name="name" id="name" required />
        </div>

        <div>
          <label>Password</label>

          <input type="password" name="password" id="password" required />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
