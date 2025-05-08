const Footer = () => {
  return (
    <footer className="site-footer h-card">
      {/* <data class="u-url" href="/"></data> */}

      <div className="wrapper">
        <h2 className="footer-heading">José A. Miranda</h2>

        <div className="footer-col-wrapper">
          <div className="footer-col footer-col-1">
            <ul className="contact-list">
              <li className="p-name">José A. Miranda</li>
              <li>
                <a className="u-email" href="mailto:jose.mirandant@ufpe.br">
                  jose.mirandant@ufpe.br
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-col-2">
            <ul className="social-media-list"></ul>
          </div>

          <div className="footer-col footer-col-3">
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
