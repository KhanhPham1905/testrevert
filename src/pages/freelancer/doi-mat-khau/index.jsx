import React from "react";
import styles from "./index.module.css"
import Link from "next/link";
const index = () => {
  return (
    <div>
      <div className={styles.right_container}>
        {/* <!-- start --> */}
        <div className={styles.cate}>
          <span>
            <Link href="/">Việc làm tự do /</Link>
          </span>
          <span>
            <a href="/doi-mat-khau-uv.html" className="">
              Đổi mật khẩu ứng viên{" "}
            </a>
          </span>
        </div>
        {/* <!-- end --> */}

        {/* <!-- form đổi mật khẩu --> */}
        <form
          action=""
          className={styles.form_cover}
          id="doi_pass_uv"
          method="POST"
          onsubmit=""
          novalidate="novalidate"
        >
          <div className={styles.main_right_container}>
            <div className={styles.cover_input_uv}>
              <div className={styles.changepass_uv}>
                <p className={styles.title_input}>
                  Mật khẩu cũ <span>*</span>
                </p>
                <input
                  type="password"
                  placeholder="Nhập mật khẩu cũ"
                  className={styles.input_style}
                  name="password"
                  id="password"
                  fdprocessedid="acjt1e"
                />
                <img
                  src="/hide_password.png"
                  className={styles.s_h_pass}
                  alt=""
                />
              </div>

              <div className={styles.changepass_uv}>
                <p className={styles.title_input}>
                  Mật khẩu mới <span>*</span>
                </p>
                <input
                  type="password"
                  placeholder="Nhập mật khẩu mới"
                  className={styles.input_style}
                  name="newpassword"
                  id="newpassword"
                  fdprocessedid="hq6gb8"
                />
                <img
                  src="/hide_password.png"
                  className={styles.s_h_pass}
                  alt=""
                />
              </div>

              <div className={styles.changepass_uv}>
                <p className={styles.title_input}>
                  Nhập lại mật khẩu mới <span>*</span>
                </p>
                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu mới"
                  className={styles.input_style}
                  name="renewpassword"
                  id="renewpassword"
                  fdprocessedid="t5h1s3"
                />
                <img
                  src="/hide_password.png"
                  className={styles.s_h_pass}
                  alt=""
                />
              </div>

              <div className={styles.changepass_uv}>
                <button
                  type="submit"
                  className={styles.btn_changepass_uv}
                  name="submit_pass"
                  fdprocessedid="2cfdjq"
                >
                  Đổi mật khẩu
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
