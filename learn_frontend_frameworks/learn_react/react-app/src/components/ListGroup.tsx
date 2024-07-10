// Because class is a reserved keyWord when borrowing code from
// boostrap rename the class to className
// The elements only return one component and you need to wrap other components.
// We use empty anchor brackets it's a shortcut for react to a Fragment

import { useState } from "react";

// You can pass in data to components so that they become reusable.
// You also need to define the structure of the data to be entered and you
// use the TypeScript interface to do it. for eg { items: [], heading: string }
interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  // const [name, setName] useState('')
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{ heading }</h1>
      {items.length === 0 ? <p>No items</p> : null}
      {/* The same code above can be written equally like below */}
      {items.length === 0 && <p>No items</p>}
      <ul className=" list-group">
        {/* to put JS code within JSX use sqaure brackets */}
        {/* WHen rendering a list of objects dynamically we should use the key function so that react knows which part is being modified */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active "
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
