function AddMatch() {
  return (
    <main className="py-5">
      <div className="container">
        <div className="form-card">
          <h1 className="h3">Add Match</h1>
          <p className="text-muted">Admin form for adding a new career match.</p>
          <input className="form-control mb-3" placeholder="Tournament" />
          <input className="form-control mb-3" placeholder="Opponent" />
          <input className="form-control mb-3" placeholder="Score" />
          <button className="btn btn-success">Save</button>
        </div>
      </div>
    </main>
  );
}

export default AddMatch;
