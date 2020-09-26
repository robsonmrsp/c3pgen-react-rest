import React, { Suspense } from 'react';
import {
  Switch, Route,
} from 'react-router-dom';

import TopNavbar from './TopNavbar';
import Sidebar from './Sidebar';
import SettingPanel from './SettingPanel';
import routes from '@/app/routes';

import '@/assets/js/init';

const Layout = () => (
  <div>
    <div className="preloader-it">
      <div className="loader-pendulums" />
    </div>
    <div className="hk-wrapper hk-vertical-nav">
      <TopNavbar />
      <Sidebar />
      <div id="hk_nav_backdrop" className="hk-nav-backdrop" />
      <SettingPanel />

      <div className="hk-pg-wrapper pb-0 px-0">
        <Suspense fallback={<div> </div>}>
          <Switch>
            {routes.map((route, index) => (
              <Route key={+index} {...route} />
            ))}
          </Switch>
        </Suspense>
      </div>
    </div>
  </div>
);
export default Layout;
