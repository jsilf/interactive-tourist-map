import { Logo } from "../Header/Nav/Logo";

export const Footer = () => {
  const date = new Date();
  const thisYear = date.getFullYear();
  const owner = "Jessica Silfver";

  return (
    <footer className="footer">
      <div className="content-standard">
        <div className="display-flex justify-between">
          <Logo />
          <div className="display-flex display-flex-col justify-center align-center">
            <p className="footer-text">
              <a className="link link-black" href="mailto:info@gullholmengo.se">
                info@gullholmengo.se
              </a>
            </p>

            <p className="footer-text">
              {owner} &copy; {thisYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
