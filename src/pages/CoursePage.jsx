import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import ElectroCourse from "../components/ElectroCourse";
import "./CoursePage.css";
import Fis3Course from "../components/Fis3Course";
import Fis2Course from "../components/Fis2Course";
import Fis4Course from "../components/Fis4Course";

const CoursePage = () => {
  const { id } = useParams();
  // console.log(id);

  let course = <></>;

  if (id == "eletro") {
    course = <ElectroCourse />;
  } else if (id == "fis3") {
    course = <Fis3Course />;
  } else if (id == "fis2") {
    course = <Fis2Course />;
  } else if (id == "fis4") {
    course = <Fis4Course />;
  } else {
    course = <NotFound />;
  }

  return (
    <main className="page-content" aria-label="Content">
      <div className="wrapper">{course}</div>
    </main>
  );
};

export default CoursePage;
