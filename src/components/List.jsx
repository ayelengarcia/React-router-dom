import Item from "./ItemCard";

const List = function ({ list }) {
  return list.map(({ name, description, score }) => (
    <Item key={name} name={name} description={description} score={score} />
  ));
};

export default List;
