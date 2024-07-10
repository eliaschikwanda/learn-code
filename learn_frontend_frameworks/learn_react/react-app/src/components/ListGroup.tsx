// Because class is a reserved keyWord when borrowing code from
// boostrap rename the class to className
// The elements only return one component and you need to wrap other components.
// We use empty anchor brackets it's a shortcut for react to a Fragment

function ListGroup() {
  return (
    <>
        <h1>List</h1>
        <ul className=" list-group">
          <li className="list-group-item disabled" aria-disabled="true">
            A disabled item
          </li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
    </>
  );
}

export default ListGroup;
