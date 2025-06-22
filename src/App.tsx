import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="loader-screen">
        <div className="loader" />
      </main>
    );
  }

  return (
    <main className="homepage fade-in">
      <h1 className="homepage__title">👋 Yo, I’m Harshit.</h1>
      <p className="homepage__subtitle">
        This server is live.
        <br />
        More things coming soon.
      </p>
    </main>
  );
}

export default App;
