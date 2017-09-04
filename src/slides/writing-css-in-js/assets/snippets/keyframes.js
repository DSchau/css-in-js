import { keyframes, css } from 'emotion'
import styled from 'emotion/react'

const bounceHeight = 30;

const zoomIn = keyframes`
  from {
  	transform: scale(0)
  }
  
  to {
  	transform: scale(1)
   }
`

const Avatar = styled('img')`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  animation: ${zoomIn} 1s ease;
  transform-origin: center bottom;
`;
