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
      <div>
        <div
          className="mt-8 text-center"
          style={{ backgroundColor: "#D0DBF1" }}
        >
          Hertechtrail cohort 6 Capstone project
          <p>
            Designed by <span className="font-bold">Team 7</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
