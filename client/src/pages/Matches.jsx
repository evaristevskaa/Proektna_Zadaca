import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { getCurrentUser } from "../services/authService";

function Matches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = getCurrentUser();
  console.log("USER:", user);

  useEffect(() => {
    api.get("/matches")
      .then((res) => setMatches(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="h2">List of Matches and Titles</h1>
          <p className="text-muted mb-0">Important matches, tournaments, opponents and results.</p>
        </div>
      </header>
      <main className="py-5">
        <div className="container">
          <h5>User role: {user?.role}</h5>
          {user?.role === "admin" && <Link to="/add-match" className="btn btn-success mb-3">Add Match</Link>}

          <div className="table-card mb-4">
            <h2 className="h5 mb-3">Filters</h2>
            <div className="row g-3">
              <div className="col-md-4">
                <label htmlFor="search" className="form-label">Search</label>
                <input type="text" className="form-control" id="search" defaultValue="Wimbledon" />
              </div>
              <div className="col-md-4">
                <label htmlFor="category" className="form-label">Category</label>
                <select className="form-select" id="category" defaultValue="All categories">
                  <option>All categories</option>
                  <option>Grand Slam</option>
                  <option>WTA 1000</option>
                  <option>WTA 500</option>
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="year" className="form-label">Year</label>
                <select className="form-select" id="year" defaultValue="All years">
                  <option>All years</option>
                  <option>2026</option>
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>
            </div>
          </div>

          <div className="table-card">
            <div className="table-responsive">
            {loading ? <p>Loading...</p> : (
              <table className="table align-middle">
                <thead>
                  <tr><th>Year</th><th>Tournament</th><th>Opponent</th><th>Result</th><th>Type</th><th>View</th></tr>
                </thead>
                <tbody>
                  {matches.map((match) => (
                    <tr key={match._id}>
                      <td>{match.year}</td>
                      <td>{match.tournament?.name}</td>
                      <td>{match.opponent}</td>
                      <td>{match.score}</td>
                      <td><span className="badge text-bg-success">{match.tournament?.category}</span></td>
                      <td><Link className="btn btn-sm btn-outline-success" to={`/matches/${match._id}`}>Details</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            </div>
            <p className="small text-muted mb-0">
              Selected matches from the most important seasons in Elena Rybakina's career.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Matches;
