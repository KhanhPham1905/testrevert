import Footer from "@/components/footer/Footer";
import HeaderComponents from "@/components/headerComponents";
import Home from "@/components/layout/home";
import Layout from "@/components/layout/layout";
import NavbarComponents from "@/components/navbar";
import { LoadingOutlined } from "@ant-design/icons";
import { ConfigProvider, Spin } from "antd";
import "../styles/atd_popup.css";
import "../styles/globals.css";
import "../styles/atd.css"
import "../styles/atd_register.css"
import "../styles/login.css"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import OpenNavbarContext from "@/components/context/openNavbarContext";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isHasRole, setIsHasRole]= useState(0);
  const [isAccess, setIsAccess] = useState(true);
  const [openKeys, setOpenKeys] = useState([]);
  const [firstLoad, setFirstLoad] = useState(
    router?.pathname?.includes("/") ? true : false
  );
  
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  const LoadingComp = () => {
    return (
      <Spin
        size="large"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
        }}
      />
    );
  };
  useEffect(() => {
    const doLoading = () => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        setTimeout(() => {
            router.events.on("routeChangeStart", start);
        }, 50);
        setTimeout(() => {
            router.events.on("routeChangeComplete", end);
        }, 50);
        router.events.on("routeChangeError", end);
        return () => {
            router.events.off("routeChangeStart", start);
            router.events.off("routeChangeComplete", end);
            router.events.off("routeChangeError", end);
        };
    };
    if (!router?.pathname?.includes("/tran-gchu")) {
        doLoading();
    } 
}, []);

  useEffect(() => {
    if (router.pathname.includes("/")) {
        const timeout = setTimeout(() => {
            setFirstLoad(false);
        }, 50);
        return () => clearTimeout(timeout);
    }
  }, [router?.pathname]);

  return (
    <>{
      (!isAccess) ? (
        <OpenNavbarContext>
          <Home
            isHasRole={isHasRole}
            setIsHasRole={setIsHasRole}
            openKeys={openKeys}
            setOpenKeys={setOpenKeys}
            isAccess={isAccess}
            setIsAccess={setIsAccess}
          >
            {< Component {...pageProps} />}
          </Home>
          </OpenNavbarContext>
        ) : 
         (
          <OpenNavbarContext>
          <Layout 
            isHasRole={isHasRole}
            setIsHasRole={setIsHasRole}
            openKeys={openKeys}
            setOpenKeys={setOpenKeys}
            isAccess={isAccess}
            setIsAccess={setIsAccess}
          >
            {<Component {...pageProps} />}
          </Layout>
          </OpenNavbarContext>
        ) 
    }
    </>
  );
}
