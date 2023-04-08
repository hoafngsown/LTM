import React, { useEffect } from "react";
import styled from "styled-components";

import { LoginForm } from "@/pages/auth/components/login";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentUserState, DASHBOARD_PATH, LOGIN_PATH } from "@/constants";
import { getToken, saveTokenToCookies, saveTokenToSession } from "@/utils";
import { LoginInfo } from "@/types/auth";
// import { RoleAdmin } from "@/enums";
// import { LIST_HOTEL } from "@/constants/hotel";

const StyledLoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("/images/bg-login.svg");
  background-size: cover;
  .page-content {
    width: 524px;
    height: 606px;
  }
  .card {
    display: flex;
    justify-content: center;
    padding: 36px 48px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(77, 70, 70, 0.2);
  }
`;

interface ILoginPageProps { }

export const LoginPage = (props: React.PropsWithChildren<ILoginPageProps>) => {
  const navigate = useNavigate();
  // const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const token = getToken();

  const handleLoginSuccess = (result: LoginInfo, saveToken: boolean) => {
    if (saveToken) {
      saveTokenToCookies(result.token);
    } else {
      saveTokenToSession(result.token);
    }

    // setCurrentUser(result.admin);

    // if (
    //   result?.admin?.role === RoleAdmin.ADMIN ||
    //   result?.admin?.role === RoleAdmin.MANAGE
    // ) {
    //   return navigate(DASHBOARD_PATH, { replace: true });
    // }

    // const hotelName = LIST_HOTEL.find(
    //   (item) => item?.id === result?.admin?.hotelId
    // )?.name;

    // navigate(`/hotel/${hotelName}/task/overview`, { replace: true });
  };

  // useEffect(() => {
  //   if (
  //     window.location.pathname.startsWith(LOGIN_PATH) &&
  //     token &&
  //     currentUser
  //   ) {
  //     navigate(DASHBOARD_PATH, { replace: true });
  //   }
  // }, []);

  return (
    <StyledLoginPage>
      <div className="page-content">
        <div className="card !py-[3.5rem]">
          <LoginForm onSuccess={handleLoginSuccess} />
        </div>
      </div>
    </StyledLoginPage>
  );
};
