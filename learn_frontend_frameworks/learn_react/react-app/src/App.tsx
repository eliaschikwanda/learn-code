import ListGroup from "./components/ListGroup";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";
import { BsCalendarFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Cart } from "./components/Cart";
import { Form } from "./components/Form";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import categories from "./expense-tracker/categories";
import "./index.css";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import { ProductList } from "./components/ProductList";
import axios from "axios";

function App() {
  // let items = ["Tokyo", "Japan", "San Jose", "New York"];
  // const [selectCategory, setSelectedCategory] = useState("");
  // const [expense, setExpense] = useState([
  //   { id: 1, description: "aa", amount: 20, category: "Utility" },
  //   { id: 2, description: "bb", amount: 20, category: "Utility" },
  //   { id: 3, description: "cc", amount: 20, category: "Utility" },
  //   { id: 4, description: "dd", amount: 20, category: "Utility" },
  // ]);

  // const onDelete = (id: number) => {
  //   setExpense(expense.filter((e) => e.id !== id));
  // };

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // const handleBtnClicked = () => {
  //   console.log("Clicked");
  // };

  // // Sharing state between components
  // const [cartItems, setCartItems] = useState([
  //   "Product1",
  //   "Product2",
  //   "Product3",
  // ]);

  // const visibleExpense = selectCategory
  //   ? expense.filter((e) => e.category == selectCategory)
  //   : expense;

  // The function passed in useEffect will be called after render.

  // const [category, setCategory] = useState("")

  // Effect Hook cleaning
  // const connect = () => {
  //   console.log('Connecting')
  // };

  // const disconnet = () => {
  //   console.log('Disconnecting')
  // };

  // useEffect(() => {
  //   connect();

  //   return disconnet();
  // })

  interface User {
    id: number;
    name: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    axios.get<User[]>("https://jsonplaceholder.typicode.com/userss")
    .then((response) => {setUsers(response.data)})
    .catch((error) => {setError(error.message)});
  }, []);

  return (
    <>
      <div>
        <ul>
          { users.map((user) => <li key={user.id}>{user.name}</li>) }
         { error && <p className="text-danger">{error}</p>}
        </ul>
      </div>
      {/* <div>
      <select className="form-select" onChange={(event) => {setCategory(event.target.value)}}>
        <option value=""></option>  
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category}></ProductList>
    </div> */}
      {/* We're passing two parameters items and heading in a ListGroup Component */}
      {/* <ListGroup items={items} heading="Cities" onSelectItem={ handleSelectItem }></ListGroup>
    <Alert>
      Text being passed as a child. And all interfaces support it. <span>elias</span>
    </Alert>
    <Button color="secondary" onClick={ handleBtnClicked }>Button from App</Button>
    <hr /> 
    <br />
    <BsCalendarFill color="red" size="40"></BsCalendarFill>

    <NavBar cartItemsCount={cartItems.length}></NavBar>
    <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart> */}

      {/* Building Forms Code */}

      {/* <Form></Form> */}
      {/* <div className="mb-5">
        <ExpenseForm onSubmit={(newExpense) => setExpense([...expense, {...newExpense, id: expense.length + 1, description: newExpense.description, category: newExpense.category}])}></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList expenses={visibleExpense} onDelete={onDelete}></ExpenseList> */}
    </>
  );
}

export default App;
