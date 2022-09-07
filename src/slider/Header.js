import React from 'react'

const Header = ({ title }) => {
	return (
		<div className="title">
			<h2>
				<span>/</span>{title}
			</h2>
		</div>
	)
}

export default Header
