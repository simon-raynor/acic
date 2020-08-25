import React from 'react';
import viewportStore from '../stores/viewport';

import '../styles/ColorWrapper.scss';	// import styles to make webpack aware of them


const	viewportClassPrefix	= 'colorwrapper';


class ColorWrapper extends React.Component {
	
	constructor( props ) {
		
		super( props );
		
		this.state	= { viewportClass : viewportClassPrefix };
		
		viewportStore.addListener( () => {
			
			const	{ height, width }	= viewportStore.state;
			
			// don't update if less than 400px tall
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
	
	render() {
		return (
			<section className={this.state.viewportClass} >
				<article>
					<h1>ACME Advanced Compoter Intelligenced Colors</h1>
					<h2>Version 1.0</h2>
					
					<p>
						You are a developer at ACME. No-one else is reachable before the new project's deadline.
					</p>
					
					<p>
						Requirements spec from ACME for the Advanced Compoter Intelligenced Colors app, which you are now seeing for the first time:
					</p>
					
					<ol>
						<li>When the page opens the background should be a scary blue, like windows has gone wrong.</li>
						<li>When the page is resized, if it is less wide than 600 pixels the background should be a friendly red, like the fire truck I like. Otherwise it should be an industrial green like Pop's tractor.</li>
						<li>We are very concerned about performance, when the page's height is less than 400 pixels don't do any update logic! Maybe alert the user that we aren't doing anything? Up to you.</li>
						<li>I've heard about something called flux, is this expensive? We would like to use it because the developers that will maintain this project like it.</li>
						<li>Our developers insist that the project be maintainable and said something about separation of lucerne? This was strange since the project is not agricultural.</li>
					</ol>
				</article>
			</section>
		);
	}
	
}

export default ColorWrapper;
