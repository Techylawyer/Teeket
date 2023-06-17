import "../styles/Tina.css";
// import Footer from "../Screens/Footer";

export function Footers() {
  return (
    <footer className="Footer">
    <div className="flex justify-center items-center" style={{fontSize:12, marginTop: -5}}>
      <div>
                    <p>By continuing, you acknowledge that you have read</p>
      <p>
        and understood, and agree to Teeket’s{" "}
        <a href=" " className="Footerlink">
          Terms
        </a>
      </p>
      <p>
        <a href=" " className="Footerlink">
          of Service{" "}
        </a>
        and &nbsp;
        <a href=" " className="Footerlink">
          Privacy Policy
        </a>
        .
      </p>
      </div>
    </div>
      <div>
        <div
          className="mt-8 text-center"
          style={{ backgroundColor: "#D0DBF1", fontSize: 12 , padding: 20}}
        >
          HerTechTrail Frontend Pro Cohort 6 Capstone project
          <p>
            Designed by <span className="font-bold">Team 7</span>
          </p>
        </div>
      </div>
      {/* <Footer/> */}
    </footer>
  );
}