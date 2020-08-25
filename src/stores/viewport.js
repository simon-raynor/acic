// this file creates a flux store for the viewport size

import dispatcher from '../dispatcher';
import { Store } from 'flux/utils';


class ViewportStore extends Store {
	
	constructor( dispatcher ) {
		
		super( dispatcher );
		
		this.state	= {
						height	: window.innerHeight,
						width	: window.innerWidth
					};
		
	}
	
	
	__onDispatch( payload ) {console.log( arguments );
		if ( payload.actionType === 'viewport-resize' ) {
			this.state.height	= payload.dimensions.height;
			this.state.width	= payload.dimensions.width;
			
			this.__emitChange();
		}
	}
	
}

export default new ViewportStore( dispatcher );
