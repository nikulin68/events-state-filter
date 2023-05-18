function Toolbar({ filters, selected, onSelectFilter }) {
	return (
		<div className="toolbar">
			{filters.map(filter => {
				// const isSelected = filter === selected;

				// let className = "toolbar__button";

				// if (isSelected) {
				// 	className = "toolbar__button selected"
				// }

				// return <button className={className} onClick={() => onSelectFilter(filter)}>{filter}</button>

				return <button className={`toolbar__button ${filter === selected ? 'selected' : ''}`} onClick={() => onSelectFilter(filter)}>{filter}</button>

			})}
		</div>
	)
}

export default Toolbar;