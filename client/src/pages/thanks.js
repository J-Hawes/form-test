export default function Thankyou() {
  console.log();
  return (
    <div className="flex-auto text-center mx-auto font-bold text-2xl mt-10 bg-blue-300">
      <h2>Thank You for your submission!</h2>
      <p></p>
      <div>
        You submittded the following:
        {/* <ul>
          {Object.entries(formData).map(([name, value]) => {
            return (
              <li key={name}>
                <strong>{name}</strong>: {value.toString()}
              </li>
            );
          })}
        </ul> */}
      </div>
    </div>
  );
}
