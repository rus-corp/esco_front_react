import '../../styles/main_components_style/Footer.scss'
import logo from '../../assets/logos/logo_black_footer.png'
import vkLogo from '../../assets/logos/vk-logo.svg'
import tgLogo from '../../assets/logos/tg-logo.svg'


export default function Footer() {

  return(
    <footer className="footer">
    <div className="container">
      <div className="footer-container">
        <div className="footer-logo">
          <img className="footer-logo-img" src={logo} alt="" />
          <p>Esco Doors</p>
        </div>
        <div className="footer-contacts">
          <div className="footer-phone">
            <a href="">
              <h4>8 (800) 550-81-79</h4>
            </a>
          </div>
          <div className="footer-blocks contacts">
            <ul>
              <li><a href="">м. Полежаевская</a></li>
              <li><a href="">г. Казань, Маршала Жукова, д. 52, <br></br>"Мебельный Центр"</a></li>
              <li><a href="">info@esco-doors.ru</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-blocks catalog">
          <ul>
            <li><a href="">Межкомнатные двери</a></li>
            <li><a href="">Мебель</a></li>
            <li><a href="">Входные двери</a></li>
            <li><a href="">Лестницы</a></li>
          </ul>
        </div>
        <div className="footer-blocks about">
          <ul>
            <li><a href="">Доставка</a></li>
            <li><a href="">Статьи</a></li>
            <li><a href="">О нас</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://vk.com/">
          <img src={vkLogo} alt="vkLogo" className='footer-icon' />
          </a>
          <a href="">
            <img src={tgLogo} alt="" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
}