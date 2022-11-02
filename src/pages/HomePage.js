import React from "react";
import {Link} from 'react-router-dom';
import "./Style.css";
const HomePage = () => {
  return (
    <>
      <div className="demo-wrap">
        <img
          className="demo-bg"
          src={
            "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          }
          alt=""
        />
        <div className="demo-content">
          <Link className="link" to="/login"><h1>the product page</h1></Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
