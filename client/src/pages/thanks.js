import { useLocation } from "react-router-dom";

export default function Thankyou() {
  const { state } = useLocation();
  const formData = state;
  return (
    <div className="flex-auto text-center mx-auto bg-blue-300">
      <h2 className="font-bold text-2xl mt-10">
        Thank You for your submission!
      </h2>
      <p></p>
      <div className="font-bold text-2xl">
        You submitted the following:
        <p></p>
        <div className="font-normal text-xl mt-10 bg-white">
          <ul>
            {Object.entries(formData.formData).map(([name, value]) => {
              return (
                <li key={name}>
                  <strong>{name}</strong>: {value.toString()}
                  <p></p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
