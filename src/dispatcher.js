import { Dispatcher } from 'flux';

// create a flux dispatcher to handle dissemination of events
const instance	= new Dispatcher();

export default instance;


function handleResize() {
	
	instance.dispatch({
		actionType	: 'viewport-resize',
		dimensions	: {
			height	: window.innerHeight,
			width	: window.innerWidth
		}
	});
	
}

window.addEventListener( 'resize', handleResize );
