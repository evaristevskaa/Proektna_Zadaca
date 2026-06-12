import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { getCurrentUser } from "../services/authService";

function DeleteMatch() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    api.get(`/matches/${id}`).then((res) => setMatch(res.data));
  }, [id]);

  if (user?.role !== "admin") {
    return <Navigate to="/matches" replace />;
  }

  const deleteMatch = async () => {
    await api.delete(`/matches/${id}`);
    navigate("/matches");
  };

  if (!match) {
    return <main className="py-5"><div className="container">Loading...</div></main>;
  }

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="h2">Delete match</h1>
        </div>
      </header>

      <main className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="table-card">
                <span className="badge text-bg-danger mb-3">Attention</span>
                <h2 className="h4">Do you want to delete this match?</h2>

                <div className="border rounded p-3 bg-light mb-4">
                  <h3 className="h5 mb-2">{match.tournament?.name} {match.year}</h3>
                  <p className="mb-1"><strong>Opponent:</strong> {match.opponent}</p>
                  <p className="mb-1"><strong>Result:</strong> {match.score}</p>
                  <p className="mb-0"><strong>Type:</strong> {match.tournament?.category}</p>
                </div>

                <div className="d-flex gap-2">
                  <button className="btn btn-danger" type="button" onClick={deleteMatch}>Delete</button>
                  <Link to={`/matches/${id}`} className="btn btn-outline-secondary">Cancel</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default DeleteMatch;
