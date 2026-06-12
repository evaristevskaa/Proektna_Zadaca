import { Link } from "react-router-dom";

function AddMatch() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            Rybakina Career Tracker
          </Link>

          <div className="ms-auto">
            <Link className="btn btn-outline-success" to="/matches">
              Back to list
            </Link>
          </div>
        </div>
      </nav>

      <header className="page-header">
        <div className="container">
          <h1 className="h2">Add a new match</h1>
          <p className="text-muted mb-0">
            Add a new significant match to your career archive.
          </p>
        </div>
      </header>

      <main className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">

              <div className="form-card">
                <form>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="tournament" className="form-label">
                        Tournament
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tournament"
                        defaultValue="Australian Open"
                        placeholder="Enter tournament name"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="year" className="form-label">
                        Year
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="year"
                        defaultValue="2026"
                        placeholder="2026"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="opponent" className="form-label">
                        Opponent
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="opponent"
                        defaultValue="Aryna Sabalenka"
                        placeholder="Opponent name"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="score" className="form-label">
                        Result
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="score"
                        defaultValue="6-4, 4-6, 6-4"
                        placeholder="6-4, 4-6, 6-4"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="category" className="form-label">
                        Category
                      </label>
                      <select className="form-select" id="category" defaultValue="Grand Slam">
                        <option>Grand Slam</option>
                        <option>WTA 1000</option>
                        <option>WTA 500</option>
                        <option>WTA 250</option>
                        <option>WTA Finals</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="surface" className="form-label">
                        Court
                      </label>
                      <select className="form-select" id="surface" defaultValue="Hard">
                        <option>Hard</option>
                        <option>Grass</option>
                        <option>Clay</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="round" className="form-label">
                        Phase
                      </label>
                      <select className="form-select" id="round" defaultValue="Final">
                        <option>Final</option>
                        <option>Semi-final</option>
                        <option>Quarter-final</option>
                        <option>Round of 16</option>
                        <option>Group stage</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="result" className="form-label">
                        Status
                      </label>
                      <select className="form-select" id="result" defaultValue="Win">
                        <option>Win</option>
                        <option>Defeat</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="notes" className="form-label">
                      Note
                    </label>
                    <textarea
                      className="form-control"
                      id="notes"
                      rows="4"
                      defaultValue="A brief description of the meaning of the match..."
                    />
                  </div>

                  <div className="d-flex gap-2 mt-4">
                    <button type="submit" className="btn btn-success">
                      Save
                    </button>

                    <Link
                      to="/matches"
                      className="btn btn-outline-secondary"
                    >
                      Cancel
                    </Link>
                  </div>

                </form>

                <hr />
              </div>

            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-top py-4">
        <div className="container text-center text-muted">
          <p className="mb-0">
            Rybakina Career Tracker - Add match screen
          </p>
        </div>
      </footer>
    </>
  );
}

export default AddMatch;
