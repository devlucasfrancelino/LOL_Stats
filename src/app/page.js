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
          <img src="https://lh3.googleusercontent.com/fife/ALs6j_EhH3c8bqvlQ35FRjt08vkva2vqRh_Vj8PTbKi5xD4Gxh3_kLkNc2iyINQOKKfE2Ws4jJl48mxqGLM5CLwVvXAlMfeoupmRGPhTE6pIozzeBGLpi7h6byGZ8Vg-CPiZcWhpeBgl39-ki7YhwecvfZabyGKry1BsycR3IuBkRbGeloMLLvLOKMocUqOxN9_lhTF-CZFU4H9DTdj4LQInpXzioYb1vpKV3i-TlijxGHhWKO6nCLNZCmGd8GURnRtl40ojNr4U40rFmpo_SgKLhIWBn2yTu4ZDO_loLR-WvPMLNy8zKWsKjG086M4hGIPEdIbeMCHmN-qXGZ5jb4-h1G5Mvs4_Doz-YfRvngWqKM4mQ-j5dE-DVhVpdkKLaQAEfymiqNykqb_vIJZHe0bghxygZwYI3NsUDL_eG9ngK5oeE2Q13AgMCb4Dkr2seN_T7FAkxIY3vRNy6adENdCaW-CMlX_BdaH90FOLCScAdwqCDY5gnbIbvQPyjHJXWzU2X9YBB4g_QBRG6oZ0gNb_qFLk3swvATaXj585cHOusURdoxukBeljGq0wXEA1J5Z-TnKFC5l-pi020Qp5ZNgSmRi1RG5-W3EqJX0qsNeZlVcSWPLRwCqaZpYtlj4S_GfR3RP_8jO65hs95g5A_1wpRqZHAbQ4cYaVMapOI3YUOXsH9WSKRk7LlPym6E4oGsei_XVrT6fySPVOdtFLE1oT5Qaw-mjxO8WRwhqEuNZwvvKUuAerYc9iKVuIdypJol-0MDsQK83NKw9EdiIwPWFtfnisOsK4bPVEy0SCrYHS81h_J7EKN82845FZc5pjv4kJG0WL3Q3numkOAmOmQmWeRbVpilDdvy6-GG3sEqMk8JZ0d-P9De76r1DQ7C2WKhXtAIWZuXgSXGC9b0iUYvyIxxvUWuRNOGkgk5aZWrGZaQH5Ega_oRx7ye7ASs-g2F8cDh_-yt-9zoIVzK5Y71CKKG1NRZGou_4lnpt8FLTxGYaVMe5xxKOgweV3ge1hR5MptgS8JpWEXDLD8S5xNVVFEjbd2dmqRxy4R0qPhy1N48jDsCtRX-guCDRVcvwd_kyHKx0eTfeZItmc8VKBp1QJ9WAQjHzcZwRJO9UcudMs-p65oEvq9r83hHH-IUdCxF5Y7rW_bnt_25-YR--lg-8xD0IJN3gU23XlDa12CV2acsdVMyBdMlf0fXRC6n_x-EMHCmFnE77upgF4VdIPs_zCJPlQkbewhDXLsd-zhE1nWdzN2ZOkaKe8e3ePyFIi60-omdZ89TxgDGqfJxObUvXpp2bp5rkbPYpsUNy4UXP7MNNl1xjQxC7mRX7N93DibsQJ8mCPbHf2PR8x8mu9O2G5g85VokOVVtHcLN4X4uniwkBoXLb9otqnoaJ48nzZ1smS3u-XMfn17LFjOcL9xPFH3LRZyo8bj5qSVsXfszyblfcaG_-uH6EgMmAE0L9wFRzRdyQMYabEhWmmKcNpxTv63-yPtEdwvL2VjUR-r-4RCCasaLbxL90vynSzr1kpZn1qEoHzhwTX3hiONrln1ZAX-d03xtQBqymYIsJoGNYuRjaikFcqtNDRslCOQ5SFtVsjeHmAuvXhPKXG-QSuqUysQLxr9NvG88mFRMmxWWanTFI-3pDob56JBxbJhYLCKE_667eg1s4QE_ok34dWlf-tr7GESdTzuUZcOuFlpxgnk_7gOrkMIZfFPXpnLN0aeWap6IBksER62bXJ4nl-lNUz25ChcAblynwG5Jz48LgYJftndFdZ-WEAzKeAMHJyVEVf_w=w1879-h943"></img>
        </div>
    </main>
  );
}
