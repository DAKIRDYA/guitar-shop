import { useLocation, useNavigate } from "react-router-dom";
import { AppRoute} from "../../common/constants/const";
import { useAuth } from "../../hooks/use-auth";
import { useEffect } from "react";
import Spinner from "../spinner/spinner";


type PrivateRouteProps = {
  children: JSX.Element;
  isAuth?: boolean;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const isAuth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

    useEffect(() => {
      if(!isAuth) {
         navigate(AppRoute.Login,{state:{from: location}})
      }
  },[])

  if(isAuth) {
    return children;
  } else {
    return <Spinner/>
  }
}

export default PrivateRoute;
