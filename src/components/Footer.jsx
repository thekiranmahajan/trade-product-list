const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <span>© {currentYear} Made with ❤️ by </span>
      <a
        href="https://github.com/thekiranmahajan/trade-product-list"
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        &nbsp; Kiran Mahajan
      </a>
    </footer>
  );
};

export default Footer;
