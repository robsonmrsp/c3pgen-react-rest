import React from 'react';
import avatar from '@/assets/img/avatar12.jpg';

export const Avatar2 = () => (
  <div className="media">
    <div className="pull-left media-img-wrap avatar-media-img-wrap">
      <div className="avatar">
        <img
          className="avatar-img rounded-circle"
          src={avatar}
          width="32"
          alt="user pic"
        />
        <span className="badge badge-success badge-indicator" />
      </div>
      <div className="media-body">
        Robson
      </div>
    </div>
  </div>
);

export const Avatar = () => (
  <div className="media">
    <div className="pull-left  media-img-wrap">
      <div className="avatar">
        <img
          src={avatar}
          alt="user"
          className="avatar-img rounded-circle"
        />
      </div>
      <span className="badge badge-success badge-indicator" />
    </div>
    <div className="media-body">
      Madelyn Shane
    </div>
  </div>
);
