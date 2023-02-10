import hus from "../../assets/images/gullholmen-hus.webp";

import LazyLoad from "react-lazy-load";
import { linkList } from "./ContactList";

export const Contact = () => {
  return (
    <div className="contact">
      <section className="p-standard">
        <div className="content-standard">
          <div className="display-flex justify-between align-center">
            <div className="contact-list slide-left">
              <h2 className="contact-list_title">Kontakt</h2>

              <p className="contact-list_subtitle">
                Om du har några frågor om innehållet på sidan, maila:
              </p>
              <p>
                <a
                  className="link link-black"
                  href="mailto:info@gullholmengo.se">
                  info@gullholmengo.se
                </a>
              </p>

              <div>
                <h3 className="contact-list_subtitle">
                  För mer information, se externa länkar nedan
                </h3>
                <ul className="contact-list_links">
                  {linkList.map((link, i) => {
                    return (
                      <li key={i}>
                        <a
                          href={link.link}
                          className="link link-black"
                          target={"_blank"}
                          rel="noreferrer">
                          {link.info}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <figure className="img-wrap_h slide-right overlay">
              <LazyLoad>
                <img src={hus} alt="Skepparmuseet" />
              </LazyLoad>
              <figcaption>
                Del av Gullholmsön med Skepparmuseet i förgrunden
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};
