import React from "react"
import './Navbar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NavBar() {
  return (
        <div className="navbar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/catalog">Catalog</a>
            </li>
            <li>
              <AccountCircleIcon />
            </li>
          </ul>
          <form>
        </form>
      </div>
  );
}

export default NavBar;