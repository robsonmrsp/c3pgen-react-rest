import React from 'react';

const SettingPanel = () => (
  <div className="hk-settings-panel">
    <div className="nicescroll-bar position-relative">
      <div className="settings-panel-wrap">
        <div className="settings-panel-head">
          <img
            className="brand-img d-inline-block align-top"
            src="dist/img/logo-light.png"
            alt="brand"
          />
          <a
            href="javascript:void(0);"
            id="settings_panel_close"
            className="settings-panel-close"
          >
            <span className="feather-icon">
              <i data-feather="x" />
            </span>
          </a>
        </div>
        <hr />
      </div>
    </div>
    <img className="d-none" src="dist/img/logo-light.png" alt="brand" />
    <img className="d-none" src="dist/img/logo-dark.png" alt="brand" />
  </div>
);

export default SettingPanel;
