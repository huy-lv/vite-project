import React from "react";
import { Title } from "./components/Title";
import { Button } from "@mui/material";

export const App = ({ name = "World" }) => {
  return (
    <div>
      <Title>xxxHello {name}!</Title>
      <Button variant="contained">ssss</Button>
    </div>
  );
};
