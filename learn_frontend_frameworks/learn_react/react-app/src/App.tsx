import ListGroup from "./components/ListGroup";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";

function App() {
  let items = ["Tokyo", "Japan", "San Jose", "New York"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  
  const handleBtnClicked = () => {
    console.log("Clicked")
  }

  return <div>
    {/* We're passing two parameters items and heading in a ListGroup Component */}
    <ListGroup items={items} heading="Cities" onSelectItem={ handleSelectItem }></ListGroup>
    <Alert>
      Text being passed as a child. And all interfaces support it. <span>elias</span>
    </Alert>
    <Button color="secondary" onClick={ handleBtnClicked }>Button from App</Button>
    
  </div>
}

export default App;