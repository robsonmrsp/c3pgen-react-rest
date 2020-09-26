import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';


const Sidebar = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <nav className="hk-nav hk-nav-light">
      <a href="javascript:void(0);" id="hk_nav_close" className="hk-nav-close">
        <span className="feather-icon">
          <i data-feather="x" />
        </span>
      </a>
      <div className="nicescroll-bar">
        <div className="navbar-nav-wrap">
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <a
                className="nav-link"
                href="javascript:void(0);"
                data-toggle="collapse"
                data-target="#dash_drp"
              >
                <i className="ion ion-ios-keypad" />
                <span className="nav-link-text">Dashboard</span>
              </a>
              <ul
                id="dash_drp"
                className="nav flex-column collapse collapse-level-1"
              >
                <li className="nav-item">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="dashboard2.html">
                        Project
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="dashboard3.html">
                        Statistics
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <hr className="nav-separator" />
          <div className="nav-header">
            <span>Getting Started</span>
            <span>GS</span>
          </div>
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <span className="nav-link" href="">
                <i className="ion ion-ios-book" />
                <span className="nav-link-text">
                  <Link to="/movies">List Movies</Link>
                </span>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="">
                <i className="ion ion-ios-book" />
                <span className="nav-link-text">
                  <Link to="/newMovie">New Movie</Link>
                </span>
              </span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                <i className="ion ion-ios-book" />
                <span className="nav-link-text">Documentation</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
