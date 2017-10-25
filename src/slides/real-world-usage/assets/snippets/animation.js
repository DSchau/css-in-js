import { keyframes, css } from 'emotion';
import styled from 'emotion-react';

const zoomIn = keyframes`
  from {
  	transform: scale(0)
  }
  
  to {
  	transform: scale(1)
   }
`;

const Avatar = styled('img')`
  animation: ${zoomIn} 1s ease;
  transform-origin: center bottom;
`;
