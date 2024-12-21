import React from "react";
import { Link } from "react-router-dom";

const PageTitle = ({title}) => {
  return (
    <div>
       

      <div className="breatcome_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breatcome_title">
                <div className="breatcome_title_inner">
                  <h2>
                    <span>Title prp issue</span>
                  </h2>
                  <div className="breatcome_content">
                    <ul>
                      <li>
                        <Link to="/">
                          Home
                          <i className="fa fa-angle-right" />
                        </Link>
                      </li>
                      <li>mg sir</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
