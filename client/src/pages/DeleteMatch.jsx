import { Link } from "react-router-dom";

function DeleteMatch() {
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
              to="/match-details"
            >
              Back to details
            </Link>
          </div>
        </div>
      </nav>

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
                <span className="badge text-bg-danger mb-3">
                  Attention
                </span>

                <h2 className="h4">
                  Do you want to delete this match?
                </h2>

                <div className="border rounded p-3 bg-light mb-4">
                  <h3 className="h5 mb-2">
                    Wimbledon 2022 Final
                  </h3>

                  <p className="mb-1">
                    <strong>Opponent:</strong> Ons Jabeur
                  </p>

                  <p className="mb-1">
                    <strong>Result:</strong> 3-6, 6-2, 6-2
                  </p>

                  <p className="mb-0">
                    <strong>Type:</strong> Grand Slam
                  </p>
                </div>

                <div className="d-flex gap-2">

                  <button
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    Delete
                  </button>

                  <Link
                    to="/match-details"
                    className="btn btn-outline-secondary"
                  >
                    Cancel
                  </Link>

                </div>

                <hr />
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Delete Modal */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h2 className="modal-title h5">
                Confirmation
              </h2>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              Are you sure you want to delete this match?
            </div>

            <div className="modal-footer">

              <button
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                No, cancel
              </button>

              <Link
                to="/matches"
                className="btn btn-danger"
              >
                Yes, delete
              </Link>

            </div>

          </div>
        </div>
      </div>

      <footer className="bg-white border-top py-4">
        <div className="container text-center text-muted">
          <p className="mb-0">
            Rybakina Career Tracker - Delete match screen
          </p>
        </div>
      </footer>
    </>
  );
}

export default DeleteMatch;