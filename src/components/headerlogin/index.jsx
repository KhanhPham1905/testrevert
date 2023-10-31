import { Dropdown, Popover, Space } from "antd";
import styles from "./index.module.css";
import Link from "next/link";
import { useOpenNavBarComponent } from "../../components/context/openNavbarContext";
const HeaderLogin = () => {
  const { isOpen, setIsOpen } = useOpenNavBarComponent();

  const content = (
    <div className={`${styles.popup_user}`}>
      <div className={styles.fix_xt}>
        <div className={`${styles.img_popup_user}`}>
          <img
            width="35px"
            height="35px"
            src="/job-1695950247.png"
            className=""
            alt="avatar"
          />
        </div>
        <div className={`${styles.text_dropdown_user}`}>
          <p className={`${styles.text01_dr_user}`}>Nguyen The Anh</p>
          <a
            href="/thong-tin-nha-tuyen-dung.html"
            className={`${styles.text02_dr_user}`}
          >
            Thông tin cơ bản
          </a>
        </div>
      </div>
      <div className={`${styles.it_dr_user}`}>
        <img
          src="/ic_popup_01.png"
          alt="logout-ic"
          className={`${styles.icon_18}`}
        />
        <p className={`${styles.logout}`}>Đăng xuất</p>
      </div>
    </div>
  );
  return (
    <div className={styles.main_header}>
      <div className={`${styles.container} ${styles.container_header}`}>
        <div className={`${styles.block_pc} ${styles.pc}`}>
          <div className={styles.logo}>
            <Link href="/">
              <img
                className={styles.img_hd}
                src="/logo.png"
                alt="logo timviec365.vn"
              />
            </Link>
          </div>
          <div className={styles.header_right}>
            <div className={styles.menu}>
              <ul className={styles.list_menu}>
                <li className={`${styles.item_menu} ${styles.it_header_list}`}>
                  <Link href="/tim-viec-lam-freelancer.html">
                    <span className={styles.inline_block}>
                      Việc làm Freelancer mới nhất
                    </span>{" "}
                    <img
                      src="/ic_down02.png"
                      alt="ic_down02"
                      className={`${styles.ic_down02} ${styles.inline_block}`}
                    />
                  </Link>
                  <ul className={styles.list_vieclam}>
                    <li className={styles.it_vieclam}>
                      <Link href="/tim-viec-lam-freelancer-ban-thoi-gian.html">
                        Việc làm Freelancer bán thời gian
                      </Link>
                    </li>
                    <li className={styles.it_vieclam}>
                      <Link href="/tim-viec-lam-freelancer-theo-du-an.html">
                        Việc làm Freelancer theo dự án
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={styles.item_menu}>
                  <Link href="/ung-vien-freelancer.html">Danh sách Freelancer</Link>
                </li>
                <li className={styles.item_menu}>
                  <a href="">Kinh nghiệm</a>
                </li>
                <li className={styles.item_menu}>
                  <Link href="/huong-dan.html">Hướng dẫn</Link>
                </li>
              </ul>
            </div>
            <button className={styles.btn_dang_viec}>
              <Link href="/dang-du-an.html"> + Đăng việc</Link>
            </button>
            <div className={styles.icon_notifi}>
              <img
                className={styles.img_hd}
                src="/icon_notifi.png"
                alt="icon_notifi"
              />
            </div>
            <div className={styles.border} />
            <Popover content={content} trigger="click" placement="bottomRight">
              <div className={styles.img_avata}>
                <img
                  className={styles.img_hd}
                  width="35px"
                  height="35px"
                  src="/job-1695950247.png"
                  alt="avatar"
                />
              </div>
            </Popover>
          </div>
        </div>
        <div className={`${styles.block_mobi} ${styles.mobi}`}>
          <div
            className={styles.cover_menu_mobi}
            onClick={() => {
              setIsOpen(!isOpen);
              console.log("HIHI");
            }}
          >
            <img src="/menu_mobi.png" alt="menu_mobi" className="" />
          </div>
          <div className={styles.cover_logo_mobi}>
            <Link
              href="/"
              className={`${styles.d_block} ${styles.logo_home_mobi}`}
            >
              <img src="/logo_mobi.png" alt="logo_mobi" className="" />
            </Link>
          </div>
          <div className={styles.cover_notifi_mobi}>
            <img src="/icon_notifi_mobi.png" alt="icon_notifi_mobi" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin;
