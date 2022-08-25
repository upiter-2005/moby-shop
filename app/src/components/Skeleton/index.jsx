import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={224}
    height={306}
    viewBox="0 0 224 306"
    backgroundColor="#dbdbdb"
    foregroundColor="#ecebeb"
    className="skeleton"
    {...props}>
    <circle cx="623" cy="330" r="125" />
    <rect x="0" y="318" rx="5" ry="5" width="300" height="110" />
    <rect x="0" y="436" rx="23" ry="23" width="129" height="37" />
    <rect x="139" y="436" rx="23" ry="23" width="160" height="37" />
    <rect x="-2" y="-117" rx="0" ry="0" width="226" height="369" />
    <rect x="109" y="78" rx="0" ry="0" width="0" height="105" />
    <rect x="-1" y="266" rx="0" ry="0" width="224" height="27" />
  </ContentLoader>
);

export default Skeleton;
