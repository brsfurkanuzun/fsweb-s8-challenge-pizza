import { useMemo, useState } from "react";
import axios from "axios";
import "./style.css";
import Footer from "../footer";
import { ASSET } from "../../data/uiData";

const EK_MALZEMELER = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Sogan",
  "Domates",
  "Misir",
  "Sucuk",
  "Jalepeno",
  "Sarimsak",
  "Biber",
  "Ananas",
  "Kabak",
];

export default function SiparisFormu({
  selectedProduct,
  onAnasayfa,
  onSiparisTamamlandi,
}) {
  const [isim, setIsim] = useState("");
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [ozel, setOzel] = useState("");
  const [adet, setAdet] = useState(1);
  const [hataMesaji, setHataMesaji] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);

  const pizzaFiyati = selectedProduct?.unitPrice || selectedProduct?.price || 85.5;
  const pizzaAdi = selectedProduct?.name || "Position Absolute Aci Pizza";
  const pizzaPuani = selectedProduct?.rate || "4.9";

  const secimlerFiyati = useMemo(() => malzemeler.length * 5, [malzemeler]);
  const toplam = useMemo(
    () => pizzaFiyati * adet + secimlerFiyati,
    [adet, secimlerFiyati, pizzaFiyati]
  );

  const formGecerli =
    isim.trim().length >= 3 &&
    !!boyut &&
    !!hamur &&
    malzemeler.length >= 4 &&
    malzemeler.length <= 10;

  const handleMalzemeChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      if (malzemeler.length >= 10) return;
      setMalzemeler([...malzemeler, value]);
    } else {
      setMalzemeler(malzemeler.filter((item) => item !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formGecerli || yukleniyor) return;

    const payload = {
      isim: isim.trim(),
      urun: pizzaAdi,
      boyut,
      hamur,
      malzemeler,
      ozel,
      adet,
      toplam,
    };

    try {
      setYukleniyor(true);
      setHataMesaji("");
      const response = await axios.post("https://reqres.in/api/pizza", payload, {
        headers: { "x-api-key": "reqres_dc159f899af6471e8231e0b0a24e4919" },
      });
      console.log("Siparis Ozeti:", response.data);
      onSiparisTamamlandi(payload, response.data);
    } catch (error) {
      setHataMesaji("Siparis gonderilemedi. Internet baglantinizi kontrol edin.");
    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <div className="siparis-container">
      <header className="siparis-header">
        <img src={ASSET.logo} alt="Teknolojik Yemekler" className="header-logo" />
        <nav>
          <button
            type="button"
            className="link-btn"
            onClick={onAnasayfa}
            data-cy="go-home"
          >
            Anasayfa
          </button>
          <span> - Siparis Olustur</span>
        </nav>
      </header>

      <main className="siparis-content">
        <h2 className="pizza-isim">{pizzaAdi}</h2>
        <div className="fiyat-puan">
          <p className="fiyat">{pizzaFiyati.toFixed(2)}₺</p>
          <p className="puan">{pizzaPuani}</p>
          <p className="yorum">(200)</p>
        </div>
        <p className="pizza-aciklama">
          Frontend Dev olarak hic position absolute kullanmiyorsan bu pizza tam
          sana gore. Aciklama alani tasarim ile uyumlu tutuldu.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="isim-alani">
            <label htmlFor="isim">Isim *</label>
            <input
              id="isim"
              name="isim"
              data-cy="name-input"
              value={isim}
              onChange={(e) => setIsim(e.target.value)}
              minLength={3}
              required
              placeholder="En az 3 karakter"
            />
          </div>
          <div className="secim-satiri">
            <fieldset>
              <legend>Boyut Sec *</legend>
              <label htmlFor="boyut-kucuk">
                <input
                  id="boyut-kucuk"
                  type="radio"
                  name="boyut"
                  value="Kucuk"
                  checked={boyut === "Kucuk"}
                  onChange={(e) => setBoyut(e.target.value)}
                  required
                />
                Kucuk
              </label>
              <label htmlFor="boyut-orta">
                <input
                  id="boyut-orta"
                  type="radio"
                  name="boyut"
                  value="Orta"
                  checked={boyut === "Orta"}
                  onChange={(e) => setBoyut(e.target.value)}
                />
                Orta
              </label>
              <label htmlFor="boyut-buyuk">
                <input
                  id="boyut-buyuk"
                  type="radio"
                  name="boyut"
                  value="Buyuk"
                  checked={boyut === "Buyuk"}
                  onChange={(e) => setBoyut(e.target.value)}
                />
                Buyuk
              </label>
            </fieldset>

            <div>
              <label htmlFor="hamur-sec" className="alan-label">
                Hamur Sec *
              </label>
              <select
                id="hamur-sec"
                value={hamur}
                onChange={(e) => setHamur(e.target.value)}
                required
              >
                <option value="" disabled>
                  Hamur Kalinligi
                </option>
                <option value="Ince">Ince</option>
                <option value="Orta">Orta</option>
                <option value="Kalin">Kalin</option>
              </select>
            </div>
          </div>

          <fieldset className="malzemeler">
            <legend>Ek Malzemeler</legend>
            <p>En az 4, en fazla 10 malzeme seciniz. Her biri 5₺.</p>
            <div className="malzeme-grid" data-cy="toppings">
              {EK_MALZEMELER.map((malzeme) => (
                <label key={malzeme} htmlFor={`malzeme-${malzeme}`}>
                  <input
                    id={`malzeme-${malzeme}`}
                    type="checkbox"
                    value={malzeme}
                    checked={malzemeler.includes(malzeme)}
                    onChange={handleMalzemeChange}
                    data-cy={`topping-${malzeme}`}
                  />
                  {malzeme}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="siparis-notu">
            <label htmlFor="siparis-notu">Siparis Notu</label>
            <textarea
              id="siparis-notu"
              data-cy="note-input"
              placeholder="Siparisine eklemek istedigin bir not var mi?"
              value={ozel}
              onChange={(e) => setOzel(e.target.value)}
              rows={3}
            />
          </div>

          {hataMesaji ? (
            <p className="hata-mesaji" role="alert">
              {hataMesaji}
            </p>
          ) : null}

          <div className="alt-alan">
            <div className="adet-kontrol">
              <button
                type="button"
                onClick={() => setAdet((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span data-cy="quantity-value">{adet}</span>
              <button type="button" onClick={() => setAdet((prev) => prev + 1)}>
                +
              </button>
            </div>

            <div className="fiyat-karti">
              <h4>Siparis Toplami</h4>
              <p>
                Secimler <span>{secimlerFiyati.toFixed(2)}₺</span>
              </p>
              <p className="toplam">
                Toplam <span>{toplam.toFixed(2)}₺</span>
              </p>
              <button
                type="submit"
                className="siparis-btn"
                disabled={!formGecerli || yukleniyor}
                data-cy="submit-order"
              >
                {yukleniyor ? "GONDERILIYOR..." : "SIPARIS VER"}
              </button>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
