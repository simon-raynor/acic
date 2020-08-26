import React from 'react';
import ColorWrapper from './ColorWrapper';

function App() {
	
	return (
		<ColorWrapper>
			<Content />
		</ColorWrapper>
	);
	
}

function Content() {
	
	return	(
		<article>
			<h1>ACME Advanced Compoter Intelligenced Colors</h1>
			
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris.
			</p>
		</article>
	);
	
}

export default App;
