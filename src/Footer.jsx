function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Hussein Haidar</span>
        <a
          href="https://github.com/Hsenhydr/Portfolio"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
