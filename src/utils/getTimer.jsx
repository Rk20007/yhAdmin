import moment from "moment";
import React, { useEffect } from "react";

const GetTinmer = () => {
  let currentTime = moment();

  const [input, setInput] = React.useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setInput(currentTime.format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [input]);
  return <div>{input}</div>;
};

export default GetTinmer