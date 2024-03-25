import Link from "next/link";
import "../styles/header.css";

function HeaderApp() {
  return (
    <main>
      <div id="header">
        <h1 id="classContent">LoL Stats</h1>
        <Link href={"/champions"}>
          <button id="classContent">COMECE JÁ</button>
        </Link>
      </div>
      <div className="bar">
        <br></br>
      </div>
    </main>
  );
}

export default HeaderApp;
