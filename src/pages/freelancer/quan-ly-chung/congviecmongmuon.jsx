import { useState } from "react";
import styles from "./index.module.css";

const Congviecmongmuon = () => {
  const [status, setStatus] = useState(false);
  const [event, setEvent] = useState(false);
  const setStatusLG = () => {
    setStatus(true);
    setEvent(false)
  };
  const setStatusEV = () => {
    setEvent(true);
    setStatus(false);
  };
  return (
    <div className={styles.profile_bottom}>
      <form
        action=""
        className={`${styles.form_cover} ${styles.d_none} ${styles.rm_active} ${styles.active}`}
        id="cong_viec_mm"
        method="POST"
        onSubmit={() => validate_salary()}
      >
        <div className={styles.job_dream}>
          <div className={styles.input_item}>
            <p className={styles.title_input}>Nghề nghiệp</p>
            <input
              type="text"
              className={styles.input_style}
              name="nghe_nghiep"
              defaultValue="it"
              placeholder="Nghề nghiệp"
            />
          </div>
          {/* soma */}
          <div className={styles.input_item}>
            <p className={styles.title_input}>Hình thức làm việc</p>
            <select
              name="hinh_thuc"
              id="hinh_thuc"
              className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`}
            >
              <option value="">Chọn hình thức</option>
              <option value={1}>Toàn thời gian cố định</option>
              <option value={2}>Toàn thời gian tạm thời</option>
              <option value={3}>Bán thời gian</option>
              <option value={4} selected="selected">
                Bán thời gian tạm thời
              </option>
              <option value={5}>Hợp đồng</option>
              <option value={6}>Khác</option>
            </select>
            <span
              className={`${styles.select2} ${styles.select2_container} ${styles.select2_container_default}`}
              style={{ width: "auto" }}
            >
              <span className={styles.selection}>
                <span
                  className={`${styles.select2_selection} ${styles.select2_selection_single}`}
                >
                  <span className={styles.select2_selection_arrow}>
                    <b />
                  </span>
                </span>
              </span>
              <span className={styles.dropdown_wrapper} aria-hidden="true" />
            </span>
          </div>
          <div className={styles.input_item}>
            <p className={styles.title_input}>Công việc mong muốn</p>
            <select
              name="cong_viec"
              id="cong_viec"
              className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`}
            >
              <option value="">Chọn công việc</option>
              <option value={1} selected="">
                IT & Lập trình
              </option>
              <option value={2}>Thiết kế</option>
              <option value={3}>Video</option>
              <option value={4}>Xây dựng</option>
              <option value={5}>Viết lách</option>
              <option value={6}>Dịch thuật</option>
              <option value={7}>Kinh doanh</option>
              <option value={8}>Nhập liệu</option>
              <option value={9}>Kế toán</option>
              <option value={10}>Luật</option>
              <option value={11}>Kiến trúc</option>
              <option value={12}>Lĩnh vực khác</option>
            </select>
            <span
              className={`${styles.select2} ${styles.select2_container} ${styles.select2_container_default}`}
              style={{ width: "auto" }}
            >
              <span className={styles.selection}>
                <span
                  className={`${styles.select2_selection} ${styles.select2_selection_single}`}
                >
                  <span className={styles.select2_selection_arrow}>
                    <b />
                  </span>
                </span>
              </span>
              <span className={styles.dropdown_wrapper} aria-hidden="true" />
            </span>
          </div>
          <div className={styles.input_item}>
            <p className={styles.title_input}>Nơi làm việc mong muốn</p>
            <select
              name="thanh_pho"
              id="thanh_pho"
              className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`}
            >
              <option className={styles.dia_diem} value={1} selected="">
                Hà Nội
              </option>
              <option className={styles.dia_diem} value={2}>
                Hải Phòng
              </option>
              <option className={styles.dia_diem} value={3}>
                Bắc Giang
              </option>
              {/* Danh sách thành phố khác */}
            </select>
            <span
              className={`${styles.select2} ${styles.select2_container} ${styles.select2_container_default}`}
              style={{ width: "auto" }}
            >
              <span className={styles.selection}>
                <span
                  className={`${styles.select2_selection} ${styles.select2_selection_single}`}
                >
                  <span className={styles.select2_selection_arrow}>
                    <b />
                  </span>
                </span>
              </span>
              <span className={styles.dropdown_wrapper} aria-hidden="true" />
            </span>
          </div>
          <div className={styles.input_item_tab}>
            <div className={styles.cover_tab_input}>
              <p className={`${styles.title_input} ${styles.title_input_tab}`}>
                Mức lương mong muốn
              </p>
              <div
                className={styles.ht_luong_tong}
                onClick={(e) => {
                  setStatusLG(e);
                }}
              >
                <p className={styles.tab} data-tab="co_dinh">
                  Cố định
                </p>
                <input
                  type="radio"
                  name="ht_luong"
                  className={styles.loai_luong}
                  value={1}
                  defaultChecked=""
                />
              </div>
              <div
                className={styles.ht_luong_tong}
                onClick={(e) => {
                  setStatusEV(e);
                }}
              >
                <p
                  className={`${styles.tab} ${styles.active}`}
                  data-tab="uoc_luong"
                >
                  Ước lượng
                </p>
                <input
                  type="radio"
                  name="ht_luong"
                  className={styles.loai_luong}
                  value={2}
                />
              </div>
            </div>
            {status === true ? (
              <div
                id="co_dinh"
                className={`${styles.tab_both} ${styles.d_none} ${styles.input_item}`}
              >
                <input
                  type="number"
                  name="luong"
                  id="luong"
                  className={styles.input_style}
                  placeholder="Nhập mức lương (VNĐ)"
                  defaultValue={10000000}
                />
                <label
                  htmlFor="luong"
                  id="luong_error"
                  className={`${styles.error_uv} ${styles.error}`}
                />
              </div>
            ) : <div
            className={`${styles.tab_both} ${styles.cover_input_style} ${styles.d_none} ${styles.active}`}
            id="uoc_luong"
            style={{width: "47%"}}
          >
            <div className={styles.w_50}>
              <input
                type="number"
                name="luong_1"
                id="luong_1"
                className={styles.input_style}
                placeholder="Từ ... (VNĐ)"
                defaultValue={0}
              />
              <label
                htmlFor="luong_1"
                id="luong_1_error"
                className={`${styles.error_uv} ${styles.error}`}
              />
            </div>
            <div className={styles.dash}>-</div>
            <div className={styles.w_50}>
              <input
                type="number"
                name="luong_2"
                id="luong_2"
                className={styles.input_style}
                placeholder="Đến ... (VNĐ)"
                defaultValue={0}
              />
              <label
                htmlFor="luong_2"
                id="luong_2_error"
                className={`${styles.error_uv} ${styles.error}`}
              />
            </div>
          </div>
          }
           
            <div className={styles.input_item}>
              <select
                name="ht_tra_luong"
                id="ht_tra_luong"
                className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`}
              >
                <option value={1}>Ngày</option>
                <option value={2}>Tuần</option>
                <option value={3} selected="selected">
                  Tháng
                </option>
                <option value={4}>Năm</option>
              </select>
              <span
                className={`${styles.select2} ${styles.select2_container} ${styles.select2_container_default}`}
                style={{ width: "auto" }}
              >
                <span className={styles.selection}>
                  <span
                    className={`${styles.select2_selection} ${styles.select2_selection_single}`}
                  >
                    <span className={styles.select2_selection_arrow}>
                      <b />
                    </span>
                  </span>
                </span>
                <span className={styles.dropdown_wrapper} aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles.button_item_update} ${styles.text_center}`}>
          <button className={styles.btn_post} value="update" name="update_cvmn">
            Cập nhật thông tin
          </button>
        </div>
      </form>
    </div>
  );
};
export default Congviecmongmuon;
