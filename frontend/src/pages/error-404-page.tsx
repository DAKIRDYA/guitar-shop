import React from "react";
import { PageTitles } from "../common/constants/const";
import Footer from "../components/footer";

import SocialIcons from "../components/social-icons";
import AuthHeader from "../components/auth-header";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


function Error404Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>{PageTitles.Error404Title}</title>
      </Helmet>
      <div>
        <SocialIcons/>
        <div className="wrapper">
            <AuthHeader/>
            <main className="page-content">
                <div className="error__container">
                  <section className="error">
                    <h1 className="error__title">404</h1><span className="error__subtitle">Страница не найдена.</span>
                    <p className="error__text"> Возможно, страница была удалена или<br/>её вовсе не существовало.</p>
                    <Link to="/">
                      <button  className="button button__error button--small button--black-border">Продолжить покупки</button>
                      </Link>
                  </section>
                </div>
              </main>
              <Footer/>
            </div>
      </div>
    </React.Fragment>

);

}
export default Error404Page;
