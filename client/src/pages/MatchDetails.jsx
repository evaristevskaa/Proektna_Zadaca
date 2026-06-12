import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";
import { getCurrentUser } from "../services/authService";

function MatchDetails() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const user = getCurrentUser();

  useEffect(() => {
    api.get(`/matches/${id}`).then((res) => setMatch(res.data));
    api.get(`/comments/match/${id}`).then((res) => setComments(res.data));
  }, [id]);

  if (!match) {
    return <main className="py-5"><div className="container">Loading...</div></main>;
  }

  const detailsByTournament = {
    Wimbledon: {
      image: "wimbeldon final.jpg",
      badgeClass: "text-bg-success",
      badge: "Grand Slam Final",
      title: "Wimbledon 2022 Final",
      courtLabel: "Court",
      description: "This match is one of the most important moments in Elena Rybakina's career. With the victory at Wimbledon 2022, she won her first Grand Slam title and became the first tennis player from Kazakhstan with a Grand Slam singles title.",
      comments: [
        ["Ana", "Great turnaround after the first set."],
        ["Marko", "This is one of the best matches of her career."]
      ]
    },
    "Indian Wells": {
      image: "indian wells.jpg",
      badgeClass: "text-bg-primary",
      badge: "WTA 1000 Final",
      title: "Indian Wells 2023 Final",
      courtLabel: "Court",
      description: "The final at Indian Wells 2023 was a big victory for Rybakina against Aryna Sabalenka. With this title, she confirmed her position among the strongest tennis players on hard court.",
      comments: [
        ["ElenaFan", "Very stable serve game."],
        ["Tea", "This was an important victory against Sabalenka."]
      ]
    },
    Brisbane: {
      image: "brisbane.jpg",
      badgeClass: "text-bg-warning",
      badge: "WTA 500 Final",
      title: "Brisbane 2024 Final",
      courtLabel: "Court",
      description: "At Brisbane 2024, Rybakina played a dominant final against Aryna Sabalenka. The 6-0, 6-3 victory was one of her most convincing performances in a WTA final.",
      comments: [
        ["Jovana", "One of her most dominant final performances."],
        ["TennisMK", "The service and aggressive play were crucial."]
      ]
    },
    "Australian Open": {
      image: "australian open.webp",
      badgeClass: "text-bg-success",
      badge: "Grand Slam Final",
      title: "Australian Open 2026 Final",
      courtLabel: "Court",
      description: "The 2026 Australian Open is another big moment in Elena Rybakina's career. With the victory against Aryna Sabalenka, she won her second Grand Slam title and solidified her position among the best tennis players in the world.",
      comments: [
        ["Ana", "A big victory against a world-class opponent."],
        ["ElenaFan", "This match shows how stable Rybakina is in major finals."]
      ]
    }
  };

  const display = detailsByTournament[match.tournament?.name] || {
    image: "rybakina.jpg",
    badgeClass: "text-bg-success",
    badge: match.tournament?.category,
    title: `${match.tournament?.name} ${match.year}`,
    courtLabel: "Surface",
    description: match.notes,
    comments: []
  };

  const addComment = async (event) => {
    event.preventDefault();

    const response = await api.post("/comments", {
      match: id,
      text: commentText
    });

    setComments([response.data, ...comments]);
    setCommentText("");
  };

  const deleteComment = async (commentId) => {
    await api.delete(`/comments/${commentId}`);
    setComments(comments.filter((comment) => comment._id !== commentId));
  };

  return (
    <>
      <header className="page-header">
        <nav className="navbar navbar-expand-lg bg-white border-bottom">
  <div className="container">


    <div className="ms-auto">
      <Link
        className="btn btn-outline-success"
        to="/matches"
      >
        Back to Matches
      </Link>
    </div>

  </div>
</nav>
        <div className="container">
          <h1 className="h2">{display.title}</h1>
          <p className="text-muted mb-0">Elena Rybakina vs {match.opponent}</p>
        </div>
        
      </header>
      <main className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="table-card">
                <img src={`http://localhost:3000/assets/images/${display.image}`} alt={display.title} className="match-image" />
                <span className={`badge ${display.badgeClass} mb-3`}>{display.badge}</span>
                <h2 className="h3">{display.title}</h2>
                <p className="text-muted">Elena Rybakina vs {match.opponent}</p>
                <hr />
                <dl className="row">
                  <dt className="col-sm-4">Year</dt><dd className="col-sm-8">{match.year}</dd>
                  <dt className="col-sm-4">Tournament</dt><dd className="col-sm-8">{match.tournament?.name}</dd>
                  <dt className="col-sm-4">Phase</dt><dd className="col-sm-8">{match.round}</dd>
                  <dt className="col-sm-4">Opponent</dt><dd className="col-sm-8">{match.opponent}</dd>
                  <dt className="col-sm-4">Result</dt><dd className="col-sm-8">{match.score}</dd>
                  <dt className="col-sm-4">{display.courtLabel}</dt><dd className="col-sm-8">{match.tournament?.surface}</dd>
                  <dt className="col-sm-4">Status</dt><dd className="col-sm-8"><span className={match.result == "Win" ? "badge text-bg-success" : "bagde text-bg-danger"}>{match.result}</span></dd>
                </dl>
                <p>{display.description}</p>
                {user?.role === "admin"
                ? (
                    <div className="d-flex gap-2">
                      <Link className="btn btn-warning" to={`/edit-match/${match._id}`}>Edit</Link>
                      <Link className="btn btn-danger" to={`/delete-match/${match._id}`}>Delete</Link>
                    </div>
                  )
              : <div className="alert alert-light border">Admin editing options are available only after admin login.</div>}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="table-card">
                <h3 className="h5">Comments</h3>
               {comments.length === 0 && display.comments.map(([author, text]) => (
                  <div className="border-bottom py-3" key={`${author}-${text}`}>
                    <strong>{author}</strong>
                    <p className="mb-0 text-muted">{text}</p>
                  </div>
                ))}
                {comments.map((comment) => (
                  <div className="border-bottom py-3" key={comment._id}>
                      <div className="d-flex justify-content-between gap-2">
                      <strong>{comment.user?.username || comment.user?.firstName || "User"}</strong>
                      {(user?.role === "admin" || user?.id === comment.user?._id) && (
                        <button
                          className="btn btn-sm btn-outline-danger"
                          type="button"
                          onClick={() => deleteComment(comment._id)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                    <p className="mb-0 text-muted">{comment.text}</p>
                  </div>
                ))}

                {user ? (
                  <form className="mt-3" onSubmit={addComment}>
                    <label className="form-label" htmlFor="commentText">Add comment</label>
                    <textarea
                      className="form-control"
                      id="commentText"
                      rows="3"
                      value={commentText}
                      onChange={(event) => setCommentText(event.target.value)}
                      minLength="3"
                      maxLength="500"
                      required
                    />
                    <button className="btn btn-success w-100 mt-3" type="submit">Save comment</button>
                  </form>
                ) : (
                  <div className="alert alert-light border mt-3 mb-0">
                    Log in as a registered user to add comments.
                  </div>
                )}

             </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MatchDetails;
