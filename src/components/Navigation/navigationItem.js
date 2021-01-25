import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <>
      <li className="nav__item">
        <NavLink
          to={props.link}
          exact={props.exact}
          className={["nav__link", props.active ? "nav__link-active ": ""].join(" ")}
        >
          {props.children}
        </NavLink>
      </li>
    </>
  );
};

export default NavigationItem;
