import "animate.css";
import raj from "../assets/raj.jpg";
import resume from "../assets/Rajnandini profilee.pdf";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin, IoMail } from "react-icons/io5";

const Hme = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <main className={`home ${isMenuOpen ? "active" : ""}`} id="home">
      <p className="animate__animated animate__backInDown">
        Hello, my name is{" "}
      </p>
      <h1>Raj Nandini</h1>
      <span className="animate__animated animate__flipInX">
        <img src={raj} alt={"raj img"} />
      </span>
      <h2 className="animate__animated animate__slideInLeft">
        Passionate Frontend Developer and Competitive Coder
      </h2>
      <p className="animate__animated animate__slideInRight">
        Building UIs by day, solving algorithms by night
      </p>
      <div className="social animate__animated animate__slideInUp">
        <a href={"https://github.com/RajNandini2039"}>
          <IoLogoGithub />
        </a>
        <a href={"https://www.linkedin.com/in/raj-nandini-211256286/"}>
          <IoLogoLinkedin />
        </a>
        <a href={"mailto:rajnandini2039@gmail.com"}>
          <IoMail />
        </a>
      </div>
      <a
        className="animate__animated animate__fadeIn"
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>View Resume</button>
      </a>
    </main>
  );
};

export default Hme;