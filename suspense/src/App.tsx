import React, { Suspense } from "react";
import Spinner from "./Spinner";

const Posts = React.lazy(() => import("./Posts")); // Lazy-loaded

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Posts />
      </Suspense>
    </div>
  );
}

export default App;
