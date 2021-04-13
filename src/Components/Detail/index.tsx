import React, { FunctionComponent } from 'react';
import { Wrapper } from './Wrapper';
import { ListData } from 'Containers/Center';

interface Props {
	className?: string;
	data: ListData;
}

export const Detail: FunctionComponent<Props> = ({
	className,
	data: { content, title, comment, reg_date },
	children,
}) => (
	<Wrapper className={className}>
		<div className='title'>{title}</div>
		<div className='reg_date'>{reg_date}</div>
		<div className='content'>{content}</div>
		<div className='block3'>
			{comment ? (
				<div className='comment'>
					{comment.map(({ autor, content, reg_date }) => (
						<div>
							{autor}
							{content} {reg_date}
						</div>
					))}
				</div>
			) : null}
		</div>
	</Wrapper>
);
