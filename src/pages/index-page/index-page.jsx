import React from 'react';
import { connect } from 'react-redux';

class Component extends React.Component {

	render() {
		return (
			<React.Fragment>
				<h1 className='text-3xl font-bold underline text-center'>
					Hello world!
				</h1>
			</React.Fragment>
		);
	}

}

const Redux = connect(store => ({}))(Component);

export const IndexPage = Redux;
