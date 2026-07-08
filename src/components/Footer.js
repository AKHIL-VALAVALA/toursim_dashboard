const footerLinks = [
  "Privacy Policy",
  "Refund Policy",
  "Terms and Refunds",
  "Legal",
  "About",
  "Subscribe",
  "Pricing",
  "Membership",
  "Other",
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h2>
          Student Special: Discounted rates
          <br />
          on tropical getaways!
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor.
        </p>

        <nav className="footer-links">
          {footerLinks.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
