import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Tokyo", "Japan", "San Jose", "New York"]; 
  return <div>
    <ListGroup items={items} heading="Cities"></ListGroup>
  </div>
}

export default App;