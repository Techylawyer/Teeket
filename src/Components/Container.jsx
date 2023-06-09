import "../styles/main.css";
import "./Button";
import "./Header";
import { Form } from "./Form";
import { Button } from "./Button";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Googlei from "../Images/Googlei.png";

export function Container() {
  return (
    <div className="Container">
      <Header />
      <div className="Section">
        <h2>Login Screen signup to continue</h2>
        {/* <Button label="Continue with Google" img={Googlei} className="Google" /> */}
        <a className="Google" >
          <img src={Googlei} />
          <span>Continue with Google</span>{" "}
        </a>
        <div className="Horizontal">
          <hr /> <span>Or</span> <hr />
        </div>
        <Form />
        <Footer />
      </div>
    </div>
  );
}
