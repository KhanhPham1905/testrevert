import styles from "./hoan-thien-ho-so/index.module.css";

const Gioithieubanthan = () => {
  return (
    <>
      <div className={styles.profile_bottom}>
        <form
          action=""
          className={`${styles.form_cover} ${styles.d_none} ${styles.rm_active} ${styles.active}`}
          id="gt_ban_than"
          method="POST"
        >
          <div className={styles.yourself}>
            <p className={styles.title_input}>Kinh nghiệm làm việc</p>
            <select
              name="kinh_nghiem"
              id="kinh_nghiem"
              className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`}
              tabIndex={-1}
              aria-hidden="true"
            >
              <option value="">Chọn kinh nghiệm</option>
              <option value={1}>Chưa có kinh nghiệm</option>
              <option value={2}>0 - 1 năm kinh nghiệm</option>
              <option value={3}>1 - 2 năm kinh nghiệm</option>
              <option value={4}>2 - 5 năm kinh nghiệm</option>
              <option value={5}>5 - 10 năm kinh nghiệm</option>
              <option value={6}>Hơn 10 năm kinh nghiệm</option>
            </select>
            <span
              className={`${styles.select2} ${styles.select2_container} ${styles.select2_container_default} ${styles.select2_container_below}`}
              style={{ width: "auto" }}
            >
              <span className={styles.selection}>
                <span
                  className={`${styles.select2_selection} ${styles.select2_selection_single}`}
                  tabIndex={0}
                >
                  <span className={styles.select2_selection_arrow}>
                    <b role="presentation" />
                  </span>
                </span>
              </span>
              <span className={styles.dropdown_wrapper} aria-hidden="true" />
            </span>
            <p className={styles.title_input}>Giới thiệu bản thân</p>
            <textarea
              name="mo_ta"
              id="mo_ta"
              cols={30}
              rows={6}
              className={`${styles.input_style} ${styles.text_style}`}
              placeholder="giới thiệu bản thân"
              defaultValue={""}
            />
          </div>
          <div className={`${styles.button_item_update} ${styles.text_center}`}>
            <button
              className={`${styles.btn_post}`}
              value="update"
              name="update_kn"
            >
              Cập nhật thông tin
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Gioithieubanthan;
