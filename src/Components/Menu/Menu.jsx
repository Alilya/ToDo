import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Menu.module.sass";


const Menu = () => {
  return (
    <div className={style.menu}>
      <div className={style.task}>
        <NavLink to="/task" className={style.menu_nav}>
          {" "}
          Задания{" "}
        </NavLink>
      </div>
      <div className={style.project}>
        <NavLink to="/projects" className={style.menu_nav}>
          {" "}
          Проекты{" "}
        </NavLink>
      </div>
    </div>
  );
};
export default Menu;
