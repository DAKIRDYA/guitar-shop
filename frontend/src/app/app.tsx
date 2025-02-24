import {Route, BrowserRouter, Routes} from 'react-router-dom';

import { AppRoute } from "../common/constants/const";
import Error404Page from "../pages/error-404-page";
import LoginPage from "../pages/login-page";
import ProductAddPage from "../pages/product-add-page";
import ProductCardPage from "../pages/product-card-page";
import ProductEditPage from "../pages/product-edit-page";
import ProductListPage from "../pages/product-list-page";
import RegistrationPage from "../pages/registration-page";
import PrivateRoute from '../components/private-route/private-route';
import {HelmetProvider} from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';






function App(): JSX.Element {

  return (
    <HelmetProvider>
    <ToastContainer position="top-center"/>
    <BrowserRouter>
      <Routes>

      <Route
          path={AppRoute.Root}
          element={
          <PrivateRoute >
              <ProductListPage
              />
          </PrivateRoute>

        }
        />

        <Route
          path={AppRoute.Registration}
          element={<RegistrationPage/>}
        />


        <Route
          path={AppRoute.ListPage}
          element={
          <PrivateRoute >
              <ProductListPage
              />
          </PrivateRoute>
        }
        />

        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Add}
          element={
          <PrivateRoute >
          <ProductAddPage/>
          </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.EditId}
          element={
            <PrivateRoute >
            <ProductEditPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.CardId}
          element={
            <PrivateRoute >
            <ProductCardPage/>
            </PrivateRoute>

          }
        />
        <Route path={AppRoute.NotFound} element={<Error404Page />} />
      </Routes>
    </BrowserRouter>

    </HelmetProvider>
  );
}
export default App;

