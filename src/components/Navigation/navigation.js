import NavigationItem from "./navigationItem";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavigationItem link={"/"}>
          Dashboard
        </NavigationItem>
        <NavigationItem link={"/"}>Customers</NavigationItem>
        <NavigationItem link={"/"}>Associates</NavigationItem>
        <NavigationItem link={"/"} active={true}>Requests</NavigationItem>
        <NavigationItem link={"/"}>Schedules</NavigationItem>
        <NavigationItem link={"/"}>Payments</NavigationItem>
        <NavigationItem link={"/"}>Settings</NavigationItem>
      </ul>
    </nav>
  );
};

export default Navigation;
