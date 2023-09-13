import { useState } from "react";
interface Props {
  items: string[];
  heading:string;
}
export default function ListGroup({items,heading}:Props) {
  const [selectedIndex,setSelectedIndex]  = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No item found</p>}
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active":"list-group-item"}
            onClick={()=>{setSelectedIndex(index)}}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
