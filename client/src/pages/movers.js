import { useState, useEffect } from "react";
import Form from "../components/Form";

export default function Movers() {
  const [data, setData] = useState(null);

  // fetching the movers form from the sever
  useEffect(() => {
    fetch("/movers")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // passing data to Form component
  return (
    data && (
      <div>
        <Form data={data} />
      </div>
    )
  );
}
