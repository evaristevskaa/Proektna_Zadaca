import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";

function Register() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", username: "", password: "", role: "user" });
  const navigate = useNavigate();

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const updateRole = (event) => {
    setForm({ ...form, role: event.target.value === "Administrator" ? "admin" : "user" });
  };

  const submit = async (event) => {
    event.preventDefault();
    await register(form);
    navigate("/matches");
    window.location.reload();
  };

  return (
    <main className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form className="form-card" onSubmit={submit}>
              <h1 className="h3 mb-3">Sign in</h1>
              <p className="text-muted">
                Create a user profile so you can comment and follow your favorite matches.
              </p>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName" className="form-label">First name</label>
                  <input id="firstName" className="form-control" name="firstName" placeholder="First name" onChange={update} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  <input id="lastName" className="form-control" name="lastName" placeholder="Last name" onChange={update} required />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input id="email" className="form-control" name="email" type="email" placeholder="example@email.com" onChange={update} required />
              </div>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input id="username" className="form-control" name="username" placeholder="ana123" onChange={update} required />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input id="password" className="form-control" name="password" type="password" placeholder="At least 8 characters" onChange={update} required minLength="8" />
              </div>

              <div className="mb-3">
                <label htmlFor="role" className="form-label">User type</label>
                <select className="form-select" id="role" defaultValue="Registered user" onChange={updateRole}>
                  <option>Registered user</option>
                  <option>Administrator</option>
                </select>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="terms" defaultChecked required />
                <label className="form-check-label" htmlFor="terms">I agree to the terms of use.</label>
              </div>

              <button className="btn btn-success w-100">Sign up</button>

              <hr />
              <p className="small text-muted mb-0">
                Create a profile and save your favorite moments from Rybakina's career.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
