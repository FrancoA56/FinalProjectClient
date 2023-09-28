import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.allButtons}>
        <div className={styles.container}>
          <NavLink to="/home">
            <button className={styles.homeBtn}>Home</button>
          </NavLink>
        </div>

        <div className={styles.container}>
          <NavLink to="/shop">
            <button className={styles.shopBtn}>Shop</button>
          </NavLink>
        </div>
        <div className={styles.dropdownMenu}>
          <button onClick={toggleMenu} className={styles.allButtons}>
            Menú
          </button>
          {menuOpen && (
            <div className={styles.dropdownContent}>
            <NavLink to="/login">
              <button className={styles.allButtons}>Log In</button>
            </NavLink>
  
            <NavLink to="/register">
              <button className={styles.allButtons}>Create Account</button>
            </NavLink>

            <NavLink to="/home">
              <button className={styles.allButtons}>Log Out</button>
            </NavLink>
          </div>
  

          )}
        </div>
        
        <div className={styles.container}>
          <NavLink to="/cart">
            <button className={styles.shoppingCartBtn}>Shopping Cart</button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
