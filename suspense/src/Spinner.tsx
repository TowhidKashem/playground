function Spinner() {
  return (
    <div className="spinner">
      <div className="sk-chase">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="sk-chase-dot" />
        ))}
      </div>
    </div>
  );
}

export default Spinner;
