import { Link, Outlet } from "react-router-dom";
import "./default.layout.css";

function DefaultLayout() {
  return (
    <div id="layout">
      <header
        id="header"
        style={{ backgroundColor: "aqua", padding: "1rem 2rem" }}
      >
        <Link to="/">
          <h1>Cool ~ ToDo List</h1>
        </Link>
      </header>
      <hr />

      <Outlet />

      <hr />
      <footer id="footer">제작자 : 황혜린</footer>
    </div>
  );
}

export default DefaultLayout;
