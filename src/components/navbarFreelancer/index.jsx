import { useState } from "react";
import styles from "./index.module.css";
import { Button, Modal } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import { useOpenNavBarComponent } from "../../components/context/openNavbarContext";

const NavBarFLC = () => {
  const [event, setEvent] = useState(false);
  const setStausNavBar = (callback, state) => {
    callback(!state);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, setIsOpen } = useOpenNavBarComponent();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log("isOpen--------", isOpen);

  return (
    <div>
      {isOpen ? (
        <div className={`${styles.left_container1} ${styles.block_pc}`}>
          <div className={`${styles.user_menu} ${styles.block_mobi}`}>
            {/* <div className="main_user"> */}
            <img
              width="48px"
              height="48px"
              src="../thumb/2023/10/02/job-1696232048.png"
              onerror='this.onerror=null;this.src="/images/img_uv_2.png";'
              className=""
              alt="avatar"
            />
            <p>Khanh</p>
            {/* </div> */}
          </div>
          <div className={`${styles.p_left_container}`}></div>
          <div className={`${styles.refresh}`}>
            <p className={`${styles.p_refresh}`}>
              <span>Làm mới hồ sơ</span>
            </p>
          </div>
          <div className={`${styles.isset_search}`}>
            <p>Cho phép NTD tìm kiếm</p>
            <label className={`${styles.switch}`}>
              <input type="checkbox" defaultChecked="" />
              <span
                className={`${styles.slider} ${styles.checkbox_toggle_swich}`}
              />
            </label>
          </div>
          <ul className={`${styles.menu_left_container}`}>
            <li className={`${styles.item_menu_left}`}>
              <p
                className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv01a}`}
                onClick={(e) => {
                  setStausNavBar(setEvent, event);
                }}
              >
                Quản lý chung
              </p>
              {/* hoàn thiện hồ sơ */}
              {/* tất cả việc làm */}
              {event ? (
                <ul
                  className={`${styles.sub_menu_left} ${styles.sub_ic_menu_uv01a}`}
                >
                  <li>
                    <Link
                      href="/freelancer/quan-ly-chung/hoan-thien-ho-so"
                      className={`${styles.it_sub_menu_left} ${styles.bg_gray}`}
                    >
                      Hoàn thiện hồ sơ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/trangchu/tim-viec-lam-freelancer"
                      className={`${styles.it_sub_menu_left}`}
                    >
                      Tất cả việc làm
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>
            <li className={`${styles.item_menu_left}`}>
              <Link
                href="/freelancer/du-an-dang-thuc-hien"
                className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv01b} `}
              >
                Dự án đang thực hiện
              </Link>
            </li>
            <li className={`${styles.item_menu_left}`}>
              <Link
                href="/freelancer/du-an-da-luu"
                className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv01}`}
              >
                Dự án đã lưu
              </Link>
            </li>
            <li className={`${styles.item_menu_left}`}>
              <a
                href=""
                className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv02}`}
              >
                Kinh nghiệm Freelancer
              </a>
            </li>
            <li className={`${styles.item_menu_left}`}>
              <Link
                href="/freelancer/doi-mat-khau"
                className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv03}`}
              >
                Đổi mật khẩu
              </Link>
            </li>
            <li className={`${styles.item_menu_left}`}>
              <p
                className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv04} ${styles.logout_click}`}
                onClick={showModal}
              >
                Đăng xuất
              </p>
            </li>
          </ul>
        </div>
      ) : null}
      <div className={`${styles.left_container} ${styles.block_pc}`}>
        <div className={`${styles.user_menu} ${styles.block_mobi}`}>
          {/* <div className="main_user"> */}
          <img
            width="48px"
            height="48px"
            src="../thumb/2023/10/02/job-1696232048.png"
            onerror='this.onerror=null;this.src="/images/img_uv_2.png";'
            className=""
            alt="avatar"
          />
          <p>Khanh</p>
          {/* </div> */}
        </div>
        <div className={`${styles.p_left_container}`}></div>
        <div className={`${styles.refresh}`}>
          <p className={`${styles.p_refresh}`}>
            <span>Làm mới hồ sơ</span>
          </p>
        </div>
        <div className={`${styles.isset_search}`}>
          <p>Cho phép NTD tìm kiếm</p>
          <label className={`${styles.switch}`}>
            <input type="checkbox" defaultChecked="" />
            <span
              className={`${styles.slider} ${styles.checkbox_toggle_swich}`}
            />
          </label>
        </div>
        <ul className={`${styles.menu_left_container}`}>
          <li className={`${styles.item_menu_left}`}>
            <p
              className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv01a}`}
              onClick={(e) => {
                setStausNavBar(setEvent, event);
              }}
            >
              Quản lý chung
            </p>
            {/* hoàn thiện hồ sơ */}
            {/* tất cả việc làm */}
            {event ? (
              <ul
                className={`${styles.sub_menu_left} ${styles.sub_ic_menu_uv01a}`}
              >
                <li>
                  <Link
                    href="/freelancer/quan-ly-chung/hoan-thien-ho-so"
                    className={`${styles.it_sub_menu_left} ${styles.bg_gray}`}
                  >
                    Hoàn thiện hồ sơ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trangchu/tim-viec-lam-freelancer"
                    className={`${styles.it_sub_menu_left}`}
                  >
                    Tất cả việc làm
                  </Link>
                </li>
              </ul>
            ) : null}
          </li>
          <li className={`${styles.item_menu_left}`}>
            <Link
              href="/freelancer/du-an-dang-thuc-hien"
              className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv01b} `}
            >
              Dự án đang thực hiện
            </Link>
          </li>
          <li className={`${styles.item_menu_left}`}>
            <Link
              href="/freelancer/du-an-da-luu"
              className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv01}`}
            >
              Dự án đã lưu
            </Link>
          </li>
          <li className={`${styles.item_menu_left}`}>
            <a
              href=""
              className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv02}`}
            >
              Kinh nghiệm Freelancer
            </a>
          </li>
          <li className={`${styles.item_menu_left}`}>
            <Link
              href="/freelancer/doi-mat-khau"
              className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv03}`}
            >
              Đổi mật khẩu
            </Link>
          </li>
          <li className={`${styles.item_menu_left}`}>
            <p
              className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv04} ${styles.logout_click}`}
              onClick={showModal}
            >
              Đăng xuất
            </p>
          </li>
        </ul>
        <Modal
          className={styles.modalLogout}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Hủy bỏ
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
              Đồng ý
            </Button>,
          ]}
        >
          <div className={`${styles.popup_logout} ${styles.main_popup}`}>
            <p className={`${styles.title_logout}`}>Đăng xuất</p>
            <p className={`${styles.content_logout}`}>
              Bạn muốn đăng xuất khỏi hệ thống ?
            </p>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default NavBarFLC;
