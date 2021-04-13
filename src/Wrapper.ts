import styled from 'styled-components';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)`
	min-height: 100vh !important;
	min-width: 100vw !important;
	overflow-y: scroll;

	display: flex;
	flex-direction: column;
	background-color: ${({ theme: { is_dark, dark_back_ground, white_back_ground } }) =>
		is_dark ? dark_back_ground : white_back_ground};
	color: ${({ theme: { is_dark, dark_back_ground, white_back_ground } }) =>
		is_dark ? white_back_ground : dark_back_ground};

	.header {
		width: 100%;
		height: 10%;
		display: flex;
		flex-direction: row;
	}

	.body {
		width: 100%;
		min-height: 100%;
		display: flex;
		flex-direction: row;

		.left {
			width: 8%;
			height: 100%;
		}
		.center {
			width: 84%;
			height: 100%;
		}
		.right {
			width: 8%;
			height: 100%;
		}
	}
	.footer {
		width: 100%;
		height: 10%;
	}

	/* @media only screen and (max-width: 600px) {
		.header {
			height: 20vh;
		}
		.body {
			height: 70vh;
		}
		.footer {
			height: 10vh;
		} */
	/* } */
`;
