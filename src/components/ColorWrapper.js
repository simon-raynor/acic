import React from 'react';
import viewportStore from '../stores/viewport';

import '../styles/ColorWrapper.scss';	// import styles to make webpack aware of them


const	viewportClassPrefix	= 'colorwrapper';


class ColorWrapper extends React.Component {
	
	constructor( props ) {
		
		super( props );
		
		this.state	= { viewportClass : viewportStore.state.height < 400	// set initial state (show "too short" warning)
										? viewportClassPrefix + ' toosmall'
										: viewportClassPrefix };
		
	}
	
	componentWillMount() {
		
		this._storeEvt	= viewportStore.addListener( () => {
			
			const	{ height, width }	= viewportStore.state;
			
			// update if more than 400px tall
			if ( height >= 400 ) {
				
				const	classes	= [ viewportClassPrefix ];
				
				if ( width > 600 ) { classes.push( 'wide' ) }
				else { classes.push( 'narrow' ); }
				
				this.setState({ viewportClass: classes.join(' ') });
				
			}
			// TODO: else... what? we can't inform the user without some kind
			// of "update logic", so let's just fail silently I guess...
			
		} );
		
	}
	
	componentWillUnmount() {
		
		// prevent multiple listeners being bound by calling `remove()`
		// when the component is unmounted
		this._storeEvt && this._storeEvt.remove();
		
	}
	
	render() {
		return (
			<section className={this.state.viewportClass} >
				{this.props.children}
			</section>
		);
	}
	
}

export default ColorWrapper;
