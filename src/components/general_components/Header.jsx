import '../../styles/main_components_style/Header.scss'
import logo from '../../assets/logos/logo_black_header.png'


export default function Header() {
  return(
    <header className="header">
    <div className="container">
      <div className="header-menu">
        <div className="header-logo">
          <a href="">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
        <div className="nav-bar">
          <ul>
            <li><a href=""></a>Доставка</li>
            <li><a href=""></a>Статьи</li>
            <li><a href=""></a>О нас</li>
            <li><a href=""></a>Контакты</li>
          </ul>
        </div>
        <div className="header-support">
          <a href='mailto:info@esco.ru' className="support email">info@esco-doors.com</a>
          <a href='tel:+78002225544' className="support phone">8 (800) 550-81-79</a>
        </div>
        <button className="header-catalog">Каталог</button>
      </div>
    </div>
  </header>
  );
}