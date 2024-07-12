interface NavBarProps   {
    cartItemsCount: number;
}


export const NavBar = ({ cartItemsCount } : NavBarProps) => {
  return (
    <div>
       NavBar: {cartItemsCount}
    </div>
  )
}
