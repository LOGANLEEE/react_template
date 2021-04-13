import React, { FunctionComponent } from 'react';

import TextField from '@material-ui/core/TextField';
import { SignUpModal } from 'Components/SignUpModal';
import close_white from 'asset/close-white-18dp.svg';
import { ModalBodyWrapper, StyledModal, Wrapper } from './Wrapper';
import { useHooks } from './useHooks';
import FacebookLogin from 'react-facebook-login';
import { StyledButton } from 'Components/StyledButton';

export interface Props {
	should_open: boolean;
	set_should_open: Function;
}

export const LoginModal: FunctionComponent<Props> = ({ should_open, set_should_open }) => {
	const {
		spring_info,
		func: { facebook_login, facebook_login_failure },
	} = useHooks({ should_open, set_should_open });

	return (
		<Wrapper style={spring_info}>
			<StyledModal
				className='login_modal'
				open={should_open}
				onClose={() => set_should_open(false)}
				aria-labelledby='simple-modal-title'
				aria-describedby='simple-modal-description'>
				<ModalBodyWrapper style={spring_info}>
					<FacebookLogin
						appId={process.env.REACT_APP_FACEBOOK_APP_ID as string}
						autoLoad={true}
						fields='name,email,picture'
						callback={facebook_login}
						onFailure={facebook_login_failure}
					/>

					<StyledButton
						onClick={() => {
							set_should_open(false);
						}}
						text='CLOSE'
					/>
				</ModalBodyWrapper>
			</StyledModal>
		</Wrapper>
	);
};
