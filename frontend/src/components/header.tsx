import { Link } from "react-router-dom"
import { AppRoute } from "../common/constants/const"
import Logo from "./logo"
import { useActionCreators } from "../store/hooks/useActionCreators";
import { userActions, userSelectors } from "../store/slices/user/user-slice";
import { useAppSelector } from "../store/hooks/useAppSelector";

function Header(): JSX.Element {
  const {unAuthorize} = useActionCreators(userActions);
  const user = useAppSelector(userSelectors.user);
  return (
    <header className="header--admin header" id="header">
    <div className="container">
      <div className="header__wrapper">
      <Link className="header__logo logo" to={AppRoute.Root}>
        <Logo/>
      </Link>

        <nav className="main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link to={AppRoute.Root} className="link main-nav__link">Каталог</Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.Root} className="link main-nav__link" >Список товаров</Link>
            </li>
          </ul>
        </nav>
        <div className="header__container"><span className="header__user-name">{user.name}</span>
        <Link className="header__link" to={AppRoute.Login} onClick={() => unAuthorize() }aria-label="Перейти в личный кабинет">


            <svg className="header__link-icon" width="12" height="14" aria-hidden="true">
              <use xlinkHref="#icon-account"></use>
            </svg><span className="header__link-text">Вход</span></Link>
            <a className="header__cart-link" href="cart.html" aria-label="Перейти в корзину">
            <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-basket"></use>
            </svg><span className="header__cart-count">2</span></a></div>
      </div>
    </div>
</header>
)
}

export default Header
