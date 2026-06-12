import { Link } from "react-router-dom";

function EditMatch() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            Rybakina Career Tracker
          </Link>

          <div className="ms-auto">
            <Link
              className="btn btn-outline-success"
              to="/MatchDetails"
            >
              Back to details
            </Link>
          </div>
        </div>
      </nav>

      <header className="page-header">
        <div className="container">
          <h1 className="h2">Viewing and editing a match</h1>

          <p className="text-muted mb-0">
            Admin panel for managing matches from Elena Rybakina's
            career.
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
                      <label
                        htmlFor="tournament"
                        className="form-label"
                      >
                        Tournament
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="tournament"
                        defaultValue="Wimbledon"
                      />
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
                        className="form-control"
                        id="year"
                        defaultValue="2022"
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
                        type="text"
                        className="form-control"
                        id="opponent"
                        defaultValue="Ons Jabeur"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="score"
                        className="form-label"
                      >
                        Result
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="score"
                        defaultValue="3-6, 6-2, 6-2"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="category"
                        className="form-label"
                      >
                        Category
                      </label>

                      <select
                        className="form-select"
                        id="category"
                        defaultValue="Grand Slam"
                      >
                        <option>Grand Slam</option>
                        <option>WTA 1000</option>
                        <option>WTA 500</option>
                        <option>WTA 250</option>
                        <option>WTA Finals</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="surface"
                        className="form-label"
                      >
                        Court
                      </label>

                      <select
                        className="form-select"
                        id="surface"
                        defaultValue="Grass"
                      >
                        <option>Hard</option>
                        <option>Grass</option>
                        <option>Clay</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="round"
                        className="form-label"
                      >
                        Phase
                      </label>

                      <select
                        className="form-select"
                        id="round"
                        defaultValue="Final"
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
                        Status
                      </label>

                      <select
                        className="form-select"
                        id="result"
                        defaultValue="Win"
                      >
                        <option>Win</option>
                        <option>Defeat</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="notes"
                      className="form-label"
                    >
                      Note
                    </label>

                    <textarea
                      className="form-control"
                      id="notes"
                      rows="4"
                      defaultValue="This match is one of the most important moments in Elena Rybakina's career."
                    />
                  </div>

                  <div className="d-flex gap-2 mt-4">
                    <button
                      type="submit"
                      className="btn btn-success"
                    >
                      Save changes
                    </button>

                    <Link
                      to="/MatchDetails"
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
            Rybakina Career Tracker - Edit match screen
          </p>
        </div>
      </footer>
      
    </>
  );
}

export default EditMatch;