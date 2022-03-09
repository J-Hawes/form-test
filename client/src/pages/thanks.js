import { useLocation, useNavigate } from "react-router-dom";

export default function Thankyou() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const formData = state;

  return (
    <div className="flex-auto text-center mx-auto">
      <h2 className="font-bold text-2xl mt-10 pt-5 bg-blue-300">
        Thank You for your submission!
      </h2>
      <p></p>
      <div className="font-bold text-2xl bg-blue-300">
        You submitted the following:
        <p></p>
        <div className="font-normal text-xl mt-5 bg-white">
          <ul>
            {/* Map over the submitted form data and display to screen */}
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
      <div className="justify-center my-3 p-3">
        <button
          className="p-3 mr-4 bg-blue-300 text-center font-bold text-slate-50 rounded-md shadow"
          type="button"
          onClick={() => navigate("/movers")}
        >
          Movers Form
        </button>
        <button
          className="p-3 bg-blue-300 text-center font-bold text-slate-50 rounded-md shadow"
          type="button"
          onClick={() => navigate("/property-report")}
        >
          Property Report
        </button>
      </div>
    </div>
  );
}
