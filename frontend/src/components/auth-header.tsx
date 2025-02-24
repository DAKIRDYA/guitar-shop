import { Link } from "react-router-dom"
import Logo from "./logo"
import { AppRoute } from "../common/constants/const"

function AuthHeader(): JSX.Element {
  return (
      <header className="header" id="header">
      <div className="container">
        <div className="header__wrapper">
        <Link className="header__logo logo" to={AppRoute.Root}>
          <Logo/>
          </Link>
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <Link to={AppRoute.Root} className="link main-nav__link" >Каталог</Link>
              </li>
              <li className="main-nav__item"><a className="link main-nav__link" href="#">Где купить?</a>
              </li>
              <li className="main-nav__item"><a className="link main-nav__link" href="#">О компании</a>
              </li>
            </ul>
          </nav>
          <div className="header__container"><span className="header__user-name">Имя</span>

          <Link className="header__link" to={AppRoute.Login} aria-label="Перейти в личный кабинет">
              <svg className="header__link-icon" width="12" height="14" aria-hidden="true">
                <use xlinkHref="#icon-account"></use>
              </svg><span className="header__link-text"

              >Вход</span></Link></div>
        </div>
      </div>
    </header>
  )
}

export default AuthHeader
