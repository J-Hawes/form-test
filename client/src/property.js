import { useState, useEffect } from "react";
import App from "./App";

export default function Property() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/property-report")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  data && console.log(data.data);

  return (
    data && (
      <main style={{ padding: "1rem 0" }}>
        <App data={data} />
      </main>
    )
  );
}
