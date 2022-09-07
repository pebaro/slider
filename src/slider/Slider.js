import React, { useState, useEffect } from 'react';
import Buttons from './Buttons';
import Header from './Header';
import Slide from './Slide';

function Slider({ data }) {
	const [people] = useState(data);
	const [index, setIndex] = useState(0);

	const nextSlide = () => setIndex( previousIndex =>
		index < people.length - 1 ? previousIndex + 1 : 0
	);
	const prevSlide = () => setIndex( previousIndex =>
		index > 0 ? previousIndex - 1 : people.length - 1
	);

	useEffect(() => {
		let slider = setInterval(
			() => setIndex( previousIndex =>
				index < people.length - 1 ? previousIndex + 1 : 0
			), 5000
		);
		return () => clearInterval(slider);
	}, [index, people.length]);

	return (
		<section className="section">
			<Header title='reviews' />
			<div className="section-center">
				{
					people.map((person, personIndex) => {
						let position = 'nextSlide';

						if (personIndex === index) position = 'activeSlide';

						if (
							personIndex === index - 1
							|| (index === 0 && personIndex === people.length - 1)
						) {
							position = 'lastSlide';
						}

						return (
							<Slide key={person.id} position={position} {...person} />
						)
					})
				}
				<Buttons nextSlide={nextSlide} prevSlide={prevSlide} />
			</div>
		</section>
	)
}

export default Slider;
