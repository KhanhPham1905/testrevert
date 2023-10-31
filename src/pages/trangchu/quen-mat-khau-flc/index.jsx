import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'
const index = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={`${styles.container} ${styles.relative_banner}`}>
            <div className={styles.cover_content_banner_both}>
                <div className={styles.content_banner}>
                    <Link href="/"><span>Trang chủ / </span></Link>
                    <span>Quên mật khẩu</span>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.cover_container}>
        <div className={`${styles.container} ${styles.main_container}`}>
            <div className={styles.main_cover_container}>
                <div className={styles.main_cover_avatar}>
                    <div className={styles.cover_avatar}>
                        <p className={styles.title_forgot_pass}>Quên mật khẩu</p>
                        <form method="post" onsubmit="return checkE()" id="quen_mk">
                            <div className={styles.forgot_style}>
                                <input type="text" name="email" id="email" className={styles.input_forgot} placeholder="Nhập email" fdprocessedid="oujomd"/>
                            </div>
                            <p style={{fontSize: '18px', color: 'red'}} id="error"></p>
                            <p className={`${styles.text_p_fg_pass} ${styles.top-10}`}>Mời bạn nhập email đã đăng ký tài khoản trên Freelancer.timviec365.vn</p>
                            <p className={styles.text_p_fg_pass}>Chúng tôi sẽ gửi mã link, hãy kiểm tra hòm thư Email của bạn!</p>
                            <button type="submit" className={styles.popup_login} name="pass_wr" id="pass_wr" fdprocessedid="dv92g">Lấy lại mật khẩu</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default index
