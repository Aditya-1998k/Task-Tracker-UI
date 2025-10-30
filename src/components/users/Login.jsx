import apiClient from "../../api/axios"
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault();
    setError("")
    setLoading(true)

    try{
      const response = await apiClient({
          method: "POST",
          url: "/users/login",
          data: {email, password}
      });
      console.log("Login Success.", response.data);

      localStorage.setItem("token", response.data.token);
      navigate("/dashboard")
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Task Tracker"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-black-100">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email" type="email" name="email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required autoComplete="email"
                  className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-black-100">
                  Password
                </label>
                <div className="text-sm">
                  <Link to="/forget_password" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password" type="password" name="password" value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required autoComplete="current-password"
                  className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center mt-2"> {error}  </p>
            )}

            {loading && (
              <p className="text-gray-500 text-sm text-center mt-2">  Logging in... </p>
            )}

            <div>
              <button
                type="submit" disabled={loading} // Prevent Double click
                className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-black-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-500 disabled:opacity-50"
              >
                {loading ? "Please wait..." : "Sign in"}
              </button>
            </div>
          </form>

        <p className="mt-10 text-center text-sm/6 text-gray-400">
          Not a member?
          <Link to="/signup" className="font-semibold text-indigo-400 hover:text-green-300">
            Start free trial
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
