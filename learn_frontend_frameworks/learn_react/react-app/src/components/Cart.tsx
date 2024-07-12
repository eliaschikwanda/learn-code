interface CartProps {
    cartItems: string[];
    onClear: () => void;
}

export const Cart = ({cartItems, onClear} : CartProps) => {
  return (
    <div>
        <p>Cart</p>
        <ul>
           {cartItems.map(item => <li key={item}>{item}</li> )}
           <button onClick={onClear}>Clear</button>
        </ul>
    </div>
  )
}
