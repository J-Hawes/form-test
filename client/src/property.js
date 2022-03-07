import { useState, useEffect } from "react";

export default function Property() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/property-report")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  data && console.log(data.data);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Property</h2>
    </main>
  );
}
