import ListGroup from "./components/ListGroup";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import { BsCalendarFill } from "react-icons/bs";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Cart } from "./components/Cart";

function App() {
  let items = ["Tokyo", "Japan", "San Jose", "New York"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  
  const handleBtnClicked = () => {
    console.log("Clicked")
  }

  // Sharing state between components
  const [cartItems, setCartItems] = useState(["Product1", "Product2", "Product3"])


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

    <NavBar cartItemsCount={cartItems.length}></NavBar>
    <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
  </div>
}

export default App;