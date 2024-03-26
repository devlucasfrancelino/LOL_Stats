import Link from "next/link";
import HeaderApp from "../../components/header";
import "../app/page.css";

export default function Home() {

  return (
    <main className="mainContainer">
        <HeaderApp/>
        <div className="homeContent">
          <div> 
            <p>Explore os atributos únicos de cada campeão do League of Legends</p>
            <Link href={"/champions"}>
              <button className="">TESTE AGORA!</button>
            </Link>
          </div>
          <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYPh7DAPUGdqS3d_VkyW6JiA8Y1bPvRe6TDGMj4pBFOGLp_pG8-tzbP8TW9riV2LOUOvQBZPpLFNo1tTkehEyKLLoNNpA=w1879-h931"></img>
        </div>
    </main>
  );
}
