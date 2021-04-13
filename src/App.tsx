import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil';

import { Header } from './Containers/Header';
import { Center } from './Containers/Center';
import { Left } from './Containers/Left';
import { Right } from './Containers/Right';
import { Footer } from './Containers/Footer';
import { useSpring } from 'react-spring';
import { theme_info_state, alert_state } from 'globalState';

import { Wrapper } from './Wrapper';
import { StylesProvider } from '@material-ui/core/styles';
import { AlertMessage } from 'Components/AlertMessage';

const App = () => {
	document.title = 'Get infomation of how to be teacher in korea!';
	const spring_info = useSpring({ opacity: 1, from: { opacity: 0 } });
	const { visible } = useRecoilValue(alert_state);

	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={useRecoilValue(theme_info_state)}>
				<Wrapper style={spring_info}>
					<div className='header'>
						<Header />
					</div>

					<div className='body'>
						<Left className='left' />
						<Center className='center' />
						<Right className='right' />
					</div>
					<div className='footer'>
						<Footer />
					</div>
					{visible ? <AlertMessage /> : ''}
				</Wrapper>
			</ThemeProvider>
		</StylesProvider>
	);
};

export default App;
