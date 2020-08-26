import { Dispatcher } from 'flux';

// create a flux dispatcher to handle dissemination of events
const instance	= new Dispatcher();

export default instance;

// bind the window resize event (action) here, even though it's not *really*
// the correct place for it
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
