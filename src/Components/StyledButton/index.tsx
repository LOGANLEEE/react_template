import React, { FunctionComponent, MouseEventHandler } from 'react';
import { StyledButton as Button } from './Wrapper';

interface Props {
	text?: string;
	type?: 'submit' | 'reset' | 'button';
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
	value?: string | number;
}

export const StyledButton: FunctionComponent<Props> = ({ className, onClick, value, type, text, children }) => (
	<Button onClick={onClick} className={className} type={type} value={value}>
		{text}
		{children}
	</Button>
);
