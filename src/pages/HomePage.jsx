import { SiBookstack } from "react-icons/si";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="page-content">
      <div className="wrapper">
        <div className="home">
          <h2 className="post-list-heading">Cursos</h2>
          <ul className="post-list">
            <li>
              {/* <span className="post-meta">Apr 16, 2024</span> */}
              <h3>
                <Link className="post-link" to="/course/fis1">
                  <SiBookstack /> Física Geral 1
                </Link>
              </h3>
            </li>

            <li>
              {/* <span className="post-meta">Apr 16, 2024</span> */}
              <h3>
                <Link className="post-link" to="/course/fis2">
                  <SiBookstack /> Física Geral 2
                </Link>
              </h3>
            </li>

            <li>
              {/* <span className="post-meta">Nov 7, 2022</span> */}
              <h3>
                <Link className="post-link" to="/course/fis3">
                  <SiBookstack /> Física Geral 3
                </Link>
              </h3>
            </li>

            <li>
              {/* <span className="post-meta">Apr 28, 2025</span> */}
              <h3>
                <Link className="post-link" to="/course/fis4">
                  <SiBookstack /> Física Geral 4
                </Link>
              </h3>
            </li>

            <li>
              {/* <span className="post-meta">Jun 12, 2022</span> */}
              <h3>
                <Link className="post-link" to="/course/eletro">
                  <SiBookstack /> Eletromagnetismo
                </Link>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
