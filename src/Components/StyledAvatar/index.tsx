import React, { FunctionComponent } from 'react';
import { StyledAvatar as Wrapper } from './Wrapper';

interface Props {
	className?: string;
	alt: string;
	src?: string;
}

export const StyledAvatar: FunctionComponent<Props> = ({ className, alt, children, src }) => (
	<Wrapper className='className' variant='circular' alt={alt} src={src} sizes='100%' />
);
