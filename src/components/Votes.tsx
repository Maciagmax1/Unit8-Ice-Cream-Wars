import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [cVotes, setCVotes] = useState(0);
  const [vVotes, setVVotes] = useState(0);
  const [sVotes, setSVotes] = useState(0);

  const incrementVotes = (type: string): void => {
    if (type === "chocolate") {
      setCVotes((prev) => prev + 1);
    } else if (type === "vanilla") {
      setVVotes((prev) => prev + 1);
    } else if (type === "strawberry") {
      setSVotes((prev) => prev + 1);
    }
  };

  const totalVotes: number = cVotes + vVotes + sVotes;
  const cPercent: string = ((cVotes / totalVotes) * 100).toFixed(2) + "%";
  const vPercent: string = ((vVotes / totalVotes) * 100).toFixed(2) + "%";
  const sPercent: string = ((sVotes / totalVotes) * 100).toFixed(2) + "%";

  return (
    <section className="Votes">
      <h2>Vote Here</h2>
      <div>
        <button onClick={() => incrementVotes("chocolate")}>Chocolate</button>
        <button onClick={() => incrementVotes("vanilla")}>Vanilla</button>
        <button onClick={() => incrementVotes("strawberry")}>Strawberry</button>
      </div>

      {totalVotes ? (
        <>
          {cVotes > 0 && (
            <>
              <p>
                Chocolate: {cVotes} ({cPercent})
              </p>
              <div className="bar flavor1" style={{ width: cPercent }}></div>
            </>
          )}
          {vVotes > 0 && (
            <>
              <p>
                Vanilla: {vVotes} ({vPercent})
              </p>

              <div className="bar flavor2" style={{ width: vPercent }}></div>
            </>
          )}
          {sVotes > 0 && (
            <>
              <p>
                Strawberry: {sVotes} ({sPercent})
              </p>
              <div className="bar flavor3" style={{ width: sPercent }}></div>{" "}
            </>
          )}
        </>
      ) : (
        <p>No votes yet</p>
      )}
    </section>
  );
};

export default Votes;
