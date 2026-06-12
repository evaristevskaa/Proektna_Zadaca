import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import api from "../services/api";
import { getCurrentUser } from "../services/authService";

function AddMatch() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [tournaments, setTournaments] = useState([]);
  const [playerId, setPlayerId] = useState("");
  const [form, setForm] = useState({
    tournament: "",
    opponent: "",
    year: new Date().getFullYear(),
    round: "Final",
    score: "",
    result: "Win",
    notes: ""
  });

  useEffect(() => {
    api.get("/tournaments").then((res) => {
      setTournaments(res.data);
      setForm((current) => ({
        ...current,
        tournament: current.tournament || res.data[0]?._id || ""
      }));
    });

    api.get("/matches").then((res) => {
      setPlayerId(res.data[0]?.player?._id || "");
    });
  }, []);

  if (user?.role !== "admin") {
    return <Navigate to="/matches" replace />;
  }

  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submit = async (event) => {
    event.preventDefault();

    if (!playerId) {
      alert("Seed the database first so the Rybakina player exists.");
      return;
    }

    await api.post("/matches", {
      ...form,
      player: playerId,
      year: Number(form.year)
    });

    navigate("/matches");
  };

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="h2">Add a new match</h1>
          <p className="text-muted mb-0">Add a new significant match to your career archive.</p>
        </div>
      </header>

      <main className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form className="form-card" onSubmit={submit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="tournament" className="form-label">Tournament</label>
                    <select className="form-select" id="tournament" name="tournament" value={form.tournament} onChange={update} required>
                      {tournaments.map((tournament) => (
                        <option key={tournament._id} value={tournament._id}>{tournament.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="year" className="form-label">Year</label>
                    <input type="number" className="form-control" id="year" name="year" value={form.year} onChange={update} min="1990" max="2100" required />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="opponent" className="form-label">Opponent</label>
                    <input className="form-control" id="opponent" name="opponent" value={form.opponent} onChange={update} required />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="score" className="form-label">Result</label>
                    <input className="form-control" id="score" name="score" value={form.score} onChange={update} placeholder="6-4, 4-6, 6-4" required />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="round" className="form-label">Phase</label>
                    <select className="form-select" id="round" name="round" value={form.round} onChange={update}>
                      <option>Final</option>
                      <option>Semi-final</option>
                      <option>Quarter-final</option>
                      <option>Round of 16</option>
                      <option>Group stage</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="result" className="form-label">Status</label>
                    <select className="form-select" id="result" name="result" value={form.result} onChange={update}>
                      <option>Win</option>
                      <option>Loss</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="notes" className="form-label">Note</label>
                  <textarea className="form-control" id="notes" name="notes" rows="4" value={form.notes} onChange={update} />
                </div>

                <div className="d-flex gap-2 mt-4">
                  <button type="submit" className="btn btn-success">Save</button>
                  <Link to="/matches" className="btn btn-outline-secondary">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>




    </>
  );
}

export default AddMatch;