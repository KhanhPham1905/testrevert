import styles from "./index.module.css";
import { Checkbox, Select, Button, Pagination } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
// import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import Link from "next/link";
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const handleChange = (value) => {};

const Vieclambanthoigian = () => {
  return (
    <div>
      <div className={styles.banner_list_freelancer} data="">
        <div className={`${styles.container} ${styles.relative_banner}`}>
          <div className={styles.cover_content_banner_freelancer}>
            <div className={styles.content_banner_freelancer}>
              <Link href="/">
                <span>Trang chủ / </span>
              </Link>
              <span>Tất cả việc làm freelancer</span>
            </div>

            {/* <!-- thanh search --> */}
            <div className={styles.main_cover_search}>
              <form
                action=""
                className={styles.cover_search}
                autocomplete="off"
                method="POST"
              >
                <div className={styles.main_search}>
                  <div
                    className={`${styles.cover_input_search} ${styles.autocomplete}`}
                  >
                    <input
                      type="text"
                      placeholder="Nhập từ khóa"
                      //   value=""
                      name="keyword"
                      id="keyword"
                      className={`${styles.input_search} ${styles.keyword}`}
                      autocomplete="off"
                      onkeydown="if (event.keyCode == 13)
                                document.getElementById('search').click()"
                      fdprocessedid="gi8dqe"
                    />
                  </div>
                  <div className={styles.line}></div>

                  <div className={styles.cover_select_search}>
                    <Select
                      defaultValue="0"
                      style={{ height: '30.4px', padding: 0 }}
                      id="search_nn"
                      suffixIcon={<DownOutlined />}
                      className={styles.select_search}
                      onChange={handleChange}
                      options={[
                        { value: "0", label: "Chọn ngành nghề" },
                        { value: "1", label: "trộm" },
                        { value: "2", label: "yang hồ" },
                        { value: "3", label: "abcd" },
                      ]}
                    />
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.cover_select_search}>
                    <Select
                      defaultValue="0"
                      style={{height: '30.4px', padding: 0 }}
                      id="search_nn"
                      suffixIcon={<DownOutlined />}
                      className={styles.select_search}
                      onChange={handleChange}
                      options={[
                        { value: "0", label: "Chọn tỉnh thành" },
                        { value: "1", label: "Hưng Yên" },
                        { value: "2", label: "Hà Nội" },
                        { value: "3", label: "Thái Bình" },
                      ]}
                    />
                  </div>
                  <div className={styles.btn_search}>
                    <button type="submit" name="search" id="search" fdprocessedid="st78jb">
                        <img src="/ic_search.png" data-src="../images/ic_search.png" alt="Tìm kiếm" className={styles.lazyloaded}/>
                        <span className={styles.span_search}>Tìm kiếm</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cover_container}>
        <div className={styles.container}>
          <div className={styles.main_freelancer}>
            <div className={styles.processing}>
              <div className={styles.title_freelancer}>
                <h1 className={styles.title_h1_freelancer}>
                Tất cả việc làm freelancer
                </h1>
                <p className={styles.text_p_freelancer}>
                Việc làm tự do dành cho các freelancer
                </p>
              </div>
              <div className={styles.content_freelancer}>
                <div
                  className={`${styles.left_content_freelancer} ${styles.freelancer_job_left}`}
                  data="1"
                >
                  {/* <!-- việc làm bán thời gian --> */}
                  <div className={styles.item_job02}>
                    <img
                      className={`${styles.img_user_job02} ${styles.lazyloaded}`}
                      src="../thumb/2023/09/15/job-1694746597.png"
                      data-src="../thumb/2023/09/15/job-1694746597.png"
                      alt="Cty Dũng"
                      onclick="location.href='/thiet-ke-do-hoa-vl30172.html'"
                    />
                    <div className={styles.text_item_job_02}>
                      <a href="/thiet-ke-do-hoa-vl30172.html" className="d_block">
                        <h3 className={styles.h3_text_it_02}>đổi à</h3>
                      </a>
                      <div className={styles.info_user_job02}>
                        <p className={styles.it_info_user}>
                          <img
                            className={styles.lazyloaded}
                            src="/ic_home03.png"
                            data-src="/ic_home03.png"
                            alt=""
                          />
                          <span>
                            <a
                              className={styles.location_job_dt}
                              href="nha-tuyen-dung-cty-dung-ntd23116.html"
                            >
                              Cty Dũng
                            </a>
                          </span>
                        </p>
                        <p className={styles.it_info_user}>
                          <img
                            className={styles.lazyloaded}
                            src="/ic_home02.png"
                            data-src="/ic_home02.png"
                            alt=""
                          />
                          <span>Bán thời gian</span>
                        </p>
                        <p className={styles.it_info_user}>
                          <img
                            className={styles.lazyloaded}
                            src="/ic_home01.png"
                            data-src="/ic_home01.png"
                            alt=""
                          />
                          <span></span>
                        </p>
                      </div>
                      <p className={styles.text_content_it01}>
                        <span className=" ">1 lượt đặt giá</span> <span></span>
                        <span>Hết hạn: 08-09-2023</span>
                      </p>
                      <div className={styles.tag_nganh_nghe}>
                        <a href="/tim-viec-lam-freelancer-css-tg8.html">
                          <p className={styles.it_tag_nganh_nghe}>CSS</p>
                        </a>
                      </div>
                    
                    
                    
                    </div>
                    
                    
                    <div className={styles.btn_right_home}>
                      <p
                        className={styles.dat_gia}
                        onclick="showLogin()"
                        data-ntd_id="23116"
                        data-date="08-09-2023"
                        data-tittle="đổi à"
                        data-id="30172"
                      >
                        Đặt giá
                      </p>
                      <p className={styles.gia}>0 VNĐ - 0 VNĐ </p>
                    </div>
                  </div>
                  <div className={styles.pagination} align="center">
                       <Pagination defaultCurrent={1} total={200} pageSize={10} showSizeChanger={false} />
                 </div>
                </div>

                <div className={styles.right_content_freelancer}>
                  <div className={styles.it_right_free}>
                    <p className={styles.p_it_right}>Ngành nghề</p>
                    <ul className={styles.list_item_checkbox} id="checkbox_nn">
                      <li className={styles.item_checkbox}>
                        <Checkbox
                          className={styles.checkbox_style_antd}
                          onChange={onChange}
                        >
                          IT &amp; Lập trình
                        </Checkbox>
                      </li>
                      <li className={styles.item_checkbox}>
                        <Checkbox
                          className={styles.checkbox_style_antd}
                          onChange={onChange}
                        >
                          Thiết kế
                        </Checkbox>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.it_right_free}>
                    <p className={styles.p_it_right}>Thành phố</p>
                    <ul className={styles.list_item_checkbox} id="checkbox_tp">
                      <li className={styles.item_checkbox}>
                        <Checkbox
                          className={styles.checkbox_style_antd}
                          onChange={onChange}
                        >
                          Hà Nội
                        </Checkbox>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.it_right_free}>
                    <p className={styles.p_it_right}>Kỹ năng </p>
                    <ul className={styles.list_item_checkbox} id="checkbox_kn">
                      <li className={styles.item_checkbox}>
                        <Checkbox
                          className={styles.checkbox_style_antd}
                          onChange={onChange}
                        >
                          lxbfYeaa
                        </Checkbox>
                      </li>
                      <li className={styles.item_checkbox}>
                        <Checkbox
                          className={styles.checkbox_style_antd}
                          onChange={onChange}
                        >
                          nwJXK
                        </Checkbox>
                      </li>
                    </ul>
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

export default Vieclambanthoigian;
