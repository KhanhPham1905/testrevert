import styles from "./hoan-thien-ho-so/index.module.css";
const Profile = () => {
  return (
    <>
      <div className={styles.profile_bottom}>
        <form
          className={`${styles.form_cover} ${styles.d_none} ${styles.rm_active} ${styles.active}`}
          encType="multipart/form-data"
          id="thong_tin"
          method="POST"
        //   onSubmit={validate_info}
        >
          <div className={styles.basic_info}>
            <div className={styles.cover_img_uv}>
              <img
                src="../thumb/2023/10/02/job-1696232048.png"
                id="ghost"
                className={`${styles.avatar_uv} ${styles.avatar_update}`}
                style={{ cursor: "pointer" }}
              />
              <input
                name="image"
                id="image"
                type="file"
                accept="image/*"
                // onChange={loadFile}
                style={{ cursor: "pointer" }}
                className={`${styles.load_img} ${styles.img_update}`}
              />
              <p className={styles.name_uv}>Khanh</p>
              {/* <img src="../images/ic_fix.png" alt="" className="icon_fix"> */}
            </div>
            <div className={styles.cover_info_right}>
              <div className={styles.input_item}>
                <p className={styles.title_input}>Số điện thoại</p>
                <input
                  type="number"
                  className={styles.input_style}
                  defaultValue={"0987654321"}
                  name="phone"
                  id="phone"
                />
                <label
                  htmlFor="phone"
                  id="phone_error"
                  className={`${styles.error_uv} ${styles.error}`}
                />
              </div>
              <div className={styles.input_item}>
                <p className={styles.title_input}>Tên ứng viên</p>
                <label
                  htmlFor="name_uv"
                  id="name_uv_error"
                  className={`${styles.error_uv} ${styles.error}`}
                />
                <input
                  type="text"
                  className={styles.input_style}
                  defaultValue="Khanh"
                  name="name"
                  id="name_uv"
                />
              </div>
              <div className={styles.input_item}>
                <p className={styles.title_input}>Giới tính</p>
                <select
                  className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`}
                  name="gt_ntd"
                  id="gt_ntd"
                >
                  <option value={0} selected="selected">
                    Nam
                  </option>
                  <option value={1}>Nữ</option>
                  <option value={2}>Khác</option>
                </select>
                <span
                  className={`${styles.select2} ${styles.select2_container} ${
                    styles.select2_container_default
                  }`}
                  dir="ltr"
                >
                  <span className={styles.selection}>
                    <span
                      className={`${styles.select2_selection} ${styles.select2_selection_single}`}
                      tabIndex={0}
                    >
                     
                      <span className={styles.select2_selection__arrow}>
                        <b role="presentation" />
                      </span>
                    </span>
                  </span>
                  <span className={`${styles.dropdown_wrapper}`} />
                </span>
              </div>
              <div className={styles.input_item}>
                <p className={styles.title_input}>Ngày sinh</p>
                <input
                  type="date"
                  className={styles.input_style}
                  defaultValue="1998-02-20"
                  name="ns_ntd"
                  id="ns_ntd"
                  max="2023-10-13"
                />
              </div>
              <div className={styles.input_item}>
                <p className={styles.title_input}>Tỉnh/ thành phố</p>
                <label
                  htmlFor="tp_ntd"
                  id="city_error"
                  className={`${styles.error_uv} ${styles.error}`}
                />
                <select
                  className={`${styles.input_style} ${styles.style_select} ${
                    styles.select2_hidden_accessible
                  }`}
                  name="tp_ntd"
                  id="tp_ntd"
                //   onChange={showqh}
                >
                  <option value="">Chọn tỉnh / thành phố</option>
                  <option value={1} selected>
                    Hà Nội
                  </option>
                  <option value={2}>Hải Phòng</option>
                  <option value={3}>Bắc Giang</option>
                  <option value={4}>Bắc Kạn</option>
                  <option value={5}>Bắc Ninh</option>
                  <option value={6}>Cao Bằng</option>
                  <option value={7}>Điện Biên</option>
                  <option value={8}>Hòa Bình</option>
                  <option value={9}>Hải Dương</option>
                  <option value={10}>Hà Giang</option>
                  <option value={11}>Hà Nam</option>
                  <option value={12}>Hưng Yên</option>
                  <option value={13}>Lào Cai</option>
                  <option value={14}>Lai Châu</option>
                  <option value={15}>Lạng Sơn</option>
                  <option value={16}>Ninh Bình</option>
                  <option value={17}>Nam Định</option>
                  <option value={18}>Phú Thọ</option>
                  <option value={19}>Quảng Ninh</option>
                  <option value={20}>Sơn La</option>
                  <option value={21}>Thái Bình</option>
                  <option value={22}>Thái Nguyên</option>
                  <option value={23}>Tuyên Quang</option>
                  <option value={24}>Vĩnh Phúc</option>
                  <option value={25}>Yên Bái</option>
                  <option value={26}>Đà Nẵng</option>
                  <option value={27}>Thừa Thiên Huế</option>
                  <option value={28}>Khánh Hòa</option>
                  <option value={29}>Lâm Đồng</option>
                  <option value={30}>Bình Định</option>
                  <option value={31}>Bình Thuận</option>
                  <option value={32}>Đắk Lắk</option>
                  <option value={33}>Đắk Nông</option>
                  <option value={34}>Gia Lai</option>
                  <option value={35}>Hà Tĩnh</option>
                  <option value={36}>Kon Tum</option>
                  <option value={37}>Nghệ An</option>
                  <option value={38}>Ninh Thuận</option>
                  <option value={39}>Phú Yên</option>
                  <option value={40}>Quảng Bình</option>
                  <option value={41}>Quảng Nam</option>
                  <option value={42}>Quảng Ngãi</option>
                  <option value={43}>Quảng Trị</option>
                  <option value={44}>Thanh Hóa</option>
                  <option value={45}>Hồ Chí Minh</option>
                  <option value={46}>Bình Dương</option>
                  <option value={47}>Bà Rịa Vũng Tàu</option>
                  <option value={48}>Cần Thơ</option>
                  <option value={49}>An Giang</option>
                  <option value={50}>Bạc Liêu</option>
                  <option value={51}>Bình Phước</option>
                  <option value={52}>Bến Tre</option>
                  <option value={53}>Cà Mau</option>
                  <option value={54}>Đồng Tháp</option>
                  <option value={55}>Đồng Nai</option>
                  <option value={56}>Hậu Giang</option>
                  <option value={57}>Kiên Giang</option>
                  <option value={58}>Long An</option>
                  <option value={59}>Sóc Trăng</option>
                  <option value={60}>Tiền Giang</option>
                  <option value={61}>Tây Ninh</option>
                  <option value={62}>Trà Vinh</option>
                  <option value={63}>Vĩnh Long</option>
                </select>
                <span
                  className={`${styles.select2} ${styles.select2_container} ${styles.select2_container_default}`}
                  style={{ width: "251.75px" }}
                >
                  <span className={`${styles.selection}`}>
                    <span
                      className={`${styles.select2_selection} ${
                        styles.select2_selection_single
                      }`}
                      tabIndex={0}
                    >
                      <span className={`${styles.select2_selection__arrow}`}>
                        <b role="presentation" />
                      </span>
                    </span>
                  </span>
                  <span
                    className={`${styles.dropdown_wrapper}`}
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className={styles.input_item}>
                <p className={styles.title_input}>Quận/ huyện</p>
                <label
                  htmlFor="qh_ntd"
                  id="district_error"
                  className={`${styles.error_uv} ${styles.error}`}
                />
                <select
                  name="qh_ntd"
                  id="qh_ntd"
                  className={`${styles.input_style} ${styles.style_select} ${
                    styles.select2_hidden_accessible
                  }`}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <option value="">Chọn quận / huyện</option>
                  <option value={66}>Quận Ba Đình</option>
                  <option value={67}>Quận Hoàn Kiếm</option>
                  <option value={68}>Quận Tây Hồ</option>
                  <option value={69} selected>
                    Quận Long Biên
                  </option>
                  <option value={70}>Quận Cầu Giấy</option>
                  <option value={71}>Quận Đống Đa</option>
                  <option value={72}>Quận Hai Bà Trưng</option>
                  <option value={73}>Quận Hoàng Mai</option>
                  <option value={74}>Quận Thanh Xuân</option>
                  <option value={75}>Huyện Sóc Sơn</option>
                  <option value={76}>Huyện Đông Anh</option>
                  <option value={77}>Huyện Gia Lâm</option>
                  <option value={78}>Quận Nam Từ Liêm</option>
                  <option value={79}>Huyện Thanh Trì</option>
                  <option value={80}>Quận Bắc Từ Liêm</option>
                  <option value={81}>Huyện Mê Linh</option>
                  <option value={82}>Quận Hà Đông</option>
                  <option value={83}>Thị xã Sơn Tây</option>
                  <option value={84}>Huyện Ba Vì</option>
                  <option value={85}>Huyện Phúc Thọ</option>
                  <option value={86}>Huyện Đan Phượng</option>
                  <option value={87}>Huyện Hoài Đức</option>
                  <option value={88}>Huyện Quốc Oai</option>
                  <option value={89}>Huyện Thạch Thất</option>
                  <option value={90}>Huyện Chương Mỹ</option>
                  <option value={91}>Huyện Thanh Oai</option>
                  <option value={92}>Huyện Thường Tín</option>
                  <option value={93}>Huyện Phú Xuyên</option>
                  <option value={94}>Huyện Ứng Hòa</option>
                  <option value={95}>Huyện Mỹ Đức</option>
                </select>
                <span
                  className={`${styles.select2} ${styles.select2_container} ${
                    styles.select2_container_default
                  }`}
                  style={{ width: "251.75px" }}
                >
                  <span className={`${styles.selection}`}>
                    <span
                      className={`${styles.select2_selection} ${
                        styles.select2_selection_single
                      }`}
                      tabIndex={0}
                    >
                      <span className={`${styles.select2_selection__arrow}`}>
                        <b role="presentation" />
                      </span>
                    </span>
                  </span>
                  <span
                    className={`${styles.dropdown_wrapper}`}
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.button_item_update}>
            <button
              type="submit"
              className={styles.btn_post}
              value="update"
              name="update_in4"
            >
              Cập nhật thông tin
            </button>
          </div>
        </form>
      </div>
      ;
    </>
  );
};
export default Profile;
