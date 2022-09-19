import React from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import FormValidation from "../../pages/FormValidation";
import News from "../../pages/News";
import Page404 from "../../pages/Page404";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-item nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item nav-link" to="news">
                News API
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item nav-link" to="formvalidation">
                Form Validation
              </Link>
            </li>
          </ul>
        </nav>
        <div style={{ paddingTop: 60 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace="true" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/formvalidation" element={<FormValidation />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Router;
