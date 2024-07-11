import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Tokyo", "Japan", "San Jose", "New York"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <div>
    {/* We're passing two parameters items and heading in a ListGroup Component */}
    <ListGroup items={items} heading="Cities" onSelectItem={ handleSelectItem }></ListGroup>
  </div>
}

export default App;