import rybakinaImage from "../assets/images/rybakina.jpg";
import newsImage from "../assets/images/rybakina news.webp";

function ExternalNews() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="h2">
            Latest news, rankings and information related to Elena Rybakina.
          </h1>
        </div>
      </header>

      <main className="py-5">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-4">
              <div className="news-card">
                <img
                  src={rybakinaImage}
                  alt="Elena Rybakina"
                  className="news-image"
                />

                <p className="source mb-2">
                  Source: WTA News API
                </p>

                <h2 className="h5">
                  WTA News
                </h2>

                <p>
                  Rybakina prepares for the next tournament.
                </p>

                <a
                  href="https://www.wtatennis.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open WTA
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="news-card">
                <p className="source mb-2">
                  Source: Rankings API
                </p>

                <h2 className="h5">
                  Current Ranking Information
                </h2>

                <p>
                  Current WTA ranking information.
                </p>

                <a
                  href="https://www.wtatennis.com/rankings/singles"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Rankings
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="news-card">
                <img
                  src={newsImage}
                  alt="Rybakina News"
                  className="news-image"
                />

                <p className="source mb-2">
                  Source: Live Scores API
                </p>

                <h2 className="h5">
                  Latest Match Updates
                </h2>

                <p>
                  The latest matches or live score data can be displayed here.
                </p>

                <a
                  href="https://www.wtatennis.com/scores"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Scores
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default ExternalNews;