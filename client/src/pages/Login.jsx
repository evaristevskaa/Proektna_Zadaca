import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (event) => {
    event.preventDefault();

    try {
      await login(email, password);

      navigate("/matches");
      window.location.reload();
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <main className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">

            <div className="form-card">
              <h1 className="h3 mb-3">Log in</h1>

              <p className="text-muted">
                Log in to comment on matches and save your favorite results.
              </p>

              <form onSubmit={submit}>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    E-mail
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember"
                    />

                    <label
                      className="form-check-label"
                      htmlFor="remember"
                    >
                      Remember me
                    </label>
                  </div>

                  <Link to="/register">
                    Don't have an account?
                  </Link>

                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  Log in
                </button>

              </form>

              <hr />

              <p className="small text-muted mb-0">
                Log in to follow your favorite matches and
                participate in discussions.
              </p>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;