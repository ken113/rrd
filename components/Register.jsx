import React from 'react';
import { render } from 'react-dom';

import '../style/sass/main.css';

export default class Register extends React.Component {

	render() {
		return (
			<div className='reg-ctn'>
				<div><label>用户名:</label><input type='text' name='username'/></div>
				<div><label>密码：</label><input type='password' name='pwd'/></div>
				<div><label>确认密码：</label><input type='password' name='pwd2'/></div>
				<div><button>确认</button></div>
			</div>

		);
	}
}