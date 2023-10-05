import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Menu.module.sass"

const Menu=()=>{
    return (
      <div className={style.menu}>
        <NavLink to="/task" className={style.menu_nav}> Задания </NavLink>
        <NavLink to="/projects" className={style.menu_nav}> Проекты </NavLink>
      </div>
    );
}
export default Menu;