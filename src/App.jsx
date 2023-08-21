import { useState } from "react";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="dark:bg-gradient-to-b from-slate-500 to-slate-900 min-h-screen  "  >
      <AllRoutes/>
    </div>
  );
}

export default App;
