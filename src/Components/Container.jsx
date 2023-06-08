import "../styles/main.css";
import "./Button";
import "./Header";
import { Button } from "./Button";
import { Header } from "./Header";

export function Container() {
  return (
    <div className="Container">
      <Header />
      <div className="Section">
        <h2>Login Screen signup to continue</h2>
        <Button img="" text="" />

        <Button img="" text="" />
      </div>
    </div>
  );
}
