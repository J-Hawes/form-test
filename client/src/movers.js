import { useState, useEffect } from "react";

export default function Movers() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/movers")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  data && console.log(data.data);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Movers</h2>
    </main>
  );
}
