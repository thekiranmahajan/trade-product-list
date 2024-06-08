import cartLogo from "../assets/shopping-cart.png";
const Header = () => {
  return (
    <nav>
      <img src={cartLogo} alt="cart-logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default Header;
