import React, { FunctionComponent } from 'react';
import { Wrapper } from './Wrapper';
import { StyledAvatar } from 'Components/StyledAvatar';
import { user_info_state } from 'globalState';
import { useRecoilValue } from 'recoil';

interface Props {
	className?: string;
}

export const Profile: FunctionComponent<Props> = ({ className }) => {
	const {
		picture: { url },
		last_name,
		first_name,
	} = useRecoilValue(user_info_state);
	return (
		<Wrapper className={className}>
			<StyledAvatar alt='user_profile_photo' src={url} />
			<div className='welcome'>
				Welcome {first_name} {last_name} !
			</div>
		</Wrapper>
	);
};
