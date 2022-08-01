import "./Header.scss";

const Header = function(props) {
  return (
    <header className="header">
      <h1>Roman Converter</h1>
      <p>Use this Roman numeral converter to convert arabic numerals into Roman numerals.</p>
      <p>Roman numerals are a number system developed in ancient Rome where letters represent numbers. The modern use of Roman numerals involves the letters I, V, X, L, C, D, and M.</p>
    </header>
  );
};

export default Header;