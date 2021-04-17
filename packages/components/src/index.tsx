import React from "react";

interface Props {
  name: string;
}

export const Button = ({ name }: Props) => {
  return <button>{name}</button>;
};
