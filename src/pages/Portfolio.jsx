import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import EventfulSky from "../assets/images/EventfulSky.png";
import LittleSiteOfHorrors from "../assets/images/LittleSiteOfHorrors.png";
import JavaScriptQuiz from "../assets/images/CodeQuiz.png";
import EmployeeCalendar from "../assets/images/EmployeeCalendar.png";
import WeatherForecast from "../assets/images/WeatherApp.png";
import NoteTaker from "../assets/images/NoteTaker.png";
import Snif from "../assets/images/Snif.png";

const Portfolio = () => {
  return (
    <div className="container mt-3 mb-3 mx-3">
      <h3 className="mb-3">Portfolio</h3>
      <div className="row gy-5">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card" style={{ width: "16rem", height: "25rem" }}>
            <img
              src={Snif}
              className="card-img-top img-thumbnail"
              alt="eventful sky app concert page"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Snif Dog Dating App</h5>
              <div className="mt-auto">
                <a
                  href="https://github.com/nlad218/dog-dating-app"
                  target="blank"
                  className="btn btn-primary mb-2"
                >
                  Deployed Page
                </a>
                <a
                  href="https://stormy-mesa-49272-df30e734d644.herokuapp.com/"
                  target="blank"
                  className="btn btn-secondary"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card" style={{ width: "16rem", height: "25rem" }}>
            <img
              src={EventfulSky}
              className="card-img-top img-thumbnail"
              alt="eventful sky app concert page"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Eventful Sky Weather Planner</h5>
              <div className="mt-auto">
                <a
                  href="https://nlad218.github.io/Eventful-sky/index.html"
                  target="blank"
                  className="btn btn-primary mb-2"
                >
                  Deployed Page
                </a>
                <a
                  href="https://github.com/nlad218/Eventful-sky"
                  target="blank"
                  className="btn btn-secondary"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card" style={{ width: "16rem", height: "25rem" }}>
            <img
              src={LittleSiteOfHorrors}
              className="card-img-top img-thumbnail"
              alt="little site of horrors homepage"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                Little Site of Horrors Movie Database
              </h5>
              <div className="mt-auto">
                <a
                  href="https://little-site-of-horrors-1-f45120ac21d1.herokuapp.com/"
                  target="blank"
                  className="btn btn-primary mb-2"
                >
                  Deployed Page
                </a>
                <a
                  href="https://github.com/ljkahn/littleSiteOfHorrors"
                  target="blank"
                  className="btn btn-secondary"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card" style={{ width: "16rem", height: "25rem" }}>
            <img
              src={JavaScriptQuiz}
              className="card-img-top img-thumbnail"
              alt="javascript quiz welcome page"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">JavaScript Quiz</h5>
              <div className="mt-auto">
                <a
                  href="https://mnettath.github.io/code-quiz/"
                  target="blank"
                  className="btn btn-primary mb-2"
                >
                  Deployed Page
                </a>
                <a
                  href="https://github.com/mnettath/code-quiz"
                  target="blank"
                  className="btn btn-secondary"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card" style={{ width: "16rem", height: "25rem" }}>
            <img
              src={EmployeeCalendar}
              className="card-img-top img-thumbnail"
              alt="employee calendar homepage"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Employee Calendar</h5>
              <div className="mt-auto">
                <a
                  href="https://mnettath.github.io/employee-calendar/"
                  target="blank"
                  className="btn btn-primary mb-2"
                >
                  Deployed Page
                </a>
                <a
                  href="https://github.com/mnettath/employee-calendar"
                  target="blank"
                  className="btn btn-secondary"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card" style={{ width: "16rem", height: "25rem" }}>
            <img
              src={WeatherForecast}
              className="card-img-top img-thumbnail"
              alt="weather forecast new york example"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Weather Forecast</h5>
              <div className="mt-auto">
                <a
                  href="https://mnettath.github.io/weather-forecast/"
                  target="blank"
                  className="btn btn-primary mb-2"
                >
                  Deployed Page
                </a>
                <a
                  href="https://github.com/mnettath/weather-forecast"
                  target="blank"
                  className="btn btn-secondary"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card" style={{ width: "16rem", height: "25rem" }}>
            <img
              src={NoteTaker}
              className="card-img-top img-thumbnail"
              alt="note taker homepage"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Note Taker</h5>
              <div className="mt-auto">
                <a
                  href="https://small-business-note-app-bbd345fcd895.herokuapp.com/notes"
                  target="blank"
                  className="btn btn-primary mb-2"
                >
                  Deployed Page
                </a>
                <a
                  href="https://github.com/mnettath/note-taker-app"
                  target="blank"
                  className="btn btn-secondary"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
