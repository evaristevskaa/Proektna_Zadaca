function EditMatch() {
  return (
    <main className="py-5">
      <div className="container">
        <div className="form-card">
          <h1 className="h3">Edit Match</h1>
          <p className="text-muted">Admin form for updating the selected match.</p>
          <input className="form-control mb-3" defaultValue="Wimbledon" />
          <input className="form-control mb-3" defaultValue="Ons Jabeur" />
          <input className="form-control mb-3" defaultValue="3-6, 6-2, 6-2" />
          <button className="btn btn-success">Save Changes</button>
        </div>
      </div>
    </main>
  );
}

export default EditMatch;
