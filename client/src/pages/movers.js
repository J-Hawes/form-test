import { useState, useEffect } from "react";
import Form from "../components/Form";

export default function Movers() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/movers")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    data && (
      <main style={{ padding: "1rem 0" }}>
        <Form data={data} />
      </main>
    )
  );
}
