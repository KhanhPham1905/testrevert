import styles from "./index.module.css";
import { Checkbox, Select, Button, Pagination } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
// import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import Link from "next/link";
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const handleChange = (value) => {};

const Danhsachfreelancer = () => {
  const router = useRouter();
  return (
    <div>
      <div className={styles.banner_list_freelancer} data="">
        <div className={`${styles.container} ${styles.relative_banner}`}>
          <div className={styles.cover_content_banner_freelancer}>
            <div className={styles.content_banner_freelancer}>
              <Link href="/">
                <span>Trang chủ / </span>
              </Link>
              <span> Danh sách freelancer </span>
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
                      style={{ height: '30.4px', padding: 0 }}
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
                  Danh sách freelancer
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
                  <div className={styles.item_freelancer}>
                    <div className={styles.img_item_user}>
                        <img className={`${styles.img_user} ${styles.lazyloaded}`} src="/avt_2.png" data-src="../images/avt_2.png" alt="HfjNUlYZ" onerror="this.onerror=null;this.src=&quot;/images/img_ntd.png&quot;;" onclick="location.href='/ung-vien-freelancer-hfjnulyz-uv12345.html'"/>
                    </div>
                    <div className={styles.content_it_freelancer}>
                        <div onClick={(e)=> {router.push('/ung-vien-freelancer-:name-uv:id.html')}} style={{display:'block', cursor:'pointer'}} className={styles.d_block}>
                            <h3 className={styles.name_it_free}>HfjNUlYZ</h3>
                              <p className={styles.check_status}>
                                Đã xem</p>
                        </div>
                        <p style={{cursor: 'pointer'}} data-save="12345" className={`${styles.text_save_it} ${styles.save_flc}`}>
                          <img className={styles.lazyloaded} src="/ic_free_01.png" data-src="../images/ic_free_01.png" alt="Lưu freelancer"/>
                          <span style={{marginLeft: '3px'}}> Lưu freelancer</span>
                        </p>
                            
                        <span className={styles.text_career}>
                            IT &amp; Lập trình
                        </span>
                                                                
                        <p className={styles.location_it_free}>
                          <span><img className={styles.lazyloaded} src="/ic_free_02.png" data-src="../images/ic_free_02.png" alt="địa chỉ"/>
                          </span> Hà Nội, Hà Nội
                        </p>
                        <p className={styles.text_content_it01}>
                            <span>0 lượt đặt giá</span>
                        </p>
                        <p className={styles.text_content_it}>555</p>
                        <div className={styles.tag_nganh_nghe}>
                        </div>
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

export default Danhsachfreelancer;
