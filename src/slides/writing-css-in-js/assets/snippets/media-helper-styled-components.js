import { css } from 'styled-components';

const sizes = {
  large: 1024,
  medium: 768,
  small: 300
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`;

  return acc;
}, {});

// const Content = styled.div`
// 	height: 3em;
// 	width: 3em;
// 	background: papayawhip;

// 	/* Now we have our methods on media and can use them instead of raw queries */
// 	${media.desktop`background: dodgerblue;`}
// 	${media.tablet`background: mediumseagreen;`}
// 	${media.phone`background: palevioletred;`}
// `;
