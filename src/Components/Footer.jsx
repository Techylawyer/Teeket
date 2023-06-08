import "../styles/main.css";

export function Footer() {
  return (
    <footer className="Footer">
      <p>By continuing, you acknowledge that you have read</p>
      <p>
        and understood, and agree to Teeket’s{" "}
        <a href="#" className="Footerlink">
          Terms
        </a>
      </p>
      <p>
        <a href="#" className="Footerlink">
          of Service{" "}
        </a>
        and &nbsp;
        <a href="#" className="Footerlink">
          Privacy Policy
        </a>
        .
      </p>
    </footer>
  );
}
