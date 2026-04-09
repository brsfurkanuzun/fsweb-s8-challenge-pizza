import { ASSET, FOOTER_INFO } from "../../data/uiData";
import "./style.css";

export default function Footer() {
  return (
    <footer className="app-footer">
      <section className="footer-grid">
        <article>
          <img src={ASSET.footerLogo} alt="Teknolojik Yemekler" className="footer-logo" />
          <ul className="footer-list">
            {FOOTER_INFO.contact.map((item) => (
              <li key={item.id}>
                <img src={item.icon} alt="" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h4>Hot Menu</h4>
          <ul className="footer-menu">
            {FOOTER_INFO.menu.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h4>Instagram</h4>
          <div className="insta-grid">
            {FOOTER_INFO.insta.map((img, index) => (
              <img src={img} alt={`instagram-${index + 1}`} key={img} />
            ))}
          </div>
        </article>
      </section>
    </footer>
  );
}
