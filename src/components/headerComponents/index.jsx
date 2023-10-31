import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderLogin from "../headerlogin";
import Header from "../header/header";

const HeaderComponents = ( {isHasRole,setIsHasRole, openKeys, setOpenKeys , isAccess, setIsAccess }) => {
  const [headerLogin, setHeaderLogin] = useState(false);
  const [header, setHeader] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.includes("/cong-ty")) {
      setHeaderLogin(true);
    } else if (router.pathname.includes("/freelancer")) {
      setHeaderLogin(true);
    } else {
      setHeaderLogin(false);
    }
  }, [router.pathname]);

  return <div>{headerLogin ? 
            <HeaderLogin 
              isHasRole={isHasRole}
              setIsHasRole={setIsHasRole}
              openKeys={openKeys}
              isAccess={isAccess}
              setIsAccess={setIsAccess} 
              setOpenKeys={setOpenKeys}/> 
            : 
            <Header 
                isHasRole={isHasRole}
              setIsHasRole={setIsHasRole}
              openKeys={openKeys}
              isAccess={isAccess}
              setIsAccess={setIsAccess} 
              setOpenKeys={setOpenKeys} 
            />
            }</div>;
};

export default HeaderComponents;
