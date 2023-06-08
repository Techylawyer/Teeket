import "../styles/main.css";
import teeket from "../Images/teeket.png";
import { Button } from "./Button";
export function Header() {
  return (
    <div className="Header">
      <img src={teeket} alt="logo" />
      <Button bg="#001133" label="Menu" width="257px" color="white"/>
    </div>
  );
}
