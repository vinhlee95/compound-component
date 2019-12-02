import React from "react";

const NavContext = React.createContext();

const Nav = ({ children }) => {
  const [show, setShow] = React.useState(false);

  const toggleShow = () => setShow(show => !show);

  const value = { show, toggleShow };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

const On = ({ children }) => {
  const { show } = React.useContext(NavContext);

  return show ? children : null;
};

const Off = ({ children }) => {
  const { show } = React.useContext(NavContext);

  return show ? null : children;
};

const Button = () => {
  const { show, toggleShow } = React.useContext(NavContext);

  return <button onClick={toggleShow}>{show ? "Hide" : "Show"}</button>;
};

Nav.On = On;
Nav.Off = Off;
Nav.Button = Button;

export default Nav;
