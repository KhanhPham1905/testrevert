import styles from "./index.module.css";
import Link from "next/link";
const ChiTiet = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={`${styles.container} ${styles.relative_banner}`}>
          <div className={styles.cover_content_banner_both}>
            <div className={styles.content_banner}>
              <Link href="/">
                <span>Trang chủ / </span>
              </Link>
              <span>thiết kế web2</span>
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
                  src="/job-1697186172.jpg"
                  data-src="/job-1697186172.jpg"
                  onerror='this.onerror=null;this.src="/logo.png";'
                  alt="company_logo"
                  className={`${styles.logo_job_detail} ${styles.lazyloaded}`}
                />
                <div className={styles.cover_text_job_dt}>
                  <h1 className={styles.title_job_dt}>thiết kế web2</h1>
                  <p className={`${styles.text_p_info_job} ${styles.top - 7}`}>
                    <span>ID dự án: 110565</span> |
                    <span>Ngày đăng: 13-10-2023</span>
                  </p>
                  <p className={`${styles.location_job_dt} ${styles.top - 7}`}>
                    <img
                      src="/ic_user_detail.png"
                      alt="ic_user_detail"
                      className={styles.ic_01}
                    />
                    Người đăng:
                    <a
                      className={`${styles.location_job_dt}`}
                      href="/nha-tuyen-dung-:name-ntd:id.html"
                    >
                      Nguyen The Anh
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.right_detail_top}>
                <p className={styles.lien_he}>900.000 VNĐ </p>
                <p
                  className={`${styles.luu_ct} ${styles.save_job}`}
                  data-job={110565}
                  data-id-flc={116606}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src="/ic_02.png"
                    alt="save-ic"
                    className={styles.ic_02}
                  />{" "}
                  Lưu chi tiết
                </p>
              </div>
            </div>
            <div className={styles.job_detail_bottom}>
              <div className={styles.left_job_bottom}>
                <div className={styles.it_left_jb_bt}>
                  <h2 className={styles.p_it_right}>Mô tả công việc</h2>
                  <p className={styles.text_p_info}>okkkkkkkkkkkkkkkk</p>
                </div>
                <div className={styles.it_left_jb_bt}>
                  <h2 className={styles.p_it_right}>Lĩnh vực</h2>
                  <div className={styles.tag_skill}>
                    <a href="tim-viec-lam-freelancer-it-lap-trinh-nn1.html">
                      <p className={styles.it_skill}>
                        <span>IT &amp; Lập trình</span>
                      </p>
                    </a>
                  </div>
                </div>
                <div className={styles.it_left_jb_bt}>
                  <h2 className={styles.p_it_right}>Kỹ năng</h2>
                  <div className={styles.tag_skill}>
                    <a href="tim-viec-lam-freelancer-html-tg4.html">
                      <p className={styles.it_skill}>
                        <span>HTML</span>
                      </p>
                    </a>
                  </div>
                </div>
                <div className={styles.it_left_jb_bt}>
                  <h2 className={styles.p_it_right}>File đính kèm</h2>
                  <div className={styles.tag_skill}>
                    <p className={styles.it_skill}>
                      {" "}
                      <img
                        src="/ic_03.png"
                        alt="download-ic"
                        className={styles.ic_03}
                      />
                      <a
                        href="/file_1697186172.jpg"
                        download="/file_1697186172.jpg"
                      >
                        <span>File đính kèm</span>
                      </a>
                    </p>
                  </div>
                </div>
                <div className={styles.it_left_jb_bt}>
                  <h2 className={styles.p_it_right}>Thông tin đặt giá</h2>
                  <div className={styles.thong_tin_dat_gia}>
                    <div className={styles.cover_input}>
                      <label htmlFor="" className={styles.label_style}>
                        <p className={styles.p_dat_gia}>Mức lương</p>
                      </label>
                      <input
                        type="number"
                        name="muc_luong"
                        placeholder="Nhập mức lương mong muốn"
                        className={styles.input_dat_gia}
                        min={0}
                        id="muc_luong"
                      />
                    </div>
                    <div className={styles.cover_input}>
                      <label htmlFor="" className={styles.label_style}>
                        <p className={styles.p_dat_gia}>Email</p>
                      </label>
                      <input
                        type="Email"
                        name="email_dat_gia"
                        placeholder="Nhập email của bạn"
                        className={styles.input_dat_gia}
                      />
                    </div>
                    <button
                      type="submit"
                      name="dat_gia"
                      value="dat_gia"
                      className={styles.button_dat_gia}
                      id="da_chap_nhan_dat_gia"
                    >
                      {" "}
                      Đã đặt giá ( Kết thúc ngày 30-10-2023 )
                    </button>
                  </div>
                </div>
                {/* danh sách freelancer đặt giá */}
                <div className={styles.it_left_jb_bt}>
                  <h2 className={styles.p_it_right}>
                    Danh sách freelancer đặt giá
                  </h2>
                  <div className={styles.cover_list_dat_gia}>
                    <p className={styles.p_it_dat_gia}>
                      ( có 1 freelancer đã đặt giá )
                    </p>
                    <div className={styles.item_dat_gia}>
                      <div className={styles.item_dat_gia_left}>
                        <div className={styles.img_item_dat_gia}>
                          <img
                          style={{width: "100%"}}
                            src="/job-1696232048.png"
                            data-src="/job-1696232048.png"
                            alt="avatar"
                            className={` ${styles.lazyloaded}`}
                          />
                        </div>
                        <div className={styles.content_it_freelancer}>
                          <a
                            href="ung-vien-freelancer-khanh-uv116606.html"
                            className={styles.d_block}
                          >
                            <p className={styles.name_it_free}>Khanh</p>
                          </a>
                          <p className={styles.text_career}>
                            IT &amp; Lập trình
                          </p>
                        </div>
                        <p className={styles.text_content_it} />
                      </div>
                      <div className={styles.item_dat_gia_right}>
                        <p className={styles.p01_right_dat_gia}>
                          12.345.700 VNĐ
                        </p>
                        <p className={styles.p02_right_dat_gia}>
                          Đánh giá freelancer:
                        </p>
                        <div className={styles.danh_gia_sao}>
                          <span className={styles.diem_sao}>3</span>
                          <div className={styles.cover_star}>
                            <div className={styles.pos_re}>
                              <div style={{ width: "70%", margin: "auto" }}>
                                <div
                                  className={styles.yellow_star}
                                  style={{ width: "60%", height: "23.99px" }}
                                />
                                <div className={styles.ratting_star_1} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className={styles.xem_them_dat_gia}>
                      Xem thêm
                      </div> */}
                  </div>
                </div>
              </div>
              {/* chi tiết việc làm */}
              <div className={styles.right_job_bottom}>
                <div className={styles.it_right_job_bt}>
                  <h2 className={styles.p_it_right_bt}>Chi tiết việc làm</h2>
                  <ul className={styles.cover_list_job_bt}>
                    <li className={styles.it_jb_bt}>
                      <img
                        src="/ic_19.png"
                        alt="hinh-thuc-ic"
                        className={styles.ic_04}
                      />
                      <p className={styles.text_it_jb_left}>Hình thức</p>
                      <p className={styles.text_it_jb_right}>Bán thời gian</p>
                    </li>
                    <li className={styles.it_jb_bt}>
                      <img
                        src="/ic_20.png"
                        alt="ngay-bat-dau"
                        className={styles.ic_04}
                      />
                      <p className={styles.text_it_jb_left}>Ngày bắt đầu</p>
                      <p className={styles.text_it_jb_right}>28-10-2023</p>
                    </li>
                    <li className={styles.it_jb_bt}>
                      <img
                        src="/ic_21.png"
                        alt="thoi-gian"
                        className={styles.ic_04}
                      />
                      <p className={styles.text_it_jb_left}>Thời hạn</p>
                      <p className={styles.text_it_jb_right}>1 tháng</p>
                    </li>
                    <li className={styles.it_jb_bt}>
                      <img
                        src="/ic_22.png"
                        alt="dia-diem"
                        className={styles.ic_04}
                      />
                      <p className={styles.text_it_jb_left}>Địa điểm</p>
                      <p className={styles.text_it_jb_right}>Bắc Giang</p>
                    </li>
                    <li className={styles.it_jb_bt}>
                      <img
                        src="/ic_23.png"
                        alt="kinh-nghiem"
                        className={styles.ic_04}
                      />
                      <p className={styles.text_it_jb_left}>Kinh nghiệm</p>
                      <p className={styles.text_it_jb_right}>
                        0 - 1 năm kinh nghiệm
                      </p>
                    </li>
                  </ul>
                </div>
                <div className={styles.it_right_job_bt}>
                  <h2 className={styles.p_it_right_bt}>Người đăng tin</h2>
                  <ul
                    className={`${styles.cover_list_job_bt} ${styles.bg_FAFDFF}`}
                  >
                    <li className={`${styles.it_jb_bt} ${styles.bottom_unset}`}>
                      <div className={styles.cover_img_info}>
                        <div className={styles.img_item_dat_gia}>
                          <img
                            src="/job-1695950247.png"
                            data-src="/job-1695950247.png"
                            alt="avatar"
                            className={` ${styles.lazyloaded}`}
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className={styles.content_it_freelancer}>
                          <a href="/nha-tuyen-dung-:name-ntd:id.html">
                            <p className={styles.name_it_free}>
                              Nguyen The Anh
                            </p>
                          </a>
                          <p className={styles.text_career}>
                            <img
                              src="/ic_home01green.png"
                              alt="city-ic"
                              className={styles.inline_block}
                            />
                          </p>
                          <p className={styles.inline_block}>
                            Quận Hoàng Mai, Hà Nội
                          </p>
                          <p />
                        </div>
                      </div>
                    </li>
                    <li className={styles.it_jb_bt}>
                      <p className={styles.text_it_jb_left}>Số điện thoại</p>
                      <p
                        className={`${styles.text_it_jb_right} ${styles.color_blue}`}
                      >
                        0981632302
                      </p>
                    </li>
                    <li className={styles.it_jb_bt}>
                      <p className={styles.text_it_jb_left}>Email</p>
                      <p
                        className={`${styles.text_it_jb_right} ${styles.color_blue}`}
                      >
                        theanh28022003@gmail.com
                      </p>
                    </li>
                    <li className={styles.it_jb_bt}>
                      <p className={styles.text_it_jb_left}>Tham gia</p>
                      <p className={styles.text_it_jb_right}>29-09-2023</p>
                    </li>
                    <li className={styles.it_jb_bt}>
                      <p className={styles.text_it_jb_left}>Đã đăng</p>
                      <p
                        className={`${styles.text_it_jb_right} ${styles.color_blue}`}
                      >
                        4 công việc
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChiTiet;
