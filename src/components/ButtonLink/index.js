import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: ${props => props.color || '#7795f8'};
  background-color: ${props => props.backgroundColor || 'white'};
`;

export function ButtonLink({ children, href, ...rest}) {
  return <Link href={href} {...rest}>{children}</Link>
}
