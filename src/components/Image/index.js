import React from 'react';
import { Image as SpectacleImage } from 'spectacle';

export function Image({ style = {}, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        position: 'relative'
      }}
    >
      <SpectacleImage
        style={{
          display: 'block',
          maxWidth: '100%',
          ...style
        }}
        {...rest}
      />
    </div>
  );
}
