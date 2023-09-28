import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/home">
            <button className={styles.homeBtn}>Home</button>
          </Link>
        </div>

        <div className={styles.container}>
          <Link to="shop">
            <button className={styles.shopBtn}>Shop</button>
          </Link>
        </div>
        <div className={styles.dropdownMenu}>
          <button onClick={toggleMenu} className={styles.allButtons}>
            Perfil
          </button>
          {menuOpen && (
            <div className={styles.dropdownContent}>
            <Link to="">
              <button className={styles.allButtons}>Log In</button>
            </Link>
  
            <Link to="">
              <button className={styles.allButtons}>Create Account</button>
            </Link>

            <Link to="">
              <button className={styles.allButtons}>Log Out</button>
            </Link>
          </div>
  

          )}
        </div>
        
        <div className={styles.container}>
          <Link to="">
            <button className={styles.shoppingCartBtn}>Shopping Cart</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
