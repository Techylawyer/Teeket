import "../styles/main.css";
import teeket from "../imgs/TeeketLogo.png";
import { Button } from "./Button";
export function Header() {
  return (
    <header className="Header">
      <img src={teeket} alt="logo" />
      <Button bg="#001133" label="Menu" color="#FFFFFF"/>
    </header>
  );
}
