import "./style.css";
import { ASSET } from "../../data/uiData";
import Footer from "../footer";

export default function SiparisOnay({
  siparisOzeti,
  apiYaniti,
  onYeniSiparis,
  onAnasayfa,
}) {
  if (!siparisOzeti) {
    return (
      <>
        <main className="siparis-success">
          <h2>Henuz siparis yok</h2>
          <button type="button" onClick={onAnasayfa}>
            Anasayfa
          </button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="siparis-success">
        <header className="success-header">
          <img src={ASSET.logo} alt="Teknolojik Yemekler" className="success-logo" />
        </header>
        <section className="success-content">
          <p className="success-top">lezzetin yolda</p>
          <h1>SIPARIS ALINDI</h1>
          <p data-cy="confirmation-name">{siparisOzeti.isim}</p>
          <hr />
          <h3>{siparisOzeti.urun || "Position Absolute Aci Pizza"}</h3>
          <ul>
            <li>Boyut: {siparisOzeti.boyut}</li>
            <li>Hamur: {siparisOzeti.hamur}</li>
            <li>Ek Malzemeler: {siparisOzeti.malzemeler.join(", ")}</li>
          </ul>
          <div className="success-summary">
            <h4>Siparis Toplami</h4>
            <p>
              Secimler <span>{(siparisOzeti.malzemeler.length * 5).toFixed(2)}₺</span>
            </p>
            <p>
              Toplam <span>{siparisOzeti.toplam.toFixed(2)}₺</span>
            </p>
            <p className="api-info">ID: {apiYaniti?.id || "Yok"}</p>
          </div>
          <div className="success-actions">
            <button type="button" onClick={onYeniSiparis}>
              Yeni Siparis
            </button>
            <button type="button" onClick={onAnasayfa}>
              Anasayfa
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
