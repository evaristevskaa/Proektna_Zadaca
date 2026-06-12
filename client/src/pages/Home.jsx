import { Link } from "react-router-dom";
import profileImage from "../assets/images/rybakina-profile.jpg";

function Home() {
  return (
    <>
  

      {/* Hero Section */}
      <header className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-75">

            <div className="col-lg-7">

              <p className="text-uppercase fw-bold text-success mb-2">
                CAREER HIGHLIGHTS
              </p>

              <h1 className="display-4 fw-bold">
                Elena Rybakina Career Tracker
              </h1>

              <p className="lead mt-3">
                Web application for tracking Elena Rybakina's career:
                titles, Grand Slams, matches, statistics and user comments.
              </p>

              <div className="mt-4">
                <Link
                  to="/matches"
                  className="btn btn-success btn-lg me-2"
                >
                  Match preview
                </Link>

                <Link
                  to="/stats"
                  className="btn btn-outline-dark btn-lg"
                >
                  See statistics
                </Link>
              </div>

            </div>

            <div className="col-lg-5 mt-5 mt-lg-0">

              <div className="info-card">

                <img
  src={profileImage}
  alt="Elena Rybakina"
  className="profile-image"
/>

                <h2 className="h4">Summary</h2>

                <ul className="list-unstyled mt-3">
                  <li><strong>Name:</strong> Elena Rybakina</li>
                  <li><strong>Country:</strong> Kazakhstan</li>
                  <li><strong>Sport:</strong> Tennis</li>
                  <li><strong>Known by:</strong> Wimbledon 2022 title</li>
                  <li><strong>Age:</strong> 26</li>
                  <li><strong>Height:</strong> 1.84m</li>
                  <li><strong>Grand Slams singles titles:</strong> 2</li>
                </ul>

              </div>

            </div>

          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-5">
        <div className="container">

          <section className="mb-5">

            <div className="row g-4">

              <div className="col-md-4">
                <div className="feature-card">
                  <h3 className="h5">Matches and tournaments</h3>

                  <p>
                    Overview of important matches, results,
                    opponents, tournament and year.
                  </p>

                  <Link to="/matches">
                    Open list
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feature-card">
                  <h3 className="h5">Statistics</h3>

                  <p>
                    A visual display of titles, Grand Slam results
                    and progress over the years.
                  </p>

                  <Link to="/stats">
                    See statistics
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feature-card">
                  <h3 className="h5">News</h3>

                  <p>
                    Integration with tennis news or ranking API
                    for current data.
                  </p>

                  <Link to="/external-news">
                    See integration
                  </Link>
                </div>
              </div>

            </div>
          </section>

          <section>

            <h2 className="h3 mb-4">
              User roles
            </h2>

            <div className="row g-4">

              <div className="col-md-4">
                <div className="role-card">
                  <h3 className="h5">Guest</h3>

                  <p>
                    Can view matches, statistics and career details.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="role-card">
                  <h3 className="h5">Registered user</h3>

                  <p>
                    Can add comments and save favorite matches.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="role-card">
                  <h3 className="h5">Administrator</h3>

                  <p>
                    Can add, edit and delete matches,
                    tournaments and statistics.
                  </p>
                </div>
              </div>

            </div>

          </section>

        </div>
      </main>

   </>

  );
}

export default Home;