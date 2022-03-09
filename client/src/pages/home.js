// Landing page, basic navigation options directing to either route

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex-auto text-center mx-auto font-bold text-2xl mt-10">
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
