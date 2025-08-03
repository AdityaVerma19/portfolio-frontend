import React from 'react';
import { Link } from 'react-scroll';

//  reusable component for the animated button.
// It can act as a regular link (<a>)
const BlobButton = ({ children, to, isScrollLink = false, download = false }) => {
  const commonProps = {
    className: 'blob-btn',
    ...(isScrollLink && { to, smooth: true, duration: 500 }),
    ...(!isScrollLink && { href: to }),
    ...(download && { download: true }),
  };

  const ButtonComponent = isScrollLink ? Link : 'a';

  return (
    <ButtonComponent {...commonProps}>
      {children}
      <span className="blob-btn__inner">
        <span className="blob-btn__blobs">
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
        </span>
      </span>
    </ButtonComponent>
  );
};

export default BlobButton;
