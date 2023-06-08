import "../styles/main.css";
import "./Button";
import "./Header";
import { Form } from "./Form";
import { Button } from "./Button";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Container() {
  return (
    <div className="Container">
      <Header />
      <div className="Section">
        <h2>Login Screen signup to continue</h2>
        <Button label="Continue with Google"/>
        <div className="Horizontal">
          <hr /> <span>Or</span> <hr />
        </div>
        <Form />
        <Footer />
      </div>
    </div>
  );
}
