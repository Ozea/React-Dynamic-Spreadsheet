import React from 'react';

import '../../containers/App.css';

const Head = (props) => {
	return(
		<p className="head">{props.name}</p>
	);
}

export default Head;