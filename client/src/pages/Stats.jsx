import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Stats() {
  const data = {
    labels: ["2019", "2020", "2022", "2023", "2024", "2026"],
    datasets: [{ label: "Titles", data: [1, 1, 1, 2, 3, 1], backgroundColor: "#138a72" }]
  };

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1 className="h2">Statistics</h1>
          <p className="text-muted mb-0">A visual overview of Rybakina's career.</p>
        </div>
      </header>
      <main className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3"><div className="stat-card"><div className="stat-number">13</div><p>WTA titles</p></div></div>
            <div className="col-md-3"><div className="stat-card"><div className="stat-number">2</div><p>Grand Slam titles</p></div></div>
            <div className="col-md-3"><div className="stat-card"><div className="stat-number">2</div><p>Best ranking</p></div></div>
            <div className="col-md-3"><div className="stat-card"><div className="stat-number">1.84</div><p>Height</p></div></div>
            <div className="col-12"><div className="table-card"><Bar data={data} /></div></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Stats;
