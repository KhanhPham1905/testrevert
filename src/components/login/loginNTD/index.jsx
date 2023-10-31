import React from 'react'
import { Button, Modal, Divider } from 'antd';
import styles from './index.module.css'
import Link from 'next/link';
const loginNTD = ({isModalOpen, setIsModalOpen}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal 
        closable={false}
        // centered={true}
        footer={false} 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
      >
          <div>
              <div className={styles.popup_login_top}>
                  <p className={styles.title_popup_login}>Đăng nhập tài khoản NTD</p>
                  <img src="/ic_x02.png" data-src="../images/ic_x02.png" alt="icon_x_login" className={`${styles.icon_x_login} ${styles.lazyloaded}`} onClick={handleCancel}/>
              </div>

                  <div  className={styles.popup_login_bottom}>
                      <div className={styles.sub_login_bottom}>
                      <div className="" style={{width: '100%',float: 'left !important',color: '#4C5BD4', border: '1px solid #4C5BD4',padding: '10px 20px',borderRadius: '5px'}}>
                          <p className={styles.text_it_bold}>Nhà tuyển dụng</p>
                          <p className={styles.text_it_normal}>Đăng nhập để tìm việc làm</p>
                      </div>
                      </div>
                      <div className={`${styles.main_login_bottom} ${styles.d_none} ${styles.active}`}>
                          <form action="" className={styles.form_cover} id="form_login_ntd_popup" method="POST" onsubmit="return false;" novalidate="novalidate">
                              <div className={styles.cover_input}>
                                  <label for="login_email_ntd" className="label_style">
                                      <p className={styles.title_input}>Email NTD <span>*</span></p>
                                  </label>
                                  <input name="login_email_ntd_popup" type="email" id="login_email_ntd_popup" placeholder="Nhập địa chỉ email" className={styles.input_style} fdprocessedid="jcsfo9"/>
                                  <img src="/ic_mail.png" data-src="../images/ic_mail.png" className={`${styles.img_input} ${styles.lazyloaded}`} alt="ic_email"/>
                              </div>

                              <div className={styles.cover_input}>
                                  <label for="login_pass_ntd" className={styles.label_style}>
                                      <p className={styles.title_input}>Mật khẩu <span>*</span></p>
                                  </label>
                                  <input name="login_pass_ntd_popup" type="password" id="login_pass_ntd_popup" placeholder="Nhập mật khẩu" className={styles.input_style} fdprocessedid="imnwkm"/>
                                  <img src="/ic_mk.png" className={styles.img_input} alt="ic_mk"/>
                              </div>
                              <Link href="/quen-mat-khau-flc.html" className={styles.quen_mk}>Quên mật khẩu?</Link>

                              <div className={styles.cover_btn_login_popup}>
                                  <button type="submit" onclick="login('ntd_pop')" className={styles.btn_login_popup} fdprocessedid="ubxp2">Đăng nhập</button>
                              </div>
                              <div className={styles.text_popup}>
                                  <p className={styles.text_p_popup}>Bạn chưa có tài khoản? <Link href="/dang-ki-freelancer.html" className={`${styles.color_4c} ${styles.register_flc}`}>Đăng ký</Link> </p>
                              </div>
                          </form>
                      </div>
              </div>
          </div>
        </Modal>
      </>
  )
}

export default loginNTD
