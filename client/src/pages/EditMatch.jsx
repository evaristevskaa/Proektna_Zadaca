import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { getCurrentUser } from "../services/authService";

function EditMatch() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = getCurrentUser();

  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    tournament: "",
    opponent: "",
    year: "",
    round: "Final",
    score: "",
    result: "Win",
    notes: ""
  });

  useEffect(() => {
    Promise.all([
      api.get(`/matches/${id}`),
      api.get("/tournaments")
    ])
      .then(([matchRes, tournamentRes]) => {
        const match = matchRes.data;

        setTournaments(tournamentRes.data);

        setForm({
          tournament: match.tournament?._id || match.tournament,
          opponent: match.opponent || "",
          year: match.year || "",
          round: match.round || "Final",
          score: match.score || "",
          result: match.result || "Win",
          notes: match.notes || ""
        });
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (user?.role !== "admin") {
    return <Navigate to="/matches" replace />;
  }

  const update = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const submit = async (event) => {
    event.preventDefault();

    await api.put(`/matches/${id}`, {
      ...form,
      year: Number(form.year)
    });

    navigate(`/matches/${id}`);
  };

  if (loading) {
    return (
      <main className="py-5">
        <div className="container">
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="h2">Edit Match</h1>
          <p className="text-muted mb-0">
            Admin panel for managing matches.
          </p>
        </div>
      </header>

      <main className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">

              <form className="form-card" onSubmit={submit}>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="tournament"
                      className="form-label"
                    >
                      Tournament
                    </label>

                    <select
                      id="tournament"
                      name="tournament"
                      className="form-select"
                      value={form.tournament}
                      onChange={update}
                      required
                    >
                      {tournaments.map((tournament) => (
                        <option
                          key={tournament._id}
                          value={tournament._id}
                        >
                          {tournament.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="year"
                      className="form-label"
                    >
                      Year
                    </label>

                    <input
                      type="number"
                      id="year"
                      name="year"
                      className="form-control"
                      value={form.year}
                      onChange={update}
                      min="1990"
                      max="2100"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="opponent"
                      className="form-label"
                    >
                      Opponent
                    </label>

                    <input
                      id="opponent"
                      name="opponent"
                      className="form-control"
                      value={form.opponent}
                      onChange={update}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="score"
                      className="form-label"
                    >
                      Score
                    </label>

                    <input
                      id="score"
                      name="score"
                      className="form-control"
                      value={form.score}
                      onChange={update}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="round"
                      className="form-label"
                    >
                      Round
                    </label>

                    <select
                      id="round"
                      name="round"
                      className="form-select"
                      value={form.round}
                      onChange={update}
                    >
                      <option>Final</option>
                      <option>Semi-final</option>
                      <option>Quarter-final</option>
                      <option>Round of 16</option>
                      <option>Group stage</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="result"
                      className="form-label"
                    >
                      Result
                    </label>

                    <select
                      id="result"
                      name="result"
                      className="form-select"
                      value={form.result}
                      onChange={update}
                    >
                      <option>Win</option>
                      <option>Loss</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="notes"
                    className="form-label"
                  >
                    Notes
                  </label>

                  <textarea
                    id="notes"
                    name="notes"
                    rows="4"
                    className="form-control"
                    value={form.notes}
                    onChange={update}
                  />
                </div>

                <div className="d-flex gap-2 mt-4">
                  <button
                    type="submit"
                    className="btn btn-success"
                  >
                    Save Changes
                  </button>

                  <Link
                    to={`/matches/${id}`}
                    className="btn btn-outline-secondary"
                  >
                    Cancel
                  </Link>
                </div>

              </form>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default EditMatch;