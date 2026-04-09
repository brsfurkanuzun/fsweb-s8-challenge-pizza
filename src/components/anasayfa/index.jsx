import { useMemo, useState } from "react";
import "./style.css";
import {
  ASSET,
  HOME_CATEGORIES,
  HOME_CTA,
  HOME_MENU_FILTERS,
  HOME_PRODUCTS,
} from "../../data/uiData";
import Footer from "../footer";

export default function AnaSayfa({ onSiparisBaslat }) {
  const [activeMenuFilter, setActiveMenuFilter] = useState("pizza");

  const filtrelenenUrunler = useMemo(() => {
    if (activeMenuFilter === "fast") return HOME_PRODUCTS;
    const list = HOME_PRODUCTS.filter((p) =>
      p.filterTags?.includes(activeMenuFilter),
    );
    return list;
  }, [activeMenuFilter]);

  return (
    <div className="anasayfa">
      <header className="ust-header">
        <img
          src={ASSET.logo}
          alt="Teknolojik Yemekler"
          className="header-logo"
        />
      </header>
      <main className="hero-alani">
        <img src={ASSET.homeBanner} alt="" className="hero-bg" />
        <section className="hero-kutu">
          <h2>Kod Aciktirir, Pizza Doyurur</h2>
          <button
            type="button"
            className="hero-btn"
            data-cy="start-order"
            onClick={() => onSiparisBaslat(HOME_PRODUCTS[1])}
          >
            ACIKTIM
          </button>
        </section>
      </main>

      <section className="kategori-bar">
        {HOME_CATEGORIES.map((item) => (
          <article key={item.id} className="kategori-chip">
            <img src={item.icon} alt="" />
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <main className="anasayfa-icerik">
        <div className="cta-grid">
          {HOME_CTA.map((item) => (
            <article key={item.id} className="cta-card">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <button
                  type="button"
                  onClick={() =>
                    onSiparisBaslat(item.orderProduct || HOME_PRODUCTS[1])
                  }
                >
                  {item.button}
                </button>
              </div>
            </article>
          ))}
        </div>

        <header className="menu-header">
          <p>en cok paketlenen menuler</p>
          <h2>Aciktiran Kodlara Doyuran Lezzetler</h2>
        </header>

        <nav className="menu-filter-pills" aria-label="Menu filtreleri">
          {HOME_MENU_FILTERS.map((pill) => (
            <button
              key={pill.id}
              type="button"
              className={
                pill.id === activeMenuFilter
                  ? "menu-pill menu-pill--active"
                  : "menu-pill"
              }
              onClick={() => setActiveMenuFilter(pill.id)}
            >
              {pill.label}
            </button>
          ))}
        </nav>

        <div className="urun-grid">
          {filtrelenenUrunler.map((item) => (
            <article className="urun-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <div>
                <span>{item.rate}</span>
                <strong>{item.price}</strong>
              </div>
              <button type="button" onClick={() => onSiparisBaslat(item)}>
                SIPARIS VER
              </button>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
