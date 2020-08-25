import React from 'react';
import dispatcher from '../dispatcher';

import ColorWrapper from './ColorWrapper';

import '../styles/ColorWrapper.scss';	// import styles to make webpack aware of them



function App() {
	
	React.useEffect( () => {
		
		function handleResize() {
			
			dispatcher.dispatch({
				actionType	: 'viewport-resize',
				dimensions	: {
					height	: window.innerHeight,
					width	: window.innerWidth
				}
			});
			
		}
		
		window.addEventListener( 'resize', handleResize );
		
		return	_ => { window.removeEventListener( 'resize', handleResize ) };
	} );
	
	return (
		<ColorWrapper/>
	);
	
}

export default App;
