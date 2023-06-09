import "../styles/main.css";
import "./Button";
import "./Header";
import { Form } from "./Form";
import { Header } from "./Header";
import { Horizontal } from "./HorizontalRule";
import { Footer } from "./Footer";
import Googlei from "../Images/Googlei.png";

export function Container() {
  return (
    <div className="Container">
      <Header />
      <div className="Section">
        <h2>Login Screen signup to continue</h2>
        <a className="Google" href="#">
          <img src={Googlei} />
          <span>Continue with Google</span>{" "}
        </a>
      <Horizontal/>
        <Form />
        <Footer />
      </div>
    </div>
  );
}
