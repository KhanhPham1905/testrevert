import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBarCT from "../navbarCT";
import NavBarFLC from "../navbarFreelancer";

const NavbarComponents = ({isHasRole,setIsHasRole, openKeys, setOpenKeys}) => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  console.log('isHasRole', isHasRole);
  useEffect(() => {
    console.log('router.pathname.includes("cong-ty")', router)
    if (router.pathname.includes("cong-ty")) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }, [router.pathname]);
  return <div>{(navbar) ? <NavBarCT /> :  <NavBarFLC/>} </div>;
};

export default NavbarComponents;
