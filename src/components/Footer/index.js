import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy; {new Date().getFullYear()} Creado por Sofj Cuadros. &middot;{" "}
        <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a>
      </p>
    </div>
  );
};

export default Footer;
