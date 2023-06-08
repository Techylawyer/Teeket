import "../styles/main.css";
import { Button } from "./Button";
import { useState } from "react";

export function Form() {
  const [inputValue, setInput] = useState();
  return (
    <div className="Input">
      <input placeholder="Enter your email address" />
      <br />
      <Button label="Continue with email" bg="#0052F6" color="#FFFFFF" />
    </div>
  );
}
