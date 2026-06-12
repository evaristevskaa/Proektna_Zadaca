import { Link } from "react-router-dom";

function Login() {
  return (
   <>

      <main className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">

              <div className="form-card">
                <h1 className="h3 mb-3">Log in</h1>

                <p className="text-muted">
                  Log in to comment on matches and save your favorite results.
                </p>

                <form>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      E-mail
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="example@email.com"
                      defaultValue="admin@rybakina.com"
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
                      defaultValue="password123"
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember"
                        defaultChecked
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

    
    </>
  );
}

export default Login;