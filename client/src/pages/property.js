import { useState, useEffect } from "react";
import Form from "../components/Form";

export default function Property() {
  const [data, setData] = useState(null);

  // fetching the property-report form from the sever
  useEffect(() => {
    fetch("/property-report")
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
