import { Tabs } from "antd";
import styles from "./index.module.css";
import Link from "next/link";
const Capnhatthongtin = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Thông tin",
      children: (
        <div className={styles.bottom_update_right}>
          <div
            className={`${styles.item_bottom_update_right} ${styles.d_none} ${styles.active}`}
            id="change_info"
          >
            <form
              action="#"
              method="post"
              encType="multipart/form-data"
              id="up_1n4"
              noValidate="novalidate"
            >
              <div className={styles.input_item}>
                <p className={styles.title_input}>
                  Họ và tên <span>*</span>
                </p>
                <input
                  type="text"
                  className={styles.input_style}
                  defaultValue="Nguyen The Anh"
                  name="name_ntd"
                  id="name_ntd"
                />
              </div>
              <div className={styles.input_item}>
                <p className={styles.title_input}>
                  Giới tính <span>*</span>
                </p>
                <select
                  className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`}
                  name="gt_ntd"
                  id="gt_ntd"
                  data-select2-id="select2-data-gt_ntd"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option
                    value={0}
                    selected="selected"
                    data-select2-id="select2-data-2-p1a9"
                  >
                    Nam
                  </option>
                  <option value={1}>Nữ</option>
                  <option value={2}>Khác</option>
                </select>
                <span
                  className={`${styles.select2} ${styles.select2_container} ${styles.select2_container} default />}`}
                  dir="ltr"
                  data-select2-id="select2-data-1-ysfe"
                  style={{ width: "242.738px" }}
                >
                  <span className={styles.selection}>
                    <span
                      className={`${styles.select2_selection} ${styles.select2_selection} single />}`}
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex={0}
                      aria-disabled="false"
                      aria-labelledby="select2-gt_ntd-container"
                      aria-controls="select2-gt_ntd-container"
                    >
                      <span
                        className={`${styles.select2_selection__rendered}`}
                        id="select2-gt_ntd-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Nam"
                      ></span>
                      <span
                        className={`${styles.select2_selection__arrow}`}
                        role="presentation"
                      >
                        <b role="presentation" />
                      </span>
                    </span>
                  </span>
                  <span
                    className={styles.dropdown_wrapper}
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div
                className={`${styles.input_item} ${styles.input_date_ns}`}
                style={{ clear: "both" }}
              >
                <p className={styles.title_input}>
                  Ngày sinh <span>*</span>
                </p>
                <input
                  type="date"
                  className={styles.input_style}
                  defaultValue="2003-02-28"
                  name="ns_ntd"
                  id="ns_ntd"
                />
              </div>
              <div className={styles.input_item}>
                <p className={styles.title_input}>
                  Số điện thoại <span>*</span>
                </p>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className={styles.input_style}
                  defaultValue={"0981632302"}
                  min={0}
                />
              </div>
              <div className={styles.input_item}>
                <p className={styles.title_input}>
                  Tỉnh/ thành phố <span>*</span>
                </p>
                <select
                  className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`}
                  name="tp_ntd"
                  id="tp_ntd"
                  data-select2-id="select2-data-tp_ntd"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value="">Chọn tỉnh / thành phố</option>
                  <option
                    selected=""
                    value={1}
                    data-select2-id="select2-data-4-xody"
                  >
                    Hà Nội
                  </option>
                  ;<option value={2}>Hải Phòng</option>;
                  <option value={3}>Bắc Giang</option>;
                  <option value={4}>Bắc Kạn</option>;
                  <option value={5}>Bắc Ninh</option>;
                  <option value={6}>Cao Bằng</option>;
                  <option value={7}>Điện Biên</option>;
                  <option value={8}>Hòa Bình</option>;
                  <option value={9}>Hải Dương</option>;
                  <option value={10}>Hà Giang</option>;
                  <option value={11}>Hà Nam</option>;
                  <option value={12}>Hưng Yên</option>;
                  <option value={13}>Lào Cai</option>;
                  <option value={14}>Lai Châu</option>;
                  <option value={15}>Lạng Sơn</option>;
                  <option value={16}>Ninh Bình</option>;
                  <option value={17}>Nam Định</option>;
                  <option value={18}>Phú Thọ</option>;
                  <option value={19}>Quảng Ninh</option>;
                  <option value={20}>Sơn La</option>;
                  <option value={21}>Thái Bình</option>;
                  <option value={22}>Thái Nguyên</option>;
                  <option value={23}>Tuyên Quang</option>;
                  <option value={24}>Vĩnh Phúc</option>;
                  <option value={25}>Yên Bái</option>;
                  <option value={26}>Đà Nẵng</option>;
                  <option value={27}>Thừa Thiên Huế</option>;
                  <option value={28}>Khánh Hòa</option>;
                  <option value={29}>Lâm Đồng</option>;
                  <option value={30}>Bình Định</option>;
                  <option value={31}>Bình Thuận</option>;
                  <option value={32}>Đắk Lắk</option>;
                  <option value={33}>Đắk Nông</option>;
                  <option value={34}>Gia Lai</option>;
                  <option value={35}>Hà Tĩnh</option>;
                  <option value={36}>Kon Tum</option>;
                  <option value={37}>Nghệ An</option>;
                  <option value={38}>Ninh Thuận</option>;
                  <option value={39}>Phú Yên</option>;
                  <option value={40}>Quảng Bình</option>;
                  <option value={41}>Quảng Nam</option>;
                  <option value={42}>Quảng Ngãi</option>;
                  <option value={43}>Quảng Trị</option>;
                  <option value={44}>Thanh Hóa</option>;
                  <option value={45}>Hồ Chí Minh</option>;
                  <option value={46}>Bình Dương</option>;
                  <option value={47}>Bà Rịa Vũng Tàu</option>;
                  <option value={48}>Cần Thơ</option>;
                  <option value={49}>An Giang</option>;
                  <option value={50}>Bạc Liêu</option>;
                  <option value={51}>Bình Phước</option>;
                  <option value={52}>Bến Tre</option>;
                  <option value={53}>Cà Mau</option>;
                  <option value={54}>Đồng Tháp</option>;
                  <option value={55}>Đồng Nai</option>;
                  <option value={56}>Hậu Giang</option>;
                  <option value={57}>Kiên Giang</option>;
                  <option value={58}>Long An</option>;
                  <option value={59}>Sóc Trăng</option>;
                  <option value={60}>Tiền Giang</option>;
                  <option value={61}>Tây Ninh</option>;
                  <option value={62}>Trà Vinh</option>;
                  <option value={63}>Vĩnh Long</option>;
                </select>
                <span
                  className={`${styles.select2} ${styles.select2_container} ${styles.select2_container} default />}`}
                  dir="ltr"
                  data-select2-id="select2-data-3-2uy6"
                  style={{ width: "242.738px" }}
                >
                  <span className={styles.selection}>
                    <span
                      className={`${styles.select2_selection} ${styles.select2_selection} single />}`}
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex={0}
                      aria-disabled="false"
                      aria-labelledby="select2-tp_ntd-container"
                      aria-controls="select2-tp_ntd-container"
                    >
                      <span
                        className={`${styles.select2_selection__rendered}`}
                        id="select2-tp_ntd-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Hà Nội"
                      ></span>
                      <span
                        className={`${styles.select2_selection__arrow}`}
                        role="presentation"
                      >
                        <b role="presentation" />
                      </span>
                    </span>
                  </span>
                  <span
                    className={styles.dropdown_wrapper}
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className={styles.input_item}>
                <p className={styles.title_input}>
                  Quận / huyện <span>*</span>
                </p>
                <select
                  name="qh_ntd"
                  id="qh_ntd"
                  className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`}
                  data-select2-id="select2-data-qh_ntd"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value="">Chọn quận / huyện</option>
                  <option value={66}>Quận Ba Đình</option>;
                  <option value={67}>Quận Hoàn Kiếm</option>;
                  <option value={68}>Quận Tây Hồ</option>;
                  <option value={69}>Quận Long Biên</option>;
                  <option value={70}>Quận Cầu Giấy</option>;
                  <option value={71}>Quận Đống Đa</option>;
                  <option value={72}>Quận Hai Bà Trưng</option>;
                  <option
                    selected=""
                    value={73}
                    data-select2-id="select2-data-6-vvcq"
                  >
                    Quận Hoàng Mai
                  </option>
                  ;<option value={74}>Quận Thanh Xuân</option>;
                  <option value={75}>Huyện Sóc Sơn</option>;
                  <option value={76}>Huyện Đông Anh</option>;
                  <option value={77}>Huyện Gia Lâm</option>;
                  <option value={78}>Quận Nam Từ Liêm</option>;
                  <option value={79}>Huyện Thanh Trì</option>;
                  <option value={80}>Quận Bắc Từ Liêm</option>;
                  <option value={81}>Huyện Mê Linh</option>;
                  <option value={82}>Quận Hà Đông</option>;
                  <option value={83}>Thị xã Sơn Tây</option>;
                  <option value={84}>Huyện Ba Vì</option>;
                  <option value={85}>Huyện Phúc Thọ</option>;
                  <option value={86}>Huyện Đan Phượng</option>;
                  <option value={87}>Huyện Hoài Đức</option>;
                  <option value={88}>Huyện Quốc Oai</option>;
                  <option value={89}>Huyện Thạch Thất</option>;
                  <option value={90}>Huyện Chương Mỹ</option>;
                  <option value={91}>Huyện Thanh Oai</option>;
                  <option value={92}>Huyện Thường Tín</option>;
                  <option value={93}>Huyện Phú Xuyên</option>;
                  <option value={94}>Huyện Ứng Hòa</option>;
                  <option value={95}>Huyện Mỹ Đức</option>;
                </select>
                <span
                  className={`${styles.select2} ${styles.select2_container} ${styles.select2_container} default />}`}
                  dir="ltr"
                  data-select2-id="select2-data-5-saic"
                  style={{ width: "242.738px" }}
                >
                  <span className={styles.selection}>
                    <span
                      className={`${styles.select2_selection} ${styles.select2_selection} single />}`}
                      role="combobox"
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex={0}
                      aria-disabled="false"
                      aria-labelledby="select2-qh_ntd-container"
                      aria-controls="select2-qh_ntd-container"
                    >
                      <span
                        className={`${styles.select2_selection__rendered}`}
                        id="select2-qh_ntd-container"
                        role="textbox"
                        aria-readonly="true"
                        title="Quận Hoàng Mai"
                      ></span>
                      <span
                        className={`${styles.select2_selection__arrow}`}
                        role="presentation"
                      >
                        <b role="presentation" />
                      </span>
                    </span>
                  </span>
                  <span
                    className={styles.dropdown_wrapper}
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className={styles.button_item_update}>
                <button
                  className={styles.btn_post}
                  name="update_in4_ntd"
                  value="update"
                >
                  Cập nhật thông tin
                </button>
              </div>
            </form>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Đổi mật khẩu",
      children: (
        <div
          className={`${styles.item_bottom_update_right} ${styles.d_none}`}
          id="change_pass"
        >
          <form
            action="#"
            method="post"
            encType="multipart/form-data"
            id="update_pass_val"
            noValidate="novalidate"
          >
            <div id="error">
              <div className={styles.it_input_update}>
                <p className={styles.title_input}>
                  Mật khẩu cũ <span>*</span>
                </p>
                <input
                  id="pwd"
                  type="text"
                  name="password"
                  className={styles.input_style}
                  placeholder="*******"
                />
                <img
                  src="/show_password.png"
                  className={styles.s_h_pass}
                  alt=""
                />
              </div>
              <div className={styles.it_input_update}>
                <p className={styles.title_input}>
                  Mật khẩu mới <span>*</span>
                </p>
                <input
                  id="newpassword"
                  type="text"
                  name="newpassword"
                  className={`${styles.newpassword} ${styles.input_style}`}
                  placeholder="*******"
                  aria-autocomplete="list"
                />
                <img
                  src="/show_password.png"
                  className={styles.s_h_pass}
                  alt=""
                />
              </div>
              <div className={styles.it_input_update}>
                <p className={styles.title_input}>
                  Nhập lại mật khẩu mới <span>*</span>
                </p>
                <input
                  id="renewpassword"
                  type="text"
                  name="renewpassword"
                  className={`${styles.newpassword} ${styles.input_style}`}
                  placeholder="*******"
                  aria-autocomplete="list"
                />
                <img
                  src="/show_password.png"
                  className={styles.s_h_pass}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.button_item_update}>
              <button
                className={styles.btn_post}
                name="update_in4_pass"
                value="update"
              >
                Cập nhật mật khẩu
              </button>
            </div>
          </form>
        </div>
      ),
    },
  ];
  return (
    <div className={styles.right_container}>
      <div className={styles.cate}>
        <Link href="/">
          <span>Việc làm tự do / </span>
        </Link>
        <span>
          <a href="" className="">
            Quản lý tài khoản /{" "}
          </a>
        </span>
        <span>
          <a href="" className="">
            Cập nhật thông tin{" "}
          </a>
        </span>
      </div>

      <div className={styles.cover_update_info}>
        <div className={styles.update_info_left}>
          <div className={styles.cover_avatar_ud}>
            <img
              src="/job-1695950247.png"
              style={{ cursor: "pointer" }}
              alt="avatar-ic"
              className={styles.avatar_update}
            />
            <form
              method="POST"
              encType="multipart/form-data"
              id="form_update_avt"
            >
              <input
                name="image"
                id="image"
                type="file"
                accept="image/*"
                onChange="loadFile(event)"
                style={{ cursor: "pointer" }}
                className={`${styles.load_img} ${styles.img_update}`}
              />
              <button
                type="submit"
                value="update"
                name="button_update_avt"
                className={styles.button_update_avt}
                style={{ display: "none" }}
              />
            </form>
            <p className={styles.name_update_info}>Nguyen The Anh</p>
          </div>
          <div className={styles.item_info_left}>
            <img
              src="/ic_call_info.png"
              alt="phone-ic"
              className={styles.img_info_left}
            />
            <p className={styles.text_info_left}>0981632302</p>
          </div>
          <div className={styles.item_info_left}>
            <img
              src="/ic_mail_info.png"
              alt="email-ic"
              className={styles.img_info_left}
            />
            <p className={styles.text_info_left}>theanh28022003@gmail.com</p>
          </div>
          <div className={styles.item_info_left}>
            <img
              src="/ic_map_info.png"
              alt="city-ic"
              className={styles.img_info_left}
            />
            <p className={styles.text_info_left}>Quận Hoàng Mai - Hà Nội </p>
          </div>
        </div>
        <div className={styles.update_info_right}>
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            indicatorSize={(origin) => origin - 16}
          />
        </div>
      </div>
    </div>
  );
};

export default Capnhatthongtin;
