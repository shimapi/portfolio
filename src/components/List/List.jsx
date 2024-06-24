import PropTypes from "prop-types";

const List = ({ title, listArray }) => {
	console.log(title, "title");
	console.log(listArray, "listArray!");

	return (
		<section className="list">
			<h4 className="title">{title}</h4>
			<ul>
				{listArray.map((item, index) => (
					<li key={index} className="item__name">
						{item}
					</li>
				))}
			</ul>
		</section>
	);
};

List.defaultProps = {
	listArray: [],
	title: "",
};

List.propTypes = {
	listArray: PropTypes.array,
	title: PropTypes.string,
};

export default List;
