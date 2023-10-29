import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

const Portfolio = () => {
  return (
    <div className="container mt-3 mb-3 mx-3">
      <h3 className="mb-3">Portfolio</h3>
      <div className="row gy-5">
        <div className="col-sm-6 col-s- col-md-4 col-lg-3">
          <div className="card" style={{ width: "16rem", height: "21rem" }}>
            <img
              src="https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Eventful Sky Weather Planner</h5>
              <div className="mt-auto">
                <a href="#" className="btn btn-primary mb-2">
                  Deployed Page
                </a>
                <a href="#" className="btn btn-secondary">
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card" style={{ width: "16rem", height: "21rem" }}>
            <img
              src="https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                Little Site of Horrors Movie Database
              </h5>
              <div className="mt-auto">
                <a href="#" className="btn btn-primary mb-2">
                  Deployed Page
                </a>
                <a href="#" className="btn btn-secondary">
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card" style={{ width: "16rem", height: "21rem" }}>
            <img
              src="https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Code Quiz</h5>
              <div className="mt-4">
                <a href="#" className="btn btn-primary mb-2">
                  Deployed Page
                </a>
                <a href="#" className="btn btn-secondary">
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card" style={{ width: "16rem", height: "21rem" }}>
            <img
              src="https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Employee Calendar</h5>
              <div className="mt-4">
                <a href="#" className="btn btn-primary mb-2">
                  Deployed Page
                </a>
                <a href="#" className="btn btn-secondary">
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card" style={{ width: "16rem", height: "21rem" }}>
            <img
              src="https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Weather Forecast</h5>
              <div className="mt-4">
                <a href="#" className="btn btn-primary mb-2">
                  Deployed Page
                </a>
                <a href="#" className="btn btn-secondary">
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="card" style={{ width: "16rem", height: "21rem" }}>
            <img
              src="https://images.unsplash.com/photo-1599009434802-ca1dd09895e7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Note Taker</h5>
              <div className="mt-4">
                <a href="#" className="btn btn-primary mb-2">
                  Deployed Page
                </a>
                <a href="#" className="btn btn-secondary">
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
