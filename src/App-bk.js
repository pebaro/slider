import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Header from './slider/Header';
import Slide from './slider/Slide';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
	const [people, setPeople] = useState(data);
	const [index, setIndex] = useState(0);

	// const nextSlide = () => setIndex(
	// 	index < people.length - 1 ? index + 1 : 0
	// );
	// const prevSlide = () => setIndex(
	// 	index > 0 ? index - 1 : people.length - 1
	// );

	const nextSlide = () => setIndex(index + 1);
	const prevSlide = () => setIndex(index - 1);

	useEffect(() => {
		const lastIndex = people.length - 1;

		if (index < 0) setIndex(lastIndex);

		if (index > lastIndex) setIndex(0);
	},
		[index, people]
	)

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1)
		}, 5000);

		return () => clearInterval(slider);
	}, [index])

	return (
		<section className="section">

			<Header title='reviews' />

			<div className="section-center">
				{
					people.map(
						(person, personIndex) => {
							const { id, image, name, title, quote } = person;

							let position = 'nextSlide';

							if (personIndex === index) {
								position = 'activeSlide';
							}

							if (
								personIndex === index - 1
								|| (index === 0 && personIndex === people.length - 1)
							) {
								position = 'lastSlide';
							}

							return (
								// <article key={id} className={position}>
								// 	<img src={image} alt={name} className='person-img' />
								// 	<h4>{name}</h4>
								// 	<p className="title">{title}</p>
								// 	<p className="text">{quote}</p>
								// 	<FaQuoteRight className='icon' />
								// </article>
								<Slide position={position} />
							)
						}
					)
				}
				<button className="prev" onClick={prevSlide}>
					<FiChevronLeft />
				</button>
				<button className="next" onClick={nextSlide}>
					<FiChevronRight />					
				</button>
			</div>
		</section>
	)
}

export default App;
