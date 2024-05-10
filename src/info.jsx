import { FaFacebook, FaInstagram } from "react-icons/fa";
function Info() {
  return (
    <div className="info">
      <img src="/bazar-demoReactVite/logo.png" alt="" height={100} width={100} />
      <h1>EL Bazar del Optometrista</h1>
      <div className="redes">
        <a href="https://www.facebook.com/elbazardeloptometrista?locale=es_LA">
          FACEBOOK
          <FaFacebook />
        </a>
        <br/>
        <a href="https://www.facebook.com/elbazardeloptometrista?locale=es_LA">
          INSTAGRAM
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Info;
