import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../components";

export const IndexPage = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.put("http://localhost:3333/hotel");
      console.log("dataL:", data);
      setValue(data?.message ?? "something went wrong!!");
    };
    fetch();
  }, []);
  return (
    <div>
      helloasd {value}
      <h1>asdas</h1>
      <Button />
    </div>
  );
};
