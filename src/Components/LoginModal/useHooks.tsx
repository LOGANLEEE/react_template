import { useSpring } from 'react-spring';
import { useSetRecoilState } from 'recoil';
import { user_info_state, alert_state } from 'globalState';
import { Props } from './index';
import { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from 'react-facebook-login';

export const useHooks = ({ should_open, set_should_open }: Props) => {
	const set_user_info = useSetRecoilState(user_info_state);
	const set_alert_state = useSetRecoilState(alert_state);

	const spring_info = useSpring({
		opacity: 1,
		to: { opacity: should_open ? 1 : 0 },
	});

	const facebook_login = ({ accessToken, id, userID, email, name, picture }: ReactFacebookLoginInfo) => {
		console.log(picture);

		set_user_info({
			email: email || '',
			first_name: name?.split(' ')[0] || '',
			id,
			is_login: true,
			last_name: name?.split(' ')[1] || '',
			level: 5,
			locked: false,
			mobile: '',
			picture: {
				height: picture?.data.height || 0,
				width: picture?.data.width || 0,
				is_silhouette: picture?.data.is_silhouette || false,
				url: picture?.data.url || '',
			},
			register_date: '',
		});
		set_should_open(false);
		set_alert_state({ message: `Welcome, ${name}`, severity: 'success', visible: true });
	};
	const facebook_login_failure = ({ status }: ReactFacebookFailureResponse) => {
		set_alert_state({ message: `error code: ${status}. `, severity: 'error', visible: true });
	};

	return {
		spring_info,
		func: {
			facebook_login,
			facebook_login_failure,
		},
	};
};
