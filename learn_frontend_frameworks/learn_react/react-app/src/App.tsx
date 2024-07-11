import ListGroup from "./components/ListGroup";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import { BsCalendarFill } from "react-icons/bs";

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
    <hr />
    <br />
    <BsCalendarFill color="red" size="40"></BsCalendarFill>
    
  </div>
}

export default App;