export default function Thankyou() {
  console.log();
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Thank You for your submission!</h2>
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
    </main>
  );
}
