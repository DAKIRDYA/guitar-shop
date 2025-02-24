import React, { useEffect, useState } from "react";
import { AppRoute, PageTitles, REGULAR_MAIL, REGULAR_PASS, TextError } from "../common/constants/const";
import AuthHeader from "../components/auth-header";
import Footer from "../components/footer";
import SocialIcons from "../components/social-icons";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useActionCreators } from "../store/hooks/useActionCreators";
import { userActions } from "../store/slices/user/user-slice";
import { useAuth } from "../hooks/use-auth";
import { validateUserName } from "../common/utils/validation";

function RegistrationPage(): JSX.Element {
  const [formData, setFormData] = useState({ name:'', email: '', password: '',token: ''});
  const {registrate} = useActionCreators(userActions);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const isAuth = useAuth();

  useEffect(() => {setFormData({ name:'', email: '', password: '',token: ''});}, []);

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
        return toast.error(TextError.ValidationLoginPassForm);
      }
      const errors = validateUserName(formData);
      if (errors.length > 0) {
        return toast.error(errors[0]);
      }

  //  addUser(formData); - запрос к серверу для записи нового пользователя,
      registrate(formData) //Заглушка по регистрации без сервера
      navigate('/');
    };

  return (
<React.Fragment>
   <Helmet>
        <title>{PageTitles.RegistrationPageTitle}</title>
   </Helmet>

  <div>
      <SocialIcons/>
      <div className="wrapper">
        <AuthHeader/>
        <main className="page-content">
        <div className="container">
          <section className="login">
            <h1 className="login__title">Регистрация</h1>
            <form method="post" action="/"
            onSubmit={handleFormSubmit}
            >
              <div className="input-login">
                <label htmlFor="name">Введите имя</label>
                <input type="text" id="name" name="name" autoComplete="off" required
                  onChange={handleInputChange}
                ></input>
                <p className="input-login__error">Заполните поле</p>
              </div>
              <div className="input-login">
                <label htmlFor="email">Введите e-mail</label>
                <input type="email" id="email" name="email"  autoComplete="off" required
                onChange={handleInputChange}
                ></input>
                <p className="input-login__error">Заполните поле</p>
              </div>
              <div className="input-login">
                <label htmlFor="password">Придумайте пароль</label><span>
                  <input type={!passwordVisible ? "password": "text"} placeholder="• • • • • • • • • • • •" id="password" name="password" autoComplete="off" required
                  onChange={handleInputChange}
                  ></input>
                  <button className="input-login__button-eye" type="button"
                  onClick = {() => setPasswordVisible(!passwordVisible)}
                  >
                    <svg width="14" height="8" aria-hidden={!passwordVisible}>
                      <use xlinkHref="#icon-eye"></use>
                    </svg>
                  </button></span>
                <p className="input-login__error">Заполните поле</p>
              </div>
              <button className="button login__button button--medium" type="submit">Зарегистрироваться</button>
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

export default RegistrationPage;
