import classes from "./MainNavigation.module.css";
import Link from "next/link";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Users</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Users</Link>
          </li>
          <li>
            <Link href="/new-user">Add New User</Link>
          </li>
          <li>
            <Link href="/upload-image">Upload Image</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
