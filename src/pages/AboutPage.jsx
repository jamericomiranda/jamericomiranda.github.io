import { Link } from "react-router-dom";
import photo from "../assets/imgs/photo_americo.png";
import logo from "../assets/imgs/ufpe_logo1.jpg";
import lattes from "../assets/imgs/fav_ico_lattes.png";
import { FaOrcid } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { GiMaterialsScience } from "react-icons/gi";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <main className="page-content" aria-label="Content">
      <div className="wrapper">
        <div className="about-description">
          <img src={photo} alt="picture of Americo" className="photo" />

          <div className="name">
            <h1>José A. Miranda</h1>
            <p>
              José Américo de Miranda Neto é professor titular do Departamento
              de Física da Universidade Federal de Pernambuco.
            </p>
            <br />
            <br />
          </div>

          <img src={logo} alt="UFPE logo" className="logo" />
        </div>

        <div className="links">
          <span className="links-title">Links:</span>
          <ul>
            <li>
              <img src={lattes} />{" "}
              <Link target="_blank" to="http://lattes.cnpq.br/8130945956393751">
                Currículo Lattes
              </Link>
            </li>

            <li>
              <FaOrcid style={{ color: "#A6CE39" }} /> ORCID:{" "}
              <Link target="_blank" to="https://orcid.org/0000-0002-7464-6889">
                0000-0002-7464-6889
              </Link>
            </li>

            <li>
              <FaGoogleScholar style={{ color: "lightblue" }} />{" "}
              <Link
                target="_blank"
                to="https://scholar.google.com.br/citations?user=VVY-HYMAAAAJ&hl=pt-BR&oi=sra"
              >
                Google Scholar
              </Link>
            </li>

            <li>
              <svg
                className="web-science"
                width="2.5%"
                height="2.5%"
                viewBox="0 0 14 15"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <title>RID lens</title>
                <g
                  id="RID-lens"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    d="M4.61538462,12.0963198 C5.02612662,13.1360703 5.59541189,14.1141849 6.30539357,15 C9.1815605,14.3341668 11.7969244,12.9128945 13.8461538,10.9021101 C13.3814259,9.8823135 12.762796,8.93080445 12.0093399,8.07692308 C10.1364748,10.206236 7.51264012,11.6325676 4.61538462,12.0963198 L4.61538462,12.0963198 Z"
                    fill="#16AB03"
                    fillRule="nonzero"
                  ></path>
                  <path
                    d="M6.29819238,0 C5.5906916,1.03430258 5.02384472,2.17576916 4.61538462,3.38869086 C7.51279056,3.92915394 10.1368507,5.59288095 12.0097486,8.07692308 C12.7630371,7.08103861 13.3815293,5.97129068 13.8461538,4.78189882 C11.7952443,2.43420568 9.17716693,0.775561654 6.29819238,0 L6.29819238,0 Z"
                    fill="#5E33BF"
                    fillRule="nonzero"
                  ></path>
                  <path
                    d="M4.61538462,12.5143546 C3.61785865,10.0383359 3.48016561,7.33321526 4.22171494,4.78044375 C4.33349744,4.39199565 4.4651449,4.01169899 4.61308836,3.63917757 C3.31745289,3.43570381 1.99711884,3.40685734 0.692660708,3.55352461 C-0.230279622,6.50774882 -0.230898574,9.64559328 0.690876228,12.600133 C1.99668633,12.747089 3.31841756,12.7181998 4.61538462,12.5143546 L4.61538462,12.5143546 Z"
                    fill="#000000"
                    fillRule="nonzero"
                  ></path>
                </g>
              </svg>{" "}
              Web of Science ResearcherID:{" "}
              <Link
                target="_blank"
                to="https://www.webofscience.com/wos/author/record/GMJ-0541-2022"
              >
                GMJ-0541-2022
              </Link>
            </li>

            <li>
              <GiMaterialsScience style={{ color: "lightblue" }} /> Scopus
              Author ID:{" "}
              <Link
                target="_blank"
                to="https://www.scopus.com/authid/detail.uri?authorId=7202982274"
              >
                7202982274
              </Link>
            </li>
          </ul>
        </div>
        
        <br/>
        <br/>
        <p id="about-thanks">
          Este site foi construído por Pedro Medeiros de Moraes e Habakuk Conrado.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
