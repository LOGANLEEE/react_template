import styled from 'styled-components';

export const Wrapper = styled.div`
	flex-direction: column;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: 100%;

	.title {
		width: 70%;
	}

	.reg_date {
		width: 30%;
		align-self: flex-end;
		text-align: right;
	}

	.brick {
		min-height: 20%;
	}

	.content {
	}
`;
