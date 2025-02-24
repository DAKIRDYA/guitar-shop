import React, { useEffect, useState } from "react";

import { AppRoute, PageTitles, REGULAR_MAIL, REGULAR_PASS, textError } from "../common/constants/const";
import SocialIcons from "../components/social-icons";
import AuthHeader from "../components/auth-header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import { useActionCreators } from "../store/hooks/useActionCreators";
import { userActions, userSelectors } from "../store/slices/user/user-slice";
import { toast} from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useAppSelector } from "../store/hooks/useAppSelector";



function LoginPage(): JSX.Element {
  const status = useAppSelector(userSelectors.user);
  const [formData, setFormData] = useState({ email: status?.email, password: status?.password});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  //const {login} = useActionCreators(userActions);
  const {authorize} = useActionCreators(userActions);

  const isAuth = useAuth();

  useEffect(() => {
    if(isAuth) {
       navigate(AppRoute.Root)
    }
},[isAuth])

let isFormCorrect = false;


if (!REGULAR_MAIL.test(formData.email || '') || !REGULAR_PASS.test(formData.password || '')) {
  isFormCorrect = false;
} else {
  isFormCorrect = true;
}

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormCorrect === false) {
      return toast.error(textError.textErrorValidationForm);
    }
//    login(formData); - запрос к серверу для авторизации,

     authorize(formData) //Заглушка по авторизации без сервера
  };


  return (
<React.Fragment>
  <Helmet>
     <title>{PageTitles.LoginPageTitle}</title>
  </Helmet>

  <div>
      <SocialIcons/>
      <div className="wrapper">
        <AuthHeader/>
        <main className="page-content">
          <div className="container">
            <section className="login">
              <h1 className="login__title">Войти</h1>
              <p className="login__text">Hовый пользователь?
                <Link className="login__link" to={AppRoute.Registration}

                >Зарегистрируйтесь</Link> прямо сейчас</p>
              <form method="post" action="/"
                onSubmit={handleFormSubmit}
              >
                <div className="input-login">
                  <label htmlFor="email">Введите e-mail</label>
                  <input type="email" id="email" name="email" autoComplete="off" required
                    value={formData.email}
                    onChange={handleInputChange}
                  ></input>
                  <p className="input-login__error">Заполните поле</p>
                </div>
                <div className="input-login">
                  <label htmlFor="passwordLogin">Введите пароль</label><span>
                    <input
                     type={!passwordVisible ? "password": "text"} placeholder="• • • • • • • • • • • •" id="passwordLogin" name="password" autoComplete="off" required
                      value={formData.password}
                      onChange={handleInputChange}
                    ></input>
                    <button className="input-login__button-eye" type="button"
                    onClick = {() => setPasswordVisible(!passwordVisible)}>
                      <svg width="14" height="8" aria-hidden={passwordVisible}>
                        <use xlinkHref="#icon-eye"></use>
                      </svg>
                    </button></span>
                  <p className="input-login__error">Заполните поле</p>
                </div>
                <button className="button login__button button--medium" type="submit">Войти</button>
              </form>
            </section>
          </div>
        </main>
        <Footer/>
      </div>
  </div>
  </React.Fragment>
  );
}

export default LoginPage;
