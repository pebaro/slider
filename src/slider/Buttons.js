import React from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Buttons = ({ prevSlide, nextSlide }) => {
	return (
		<>
			<button className="prev" onClick={prevSlide}>
				<FiChevronLeft />
			</button>
			<button className="next" onClick={nextSlide}>
				<FiChevronRight />					
			</button>
		</>
	)
}

export default Buttons
