const todayDate = new Date().toISOString().slice(0, 10);
const Navbar = () => (
  <div>
    <h2 className="header">Welcome To CRYPTO METRIC</h2>
    <span className="today">{todayDate}</span>
  </div>
);

export default Navbar;
