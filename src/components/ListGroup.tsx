export default function ListGroup() {
  let items = ["New York", "Islamabad", "Dhaka", "Sylhet", "London"];

  const handleClick = (event) => console.log(event);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No item found</p>}
        {items.map((item, index) => (
          <li
            className="list-group-item"
            onClick={(event) => console.log(event)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
