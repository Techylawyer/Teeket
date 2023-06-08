import "../styles/main.css";
import { Button } from "./Button";
import { useState } from "react";

export function Form() {
  const [inputValue, setInput] = useState("");
  function handleEvent(event) {
    setInput((current) => {
      current = event.target.value;
      return current;
    });
  }
  return (
    <div>
      <form className="Input">
        <input
          placeholder="Enter your email address"
          value={inputValue}
          onChange={handleEvent}
          name="email"
        />
        <br />
        <Button label="Continue with email" bg="#0052F6" color="#FFFFFF" />
      </form>
    </div>
  );
}
