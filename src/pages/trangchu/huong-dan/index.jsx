import styles from "./index.module.css";
const Huongdan = () => {
  return (
    <div>
      <div className={`${styles.banner_dang_viec}`}>
        <div className={`${styles.container} ${styles.relative_banner}`}>
          <div className={`${styles.cover_content_banner_dang_viec}`}>
            <div
              className={`${styles.content_banner_dang_viec} ${styles["aos-init"]} ${styles["aos-animate"]}`}
              data-aos="flip-up"
            >
              <span>Hướng dẫn sử dụng</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.cover_container}`}>
        <div className={`${styles.container} ${styles.main_container}`}>
          <div className={`${styles.cover_job_detail}`}>
            <div className={`${styles.cover_tutorial}`}>
              <h1
                className={`${styles.title_tutorial} ${styles["aos-init"]}`}
                data-aos="fade-up"
              >
                Thuê freelancer
              </h1>
              <div className={`${styles.cover_it_tutorial}`}>
                <div className={`${styles.main_it_tutorial}`}>
                  <div
                    className={`${styles.it_tutorial} ${styles["aos-init"]}`}
                    data-aos="fade-down"
                  >
                    <div className={`${styles.cover_ic_tutorial01}`}>
                      <img
                        src="/ic_tutorial01.png"
                        alt="ic_tutorial01"
                        className={`${styles.ic_tutorial01}`}
                      />
                    </div>
                    <h2 className={`${styles.title_it_tutorial}`}>
                      Đăng tìm việc
                    </h2>
                    <p className={`${styles.p_tutorial}`}>
                      Chúng tôi giúp 2,500 thí sinh tìm việc làm tốt mỗi ngày.
                    </p>
                  </div>
                  <div
                    className={`${styles.it_tutorial} ${styles["aos-init"]}`}
                    data-aos="fade-down"
                  >
                    <div className={`${styles.cover_ic_tutorial01}`}>
                      <img
                        src="/ic_tutorial02.png"
                        alt="ic_tutorial02"
                        className={`${styles.ic_tutorial01}`}
                      />
                    </div>
                    <h2 className={`${styles.title_it_tutorial}`}>
                      Chọn freelancer{" "}
                    </h2>
                    <p className={`${styles.p_tutorial}`}>
                      Những ứng viên được chọn chất lượng tốt, đảm bảo yêu cầu
                      kỹ thuật.
                    </p>
                  </div>
                  <div
                    className={`${styles.it_tutorial} ${styles["aos-init"]}`}
                    data-aos="fade-down"
                  >
                    <div className={`${styles.cover_ic_tutorial01}`}>
                      <img
                        src="/ic_tutorial03.png"
                        alt="ic_tutorial03"
                        className={`${styles.ic_tutorial01}`}
                      />
                    </div>
                    <h2 className={`${styles.title_it_tutorial}`}>Liên hệ </h2>
                    <p className={`${styles.p_tutorial}`}>
                      Liên hệ trực tiếp ứng viên, nhà tuyển dụng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.cover_tutorial}`}
              style={{ marginTop: 60 }}
            >
              <h1
                className={`${styles.title_tutorial} ${styles["aos-init"]}`}
                data-aos="fade-up"
              >
                Đăng dự án
              </h1>
              <div
                className={`${styles.cover_it_tutorial} ${styles.margin_100}`}
              >
                <div className={`${styles.main_it_tutorial02}`} style={{padding:"70px"}}>
                  <div className={`${styles.sub_tutorial01}`}>
                    <div className={`${styles.sub_tutorial02}`}>
                      <div className={`${styles.item_tutorial}`}>
                        <div
                          className={`${styles.main_it_tutorial_cover} ${styles.mr_540} ${styles["aos-init"]}`}
                          data-aos="fade-right"
                        >
                          <div
                            className={`${styles.cover_text_it01} ${styles.f_left}`}
                          >
                            <h3 className={`${styles.title_item_tutorial}`}>
                              Bước 1: Vào mục đăng dự án
                            </h3>
                            <p className={`${styles.p_b1_tutorial}`}>
                              Bấm vào nút đăng dự án hiển thị trên thanh Menu.
                              Chọn đăng việc theo dự án hoặc đăng việc bán thời
                              gian. Mẫu đăng việc của Timviec365 đã sẵn sàng để
                              bạn sử dụng.
                            </p>
                          </div>
                        </div>
                        <div
                          className={`${styles.main_it_tutorial_cover} ${styles.center_540} ${styles["aos-init"]}`}
                          data-aos="fade-left"
                        >
                          <img
                            src="/img_tutorial01.png"
                            alt="img_tutorial01"
                            className={`${styles.img_tutorial01} ${styles.f_right} ${styles.f_unset}`}
                          />
                        </div>
                      </div>
                      <div className={`${styles.item_tutorial}`}>
                        <div
                          className={`${styles.main_it_tutorial_cover} ${styles.center_540} ${styles.mr_540} ${styles["aos-init"]}`}
                          data-aos="fade-right"
                        >
                          <img
                            src="/img_tutorial02.png"
                            alt="img_tutorial02"
                            className={`${styles.img_tutorial02} ${styles.f_left} ${styles.f_unset}`}
                          />
                        </div>
                        <div
                          className={`${styles.main_it_tutorial_cover} ${styles["aos-init"]}`}
                          data-aos="fade-left"
                        >
                          <div
                            className={`${styles.cover_text_it01} ${styles.f_right}`}
                          >
                            <h3 className={`${styles.title_item_tutorial}`}>
                              Bước 2: Vào mục đăng dự án
                            </h3>
                            <p className={`${styles.p_b02_tutorial}`}>
                              Viết tên việc ngắn gọn
                            </p>
                            <p className={`${styles.p02_b02_tutorial}`}>
                              Ví dụ:
                            </p>
                            <p className={`${styles.p02_b02_tutorial}`}>
                              - Dịch báo Việt - Anh đề tài du lịch
                            </p>
                            <p className={`${styles.p02_b02_tutorial}`}>
                              - Thiết kế trang web bán hàng
                            </p>
                            <br />
                            <p className={`${styles.p_b02_tutorial}`}>
                              Chọn lĩnh vực cần tuyển
                            </p>
                            <p className={`${styles.p02_b02_tutorial}`}>
                              - Chọn lĩnh vực bạn cần tuyển
                            </p>
                            <p className={`${styles.p02_b02_tutorial}`}>
                              - Chọn dịch vụ phù hợp nhất để tuyển Freelancer
                              chính xác.
                            </p>
                            <br />
                            <p className={`${styles.p_b02_tutorial}`}>
                              Mô tả rõ ràng
                            </p>
                            <p className={`${styles.p02_b02_tutorial}`}>
                              - Nên viết mô tả bằng tiếng Việt có dấu
                            </p>
                            <p className={`${styles.p02_b02_tutorial}`}>
                              - Mỗi yêu cầu thể hiện bằng 1 gạch đầu dòng (làm
                              việc gì, yêu cầu thế nào về kinh nghiệm...)
                            </p>
                            <br />
                            <p className={`${styles.p_b02_tutorial}`}>
                              Thêm kỹ năng
                            </p>
                            <p className={`${styles.p02_b02_tutorial}`}>
                              - Chọn 1 vài kỹ năng cần nhất với yêu cầu dự án và
                              thêm vào cuối dự án.
                            </p>
                            <p className={`${styles.p02_b02_tutorial}`}>
                              - Tag kỹ năng giúp freelancer liên quan tiếp cận
                              dự án của bạn nhanh hơn.
                            </p>
                            <br />
                            <p className={`${styles.p_b02_tutorial}`}>
                              Chọn ngân sách hấp dẫn
                            </p>
                            <p className={`${styles.p02_b02_tutorial}`}>
                              - Hãy đưa ra mức ngân sách bằng đúng khả năng chi
                              trả của bạn.
                            </p>
                            <p className={`${styles.p02_b02_tutorial}`}>
                              - Con số phải thực tế. Nếu quá thấp hoặc quá cao
                              freelancer sẽ cho rằng bạn thiếu nghiêm túc.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.item_tutorial}`}>
                        <div
                          className={`${styles.main_it_tutorial_cover} ${styles["aos-init"]}`}
                          data-aos="fade-right"
                        >
                          <div
                            className={`${styles.cover_text_it01} ${styles.f_left} ${styles.mr_540}`}
                          >
                            <h3 className={`${styles.title_item_tutorial}`}>
                              Bước 3: Đăng dự án
                            </h3>
                            <p className={`${styles.p_b1_tutorial}`}>
                              Sau khi đã điền đầy đủ thông tin trên form mẫu của
                              Timviec365.vn. Bạn hãy bấm vào nút 
                              <span>Đăng việc</span> 
                            </p>
                          </div>
                        </div>
                        <div
                          className={`${styles.main_it_tutorial_cover} ${styles.center_540} ${styles["aos-init"]}`}
                          data-aos="fade-left"
                        >
                          <img
                            src="/img_tutorial03.png"
                            alt="img_tutorial03"
                            className={`${styles.img_tutorial03} ${styles.f_right} ${styles.f_unset}`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.main_it_tutoria_center}`}>
                      <div
                        className={`${styles.number_center} ${styles["aos-init"]}`}
                        data-aos="zoom-in"
                      >
                        01
                      </div>
                      <div
                        className={`${styles.line_dashed} ${styles.height_01}`}
                      />
                      <div
                        className={`${styles.number_center} ${styles["aos-init"]}`}
                        data-aos="zoom-in"
                      >
                        02
                      </div>
                      <div
                        className={`${styles.line_dashed} ${styles.height_02}`}
                      />
                      <div
                        className={`${styles.number_center} ${styles["aos-init"]}`}
                        data-aos="zoom-in"
                      >
                        03
                      </div>
                      <div
                        className={`${styles.line_dashed} ${styles.height_03}`}
                      />
                      <div
                        className={`${styles.number_center} ${styles["aos-init"]}`}
                        data-aos="zoom-in"
                      >
                        <img src="/dau_tich.png" alt="dau_tich" />
                      </div>
                      {/* <div class="number_center"><img src="../images/img_tutorial04.png" alt=""></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Huongdan;
