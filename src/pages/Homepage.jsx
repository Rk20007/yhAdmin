import moment from "moment";
import React, { useEffect } from "react";
import RulesAndRegulations from "../components/RulesAndRegulations ";

const Homepage = () => {
  let currentTime = moment();

  const [input, setInput] = React.useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setInput(currentTime.format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [input]);

  return (
    <main style={{ paddingLeft: "25px", paddingRight: "50px", paddingTop:'5rem' }}>
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Welcome {localStorage.getItem("admin_name")}!</h1>
      </section>
      <section>
        <RulesAndRegulations />
      </section>
    </main>
  );
};

export default Homepage;
