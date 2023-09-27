import React from "react";
import { NavLink } from "react-router-dom";

const Menu=()=>{
    return (
      <div>
        <NavLink to="/task"> Задания </NavLink>
        <NavLink to="/projects"> Проекты </NavLink>
      </div>
    );
}
export default Menu;