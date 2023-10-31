import Head from "next/head";
import Footer from "../footer/Footer";
import HeaderComponents from "../headerComponents";
import NavBarCT from "../navbarCT";
import { useRouter } from "next/router";

export default function Home({ children, isHasRole,setIsHasRole, openKeys, setOpenKeys, isAccess, setIsAccess }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://timviec365.vn/css/footer_new.css?v=2"
        />
      </Head>
      <HeaderComponents 
        isHasRole={isHasRole}
        setIsHasRole={setIsHasRole}
        openKeys={openKeys}
        setOpenKeys={setOpenKeys}
        isAccess={isAccess}
        setIsAccess={setIsAccess} 
      />
      
      <div>{children}</div>
      {(router.pathname !== '/_error') && <Footer />}
    </div>
  );
}
