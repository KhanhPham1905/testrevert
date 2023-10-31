import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
const index = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={`${styles.container} ${styles.relative_banner}`}>
          <div className={styles.cover_content_banner_both}>
            <div className={styles.content_banner}>
              <Link href="/">
                <span>Trang chủ / </span>
              </Link>
              <span>HfjNUlYZ</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cover_container}>
        <div
          className={`${styles.container} ${styles.main_container} ${styles.padding_style}`}
        >
          <div className={styles.cover_job_detail}>
            <div className={styles.job_detail_top}>
              <div className={styles.left_detail_top}>
                <img
                  src="/avt_2.png"
                  data-src="../images/avt_2.png"
                  alt="user-ic"
                  className={`${styles.img_user} ${styles.lazyloaded}`}
                />
                <div className={styles.cover_text_job_dt}>
                  <h1 className={`${styles.title_job_dt} ${styles.text_capi}`}>
                    HfjNUlYZ
                  </h1>
                  <span className={styles.text_p_info_job}>IT &amp; Lập trình</span>
                  <p></p>
                  <img
                    src="/ic_01.png"
                    data-src="../images/ic_01.png"
                    alt="dia-diem"
                    className={`${styles.ic_01} ${styles.lazyloaded}`}
                  />
                  <p className={styles.location_job_dt}>Hà Nội, Hà Nội</p>
                </div>
              </div>

              <div className={styles.right_detail_top}>
                <span className={`${styles.lien_he} ${styles.xem_lien_he}`}>
                  Liên hệ
                </span>
                <button
                  data-save="12345"
                  className={`${styles.luu_ct} ${styles.un_save_flc}`}
                  fdprocessedid="v3a6ii"
                >
                  <img
                    src="/ic_02.png"
                    data-src="../images/ic_02.png"
                    alt="save-ic"
                    className={`${styles.ic_02} ${styles.lazyloaded}`}
                  />
                  Đã lưu ứng viên
                </button>
              </div>
            </div>

            <div className={styles.job_detail_bottom}>
              <div className={styles.left_job_bottom}>
                <div className={styles.it_left_jb_bt}>
                  <h2 className={styles.p_it_right}>Giới thiệu bản thân</h2>

                  <p className={styles.text_p_info}>555</p>
                </div>

                <div className={styles.it_left_jb_bt}>
                  <h2 className={styles.p_it_right}>Kỹ năng</h2>
                  <div className={styles.tag_skill}></div>
                </div>

                <div className={styles.it_left_jb_bt}>
                  <h2 className={styles.p_it_right}>Hồ sơ năng lực</h2>
                  <div className={styles.cover_img_file}>
                    <div className={styles.cover_file_left}></div>
                  </div>
                  <div className={styles.tag_skill}>
                    <p className={styles.it_skill}>
                      <img
                        src="/ic_03.png"
                        data-src="../images/ic_03.png"
                        alt="file-ic"
                        className={`${styles.ic_03} ${styles.lazyloaded}`}
                      />
                      <a
                        href="../files/2023/07/17/file_1689536903.txt"
                        download="../files/2023/07/17/file_1689536903.txt"
                      >
                        <span>1</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.right_job_bottom}>
                <div className={styles.it_right_job_bt}>
                  <h2 className={styles.p_it_right_bt}>Thông tin cơ bản</h2>

                  <ul className={styles.cover_list_job_bt}>
                    <li className={styles.it_jb_bt}>
                      <img
                        src="/ic_04.png"
                        data-src="../images/ic_04.png"
                        alt="sex-ic"
                        className={`${styles.ic_04} ${styles.lazyloaded}`}
                      />
                      <p className={styles.text_it_jb_left}>Giới tính</p>
                      <p className={styles.text_it_jb_right}>Khác</p>
                    </li>

                    <li className={styles.it_jb_bt}>
                      <img
                        src="/ic_05.png"
                        data-src="../images/ic_05.png"
                        alt="birth-ic"
                        className={`${styles.ic_04} ${styles.lazyloaded}`}
                      />
                      <p className={styles.text_it_jb_left}>Ngày sinh</p>
                      <p className={styles.text_it_jb_right}>01-01-1967</p>
                    </li>

                    <li className={styles.it_jb_bt}>
                      <img
                        src="/ic_06.png"
                        data-src="../images/ic_06.png"
                        alt="file-ic"
                        className={`${styles.ic_04} ${styles.lazyloaded}`}
                      />
                      <p className={styles.text_it_jb_left}>Email</p>
                      <span
                        className={`${styles.d_block} ${styles.text_it_jb_right} ${styles.xem_lien_he}`}
                      >
                        Xem liên hệ
                      </span>
                    </li>

                    <li className={styles.it_jb_bt}>
                      <img
                        src="/ic_07.png"
                        data-src="../images/ic_07.png"
                        alt="phone-ic"
                        className={`${styles.ic_04} ${styles.lazyloaded}`}
                      />
                      <p className={styles.text_it_jb_left}>Số điện thoại</p>
                      <span
                        className={`${styles.d_block} ${styles.text_it_jb_right} ${styles.xem_lien_he}`}
                      >
                        Xem liên hệ
                      </span>
                    </li>

                    <li className={styles.it_jb_bt}>
                      <img
                        src="/ic_08.png"
                        data-src="../images/ic_08.png"
                        alt="job-ic"
                        className={`${styles.ic_04} ${styles.lazyloaded}`}
                      />
                      <p className={styles.text_it_jb_left}>Ngành nghề</p>
                      <span
                        className={styles.text_it_jb_right}
                        style={{ paddingRight: "7px" }}
                      >
                        {" "}
                        IT &amp; Lập trình
                      </span>
                    </li>

                    <li className={styles.it_jb_bt}>
                      <img
                        src="/ic_09.png"
                        data-src="../images/ic_09.png"
                        alt="dia-chi-ic"
                        className={`${styles.ic_04} ${styles.lazyloaded}`}
                      />
                      <p className={styles.text_it_jb_left}>Địa chỉ</p>
                      <p className={styles.text_it_jb_right}>Hà Nội, Hà Nội</p>
                    </li>
                  </ul>
                </div>

                <div className={styles.it_right_job_bt}>
                  <h2 className={styles.p_it_right_bt}>Đánh giá freelancer</h2>

                  <ul className={`${styles.cover_list_job_bt} ${styles.bg_FAFDFF}`}>
                    <li className={styles.it_jb_bt}>
                      <p className={styles.text_it_jb_left}>Đánh giá</p>
                      <div className={styles.cover_star}>
                        <div className={styles.pos_re}>
                          <div style={{ width: "72%", margin: "auto" }}>
                            <div
                              className={styles.yellow_star}
                              style={{ width: "0%", height: "23.99px" }}
                            ></div>
                            <div className={styles.ratting_star_1}></div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className={styles.it_jb_bt}>
                      <p className={styles.text_it_jb_left}>
                        Trung bình sao đánh giá
                      </p>
                      <p className={styles.text_it_jb_right}>0</p>
                    </li>

                    <li className={styles.it_jb_bt}>
                      <p className={styles.text_it_jb_left}>
                        Số công việc đã hoàn thành
                      </p>
                      <p className={styles.text_it_jb_right}>0 </p>
                    </li>

                    <li className={`${styles.it_jb_bt} ${styles.chart}`}>
                      <div id="circle" className={styles.circleH}>
                        <div className={styles.text_chart} id="data_cv" data-tb="0">
                          0%
                        </div>
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 100 100"
                          id="svg-circle"
                          preserveAspectRatio="xMinYMin meet"
                          className={styles.circle_container}
                        >
                          <circle
                            id="circle-circle"
                            className={styles.background_circle}
                            cx="50"
                            cy="50"
                            r="45.45454545454545"
                            stroke-width="10"
                          ></circle>
                          <path
                            id="arc-circle"
                            className={styles.foreground_circle}
                            d="M 52.8541145240597 4.63514870780584 A 45.45454545454545 45.45454545454545 0 0 0 50 4.545454545454547 "
                            stroke-width="10"
                            stroke-linecap="butt"
                          ></path>
                          <text
                            text-anchor="middle"
                            id="text-circle"
                            x="50"
                            y="50"
                            className={styles.circle_text}
                          >
                            0%
                          </text>
                        </svg>
                      </div>
                      <p className={styles.p_chart}>Hoàn thành công việc</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
