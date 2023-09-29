import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={315}
    height={519}
    viewBox="0 0 315 519"
    backgroundColor="#f3f2f2"
    foregroundColor="#d4d4d4"
    {...props}>
    <circle cx="138" cy="130" r="130" />
    <rect x="0" y="275" rx="10" ry="10" width="280" height="24" />
    <rect x="0" y="422" rx="10" ry="10" width="89" height="27" />
    <rect x="0" y="312" rx="10" ry="10" width="280" height="85" />
    <rect x="121" y="415" rx="10" ry="10" width="155" height="40" />
  </ContentLoader>
);

export default Skeleton;
