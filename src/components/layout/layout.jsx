import Footer from "../footer/Footer";
import HeaderComponents from "../headerComponents";
import NavbarComponents from "../navbar";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Layout({ children, isHasRole,setIsHasRole, openKeys, setOpenKeys,isAccess, setIsAccess }) {
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
      />
      <div
        style={{
          width: "95%",
          margin: "auto",
          maxWidth: "1275px",
        }}
      >
        <NavbarComponents 
          isHasRole={isHasRole}
          setIsHasRole={setIsHasRole}
          openKeys={openKeys}
          setOpenKeys={setOpenKeys}
        />
        {children}
      </div>
      
      {(router.pathname !== '/_error') && <Footer />}
    </div>
  );
}
