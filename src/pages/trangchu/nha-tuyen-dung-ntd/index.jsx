import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
const index = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={`${styles.container} ${styles.relative_banner}`}>
          <div className={styles.cover_content_banner_both}>
            <div className={styles.content_banner}>
              <Link href="/">
                <span>Trang chủ / </span>
              </Link>
              <span>Nguyen The Anh</span>
            </div>
          </div>
        </div>
      </div>
      {/* // */}
      <div className={styles.cover_container}>
        <div
          className={`${styles.container} ${styles.main_container} ${styles.padding_style}`}
        >
          <div className={styles.cover_job_detail}>
            <div className={styles.job_detail_top}>
              <div className={`${styles.left_detail_top} ${styles.w_100}`}>
                <img
                  src="/job-1695950247.png"
                  data-src="../thumb/2023/09/29//job-1695950247.png"
                  alt="logo_job_detail"
                  className={`${styles.logo_job_detail} ${styles.lazyloaded}`}
                />
                <div className={styles.cover_text_job_dt}>
                  <h1 className={styles.title_job_dt}>Nguyen The Anh</h1>

                  <div className={`${styles.info_ntd} ${styles.f_left}`}>
                    <img
                      src="/ic_01.png"
                      data-src="../images/ic_01.png"
                      alt="ngay-dang"
                      className={`${styles.ic_01} ${styles.lazyloaded}`}
                    />
                    <p className={styles.location_job_dt}>
                      Quận Hoàng Mai , Hà Nội
                    </p>
                  </div>

                  <div className={`${styles.info_ntd} ${styles.f_left}`}>
                    <img
                      src="/ic_12.png"
                      data-src="../images/ic_12.png"
                      alt="ic_01"
                      className={`${styles.ic_01} ${styles.lazyloaded}`}
                    />
                    <p className={styles.location_job_dt}>0981632302</p>
                  </div>

                  <div className={`${styles.info_ntd} ${styles.f_left}`}>
                    <img
                      src="/ic_13.png"
                      data-src="../images/ic_13.png"
                      className={`${styles.ic_01} ${styles.lazyloaded}`}
                    />
                    <p className={styles.location_job_dt}>
                      theanh28022003@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.job_detail_bottom}>
              <h2 style={{fontSize: '14px',lineHeight: '1.6'}}>4 Tin đã đăng</h2>
              <ul className={styles.cover_post}>
                <li className={styles.it_post}>
                  <div className={styles.cover_logo_td}>
                    <a href="/hehe-3-vl110566.html">
                      <img
                        src="/job-1697213220.jpg"
                        data-src="../thumb/2023/10/13/job-1697213220.jpg"
                        onerror='this.onerror=null;this.src="../images/logo.png";'
                        alt="job_logo"
                        className={`${styles.logo_td} ${styles.lazyloaded}`}
                      />
                    </a>
                  </div>

                  <div className={styles.cover_it_post}>
                    <div className={styles.cover_content_td}>
                      <a href="/hehe-3-vl110566.html">
                        <h3 className={styles.title_td}>hehe 3</h3>
                      </a>
                      <p className={styles.time_td}>Dự án</p>
                      <p className={styles.hr_td}>Người đăng: Nguyen The Anh</p>
                      <img
                        src="/ic_10.png"
                        alt="nguoi-dang"
                        className={styles.ic_10}
                      />
                      <p className={styles.text_01}>IT &amp; Lập trình</p>
                      <img
                        src="/ic_11.png"
                        alt="cong-viec"
                        className={styles.ic_10}
                      />
                      <p className={styles.text_01}>Hết hạn: 29-10-2023</p>
                      <p></p>
                      <img
                        src="/ic_free_02.png"
                        alt="dia-diem"
                        className={styles.ic_location_td}
                      />
                      <p className={styles.text_01}>Bắc Giang</p>
                      <p className={styles.text_content_it01}>
                        <span>1 lượt đặt giá</span>
                      </p>
                      <div className={styles.tag_nganh_nghe}>
                        <a href=" /tim-viec-lam-freelancer-ios-tg18.html ">
                          <p className={styles.it_tag_nganh_nghe}>IOS</p>
                        </a>
                      </div>
                    </div>

                    <div className={styles.cover_btn_td}>
                      <span className={styles.btn_td01}>
                        1.000 VNĐ - 10.000.000 VNĐ
                      </span>
                      <span
                        className={`${styles.btn_td02} ${styles.btn_login_uv_s}`}
                        style={{ cursor: 'pointer' }}
                      >
                        Lưu tin
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
