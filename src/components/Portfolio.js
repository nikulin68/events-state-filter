import { useState } from 'react';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

// Разработайте компонент класса Portfolio, хранящий список фильтров, активный фильтр, а также список проектов.
// Чтобы компонент Portfolio мог реагировать на выбор пользователем фильтра проектов, например, Business Cards, и передавать отфильтрованные по категории Business Cards проекты в компонент ProjectList, в класс Portfolio необходимо добавить состояние (state).

function Portfolio() {
	const [selected, setSelected] = useState("All");

	function onSelectFilter(filter) {
		setSelected(filter);
	}

	const filters = ["All", "Websites", "Flayers", "Business Cards"];

	const projects = [
		{
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
		category: "Business Cards"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
		category: "Websites"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
		category: "Websites"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
		category: "Websites"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
		category: "Business Cards"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
		category: "Websites"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
		category: "Websites"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
		category: "Business Cards"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
		category: "Websites"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
		category: "Flayers"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
		category: "Websites"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
		category: "Business Cards"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
		category: "Websites"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
		category: "Websites"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
		category: "Business Cards"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
		category: "Websites"
		}, {
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
		category: "Flayers"
		}
	];

	const fileredProjects = selected === "All" ? projects : projects.filter(item => item.category === selected);

	return (
		<>
			<Toolbar 
			filters={filters}
			selected={selected}
			onSelectFilter={onSelectFilter}
			/>
			<ProjectList projects={fileredProjects} />
		</>
	)
}

export default Portfolio;