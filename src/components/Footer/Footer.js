import "./Footer.css";
const Footer = ({nama}) => {
    return (
        <footer className="footer">
          <h3>Copyright &copy; 2024 Developed by {nama}</h3>
          <span>Make with &#10084</span>
        </footer>
      );
};

export default Footer;