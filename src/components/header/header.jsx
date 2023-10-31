import { useState } from "react";
import styles from "./index.module.css";
import { Dropdown, Popover, Space } from "antd";
import Link from "next/link";
import ChooseLogin from "@/components/login/chooseLogin";
export default function Header({
  isHasRole,
  setIsHasRole,
  openKeys,
  setOpenKeys,
  isAccess,
  setIsAccess,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStatus, setIsStatus] = useState(false);
  const setStatus = (callback, state) => {
    callback(!state);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
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
    <div className={`${styles.header_freelancer}`}>
      <div className={`${styles.container} ${styles.cover_header_freelancer}`}>
        <div className={`${styles.block_pc}`}>
          <div className={`${styles.logo_365}`}>
            <Link href="/" className={`${styles.cover_logo_365}`}>
              <img
                className={styles.img}
                src="/logo_mobi.png"
                alt="logo timviec365.vn"
              />
            </Link>
          </div>
          <div className={`${styles.header_freelancer_right}`}>
            <ul className={`${styles.item_header}`}>
              <li className={`${styles.it_header} ${styles.it_header_list}`}>
                <Link
                  href="/tim-viec-lam-freelancer.html"
                  className={`${styles.text_it_header}`}
                >
                  <span className={`${styles.inline_block}`}>
                    Việc làm Freelancer mới nhất
                  </span>{" "}
                  <img
                    src="/ic_down.png"
                    data-src="/ic_down.png"
                    alt="ic_down"
                    className={`${styles.ic_down} ${styles.inline_block} ${styles.lazyloaded}`}
                  />{" "}
                </Link>
                <ul className={`${styles.list_vieclam}`}>
                  <li className={`${styles.it_vieclam}`}>
                    <Link href="/tim-viec-lam-freelancer-ban-thoi-gian.html">
                      Việc làm freelancer bán thời gian
                    </Link>
                  </li>
                  <li className={`${styles.it_vieclam}`}>
                    <Link href="/tim-viec-lam-freelancer-theo-du-an.html">
                      Việc làm freelancer theo dự án
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`${styles.it_header}`}>
                <Link
                  href="/ung-vien-freelancer.html"
                  className={`${styles.text_it_header}`}
                >
                  Danh sách Freelancer
                </Link>
              </li>
              <li className={`${styles.it_header}`}>
                <a href="" className={`${styles.text_it_header}`}>
                  Kinh nghiệm
                </a>
              </li>
              <li className={`${styles.it_header}`}>
                <Link
                  href="/huong-dan.html"
                  className={`${styles.text_it_header}`}
                >
                  Hướng dẫn
                </Link>
              </li>
              <li className={`${styles.it_header}`}>
                <span className={`${styles.cover_log_home}`}>
                  <Link
                    href="/dang-du-an.html"
                    className={`${styles.a_dang_ki}`}
                  >
                    <img
                      src="/ic_dang_tin.png"
                      data-src="/ic_dang_tin.png"
                      alt="ic_dang_tin"
                      className={`${styles.ic_dang_tin} ${styles.lazyloaded}`}
                    />
                    <span className={`${styles.inline_block}`}>Đăng việc</span>
                  </Link>
                </span>
              </li>
              {isAccess ? (
                <li className={`${styles.it_header}`}>
                  <Popover
                    content={content}
                    trigger="click"
                    placement="bottomRight"
                  >
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
                </li>
              ) : (
                <li className={styles.it_header}>
                  <span
                    className={`${styles.cover_log_home} ${styles.freelancer_log_home}`}
                  >
                    <span
                      className={styles.btn_login_freelancer}
                      onClick={showModal}
                    >
                      Đăng nhập /{" "}
                    </span>
                    <Link
                      href="/dang-ky-freelancer.html"
                      className={styles.a_dang_ki}
                    >
                      Đăng ký
                    </Link>
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className={`${styles.block_mobi} ${styles.mobi}`}>
          <div
            className={styles.cover_menu_home_mobi}
            data-toggle="modal"
            data-target="#menu_mobile"
            onClick={() => {
              setStatus(setIsStatus, isStatus);
            }}
          >
            <p className={`${styles.d_block} ${styles.menu_home_mobi}`}>
              <img
                style={{ width: "100%" }}
                src="/menu_mobi.png"
                data-src="/menu_mobi.png"
                alt="menu-ic"
                className={`lazyloaded ${styles.lazyloaded}`}
              />
            </p>
          </div>
          <div className={styles.cover_logo_home_mobi}>
            <a
              href="/"
              className={`${styles.d_block} ${styles.logo_home_mobi}`}
            >
              <img
                style={{ width: "100%" }}
                src="/logo_mobi.png"
                data-src="/logo_mobi.png"
                alt="logo-ic"
                className={`lazyloaded ${styles.lazyloaded}`}
              />
            </a>
          </div>
          <div
            className={`${styles.cover_img_ntd} ${styles.cover_avt_home_mobi} ${styles.invisible}`}
          >
            <img
              width={30}
              height={30}
              className={`${styles.img_ntd} ${styles.lazyloaded}`}
              alt="avatar"
            />
          </div>
          {isStatus ? (
            <ul
              className={`${styles.item_header} ${styles["menu-mobi"]}`}
            >
              <li className={styles.it_header}>
                <a
                  href="/tim-viec-lam-freelancer.html"
                  className={`${styles.text_it_header} ${styles.header_hover}`}
                >
                  Việc Freelancer
                </a>
              </li>
              <li className={styles.it_header}>
                <a
                  href="/tim-viec-lam-freelancer-theo-du-an.html"
                  className={`${styles.text_it_header} ${styles.header_hover}`}
                >
                  Việc làm freelancer theo dự án
                </a>
              </li>
              <li className={styles.it_header}>
                <a
                  href="/tim-viec-lam-freelancer-ban-thoi-gian.html"
                  className={`${styles.text_it_header} ${styles.header_hover}`}
                >
                  Việc làm freelancer bán thời gian
                </a>
              </li>
              <li className={styles.it_header}>
                <a
                  href="/ung-vien-freelancer.html"
                  className={`${styles.text_it_header} ${styles.header_hover}`}
                >
                  Danh sách Freelancer
                </a>
              </li>
              <li className={styles.it_header}>
                <a
                  href=""
                  className={`${styles.text_it_header} ${styles.header_hover}`}
                >
                  Kinh nghiệm
                </a>
              </li>
              <li className={styles.it_header}>
                <a
                  href="/huong-dan.html"
                  className={`${styles.text_it_header} ${styles.header_hover}`}
                >
                  Hướng dẫn
                </a>
              </li>
              <li className={styles.it_header}>
                <span className={styles.cover_log_home}>
                  <a href="/dang-du-an.html" className={styles.a_dang_ki}>
                    <span className={styles.inline_block}>Đăng tin</span>
                  </a>
                </span>
              </li>
              <li className={styles.it_header}>
                <span className={styles.cover_log_home}>
                  <span className={styles.btn_login_freelancer}>
                    Đăng nhập /{" "}
                  </span>
                  <a
                    href="/dang-ki-freelancer.html"
                    className={styles.a_dang_ki}
                  >
                    Đăng ký
                  </a>
                </span>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
      <ChooseLogin isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
