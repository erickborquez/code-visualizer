import { Type } from "@code-visualizer/types";
import React from "react";

interface Props {
  name: string;
}

export const Button = ({ name }: Props) => {
  const e: Type = "asdasd";
  console.log(e);
  return <button>{name}ddddd</button>;
};

export const Erick = () => {
  return <Button name="Erick erick erick" />;
};
