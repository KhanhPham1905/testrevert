import { Button, Collapse, Dropdown, Modal, Space } from "antd";
import styles from "./index.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useOpenNavBarComponent } from "../../components/context/openNavbarContext";

const NavBarCT = () => {
  const router = useRouter();
  const [event, setEvent] = useState(false);
  const [event1, setEvent1] = useState(false);
  const [event2, setEvent2] = useState(false);
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
        <div className={styles.left_container1}>
          <div className={`${styles.user_menu} ${styles.block_mobi}`}>
            <img
              width="48px"
              height="48px"
              src="../thumb/2023/09/29//job-1695950247.png"
              className=""
              alt="avatar"
            />
            <p>Nguyen The Anh</p>
          </div>
          <div className={styles.p_left_container}>
            <p>Số điểm còn lại: 5</p>
          </div>
          <ul className={styles.menu_left_container}>
            <li className={`${styles.item_menu_left}`}>
              <p
                className={`${styles.a_item_menu} ${styles.ic_menu_ntd01} ${styles.active}`}
                onClick={() => router.push("/cong-ty/quan-ly-chung")}
              >
                Quản lý chung
              </p>
            </li>
            <li className={`${styles.item_menu_left}`}>
              <p
                className={`${styles.a_item_menu} ${styles.ic_menu_ntd02}`}
                onClick={(e) => {
                  setStausNavBar(setEvent1, event1);
                }}
              >
                Tuyển dụng freelancer
              </p>
              {event1 ? (
                <>
                  <ul
                    className={`${styles.sub_menu_left} ${styles.sub_ic_menu_ntd02}`}
                  >
                    <li className={`${styles.bam}`} data-bam="bam_du_an">
                      <Link
                        href="/cong-ty/tuyen-dung-freelancer/dang-viec-theo-du-an"
                        className={`${styles.it_sub_menu_left}`}
                        onClick={() =>
                          router.push(
                            "/cong-ty/tuyen-dung-freelancer/dang-viec-theo-du-an"
                          )
                        }
                      >
                        Đăng việc theo dự án
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cong-ty/tuyen-dung-freelancer/dang-viec-ban-thoi-gian"
                        className={`${styles.it_sub_menu_left}`}
                      >
                        Đăng việc bán thời gian
                      </Link>
                    </li>
                  </ul>
                </>
              ) : null}
            </li>
            <li className={`${styles.item_menu_left}`}>
              <Link
                href="/cong-ty/tin-da-dang"
                className={`${styles.a_item_menu} ${styles.ic_menu_ntd03}`}
                onClick={() => router.push("/cong-ty/tin-da-dang")}
              >
                Tin đã đăng
              </Link>
            </li>
            <li className={`${styles.item_menu_left}`}>
              <Link
                href="/trangchu/ung-vien-freelancer"
                className={`${styles.a_item_menu} ${styles.ic_menu_ntd04}`}
              >
                Tìm kiếm Freelancer
              </Link>
            </li>
            <li className={`${styles.item_menu_left}`}>
              <p
                className={`${styles.a_item_menu} ${styles.ic_menu_ntd05}`}
                onClick={(e) => {
                  setStausNavBar(setEvent, event);
                }}
              >
                Quản lý hồ sơ
              </p>
              {event ? (
                <>
                  <ul
                    className={`${styles.sub_menu_left} ${styles.sub_ic_menu_ntd05}`}
                  >
                    <li>
                      <Link
                        href="/cong-ty/quan-ly-ho-so/freelancer-dat-gia"
                        className={`${styles.it_sub_menu_left}`}
                      >
                        Freelancer đặt giá
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cong-ty/quan-ly-ho-so/freelancer-dang-lam-viec"
                        className={`${styles.it_sub_menu_left}`}
                      >
                        Freelancer đang làm việc
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cong-ty/quan-ly-ho-so/freelancer-da-luu"
                        className={`${styles.it_sub_menu_left}`}
                      >
                        Freelancer đã lưu
                      </Link>
                    </li>
                  </ul>
                </>
              ) : null}
            </li>
            <li className={`${styles.item_menu_left}`}>
              <p
                className={`${styles.a_item_menu} ${styles.ic_menu_ntd06}`}
                onClick={(e) => {
                  setStausNavBar(setEvent2, event2);
                }}
              >
                Quản lý tài khoản
              </p>
              {event2 ? (
                <>
                  <ul
                    className={`${styles.sub_menu_left} ${styles.sub_ic_menu_ntd06}`}
                  >
                    <li>
                      <Link
                        href="/cong-ty/quan-ly-tai-khoan/cap-nhat-thong-tin"
                        className={`${styles.it_sub_menu_left}`}
                      >
                        Cập nhật thông tin
                      </Link>
                    </li>
                    <li>
                      <p
                        className={`${styles.it_sub_menu_left} logout_click`}
                        onClick={showModal}
                      >
                        Đăng xuất
                      </p>
                    </li>
                  </ul>
                </>
              ) : null}
            </li>
          </ul>
        </div>
      ) : null}
      <div className={styles.left_container}>
        <div className={`${styles.user_menu} ${styles.block_mobi}`}>
          <img
            width="48px"
            height="48px"
            src="../thumb/2023/09/29//job-1695950247.png"
            className=""
            alt="avatar"
          />
          <p>Nguyen The Anh</p>
        </div>
        <div className={styles.p_left_container}>
          <p>Số điểm còn lại: 5</p>
        </div>
        <ul className={styles.menu_left_container}>
          <li className={`${styles.item_menu_left}`}>
            <p
              className={`${styles.a_item_menu} ${styles.ic_menu_ntd01} ${styles.active}`}
              onClick={() => router.push("/cong-ty/quan-ly-chung")}
            >
              Quản lý chung
            </p>
          </li>
          <li className={`${styles.item_menu_left}`}>
            <p
              className={`${styles.a_item_menu} ${styles.ic_menu_ntd02}`}
              onClick={(e) => {
                setStausNavBar(setEvent1, event1);
              }}
            >
              Tuyển dụng freelancer
            </p>
            {event1 ? (
              <>
                <ul
                  className={`${styles.sub_menu_left} ${styles.sub_ic_menu_ntd02}`}
                >
                  <li className={`${styles.bam}`} data-bam="bam_du_an">
                    <Link
                      href="/cong-ty/tuyen-dung-freelancer/dang-viec-theo-du-an"
                      className={`${styles.it_sub_menu_left}`}
                      onClick={() =>
                        router.push(
                          "/cong-ty/tuyen-dung-freelancer/dang-viec-theo-du-an"
                        )
                      }
                    >
                      Đăng việc theo dự án
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cong-ty/tuyen-dung-freelancer/dang-viec-ban-thoi-gian"
                      className={`${styles.it_sub_menu_left}`}
                    >
                      Đăng việc bán thời gian
                    </Link>
                  </li>
                </ul>
              </>
            ) : null}
          </li>
          <li className={`${styles.item_menu_left}`}>
            <Link
              href="/cong-ty/tin-da-dang"
              className={`${styles.a_item_menu} ${styles.ic_menu_ntd03}`}
              onClick={() => router.push("/cong-ty/tin-da-dang")}
            >
              Tin đã đăng
            </Link>
          </li>
          <li className={`${styles.item_menu_left}`}>
            <Link
              href="/trangchu/ung-vien-freelancer"
              className={`${styles.a_item_menu} ${styles.ic_menu_ntd04}`}
            >
              Tìm kiếm Freelancer
            </Link>
          </li>
          <li className={`${styles.item_menu_left}`}>
            <p
              className={`${styles.a_item_menu} ${styles.ic_menu_ntd05}`}
              onClick={(e) => {
                setStausNavBar(setEvent, event);
              }}
            >
              Quản lý hồ sơ
            </p>
            {event ? (
              <>
                <ul
                  className={`${styles.sub_menu_left} ${styles.sub_ic_menu_ntd05}`}
                >
                  <li>
                    <Link
                      href="/cong-ty/quan-ly-ho-so/freelancer-dat-gia"
                      className={`${styles.it_sub_menu_left}`}
                    >
                      Freelancer đặt giá
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cong-ty/quan-ly-ho-so/freelancer-dang-lam-viec"
                      className={`${styles.it_sub_menu_left}`}
                    >
                      Freelancer đang làm việc
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cong-ty/quan-ly-ho-so/freelancer-da-luu"
                      className={`${styles.it_sub_menu_left}`}
                    >
                      Freelancer đã lưu
                    </Link>
                  </li>
                </ul>
              </>
            ) : null}
          </li>
          <li className={`${styles.item_menu_left}`}>
            <p
              className={`${styles.a_item_menu} ${styles.ic_menu_ntd06}`}
              onClick={(e) => {
                setStausNavBar(setEvent2, event2);
              }}
            >
              Quản lý tài khoản
            </p>
            {event2 ? (
              <>
                <ul
                  className={`${styles.sub_menu_left} ${styles.sub_ic_menu_ntd06}`}
                >
                  <li>
                    <Link
                      href="/cong-ty/quan-ly-tai-khoan/cap-nhat-thong-tin"
                      className={`${styles.it_sub_menu_left}`}
                    >
                      Cập nhật thông tin
                    </Link>
                  </li>
                  <li>
                    <p
                      className={`${styles.it_sub_menu_left} logout_click`}
                      onClick={showModal}
                    >
                      Đăng xuất
                    </p>
                  </li>
                </ul>
              </>
            ) : null}
          </li>
        </ul>
      </div>
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
  );
};

export default NavBarCT;