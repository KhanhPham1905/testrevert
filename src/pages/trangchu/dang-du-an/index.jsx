import React, { useState } from 'react';
import styles from './index.module.css'
import { Button, Modal, Divider } from 'antd';
import LoginNTD from '@/components/login/loginNTD';
import ChooseLogin from '@/components/login/chooseLogin'
const Dangviec = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = ()=>{
        setIsModalOpen(true);
    }
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
  return (
    <div className={styles.cover_container}>
        <div className={`${styles.container} ${styles.main_container}`}>
            <div className={`${styles.banner_project} ${styles.flex} ${styles.space} ${styles.center}`}>
                <div className={styles.text_banner_prj} data-aos="fade-right">
                    <h1 className={styles.title_banner_prj}>Đăng việc để thuê Freelancer</h1>
                    <p className={styles.p01_banner}>Hàng ngàn dự án đã đăng và thuê được freelancer thành công. Đăng việc để thuê Freelancer làm việc ngay!</p>
                                            <div className={styles.cover_btn_banner}>
                            <div className={styles.btn_login_ntd_s} onClick={showModal}>
                                <p  style={{ cursor: 'pointer' }} className={styles.dv_ban_tg}> <img src="/ic_14.png" alt="ban-thoi-gian" className={styles.ic_14}/> <span>Đăng việc bán thời gian</span></p>
                            </div>
                                <LoginNTD isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
                            <div className={styles.btn_login_ntd_s} onClick={showModal}>
                                <p  style={{ cursor: 'pointer' }} className={styles.dv_du_an}> <span>Đăng việc theo dự án</span></p>
                            </div>
                        </div>
                                    </div>
                <div className={styles.img_banner_tin} data-aos="fade-left">
                <img src="/banner_dangtin.png" alt=""/>
                </div>
            </div>
        </div>

        <div className={styles.bg_freelancer_nganh_nghe}>
            <div className={styles.container}>
                <div className={styles.cover_freelancer_nganh_nghe}>
                    <div className={styles.main_freelancer_nganh_nghe}>
                        <div className={styles.text_freelancere_nganh_nghe}>
                            <h2 className={styles.h2_frelancer_nganh_nghe} data-aos="fade-down">Tìm freelancer theo ngành nghề</h2>
                            <p className={styles.text_p_freelancer_nganh_nghe} data-aos="fade-up">Tìm kiếm những việc làm tốt theo từng ngành nghề , công việc đa dạng và chất lượng tại timviec365.vn</p>
                        </div>

                        <div className={styles.list_freelancer_nganh_nghe}>
                            <div className={styles.item_freelancer_nganh_nghe} data-aos="zoom-in">
                                <img src="/ic_15.png" alt="lap-trinh-ic" className={styles.ic_15}/>
                                <h3 className={styles.h3_freelancer_nganh_nghe}><a href="/tim-viec-lam-freelancer-it-lap-trinh-nn1.html" className={styles.title_nn}>IT &amp; Lập trình</a></h3>
                                <p className={styles.p_item_freelancer_nganh_nghe}>Lập trình phần mềm, website, ứng dụng di động, QA tester…</p>
                                <a href="/tim-viec-lam-freelancer-it-lap-trinh-nn1.html" className={styles.a_item_freelancer_nganh_nghe}><span>Chi tiết ngành nghề</span> <img src="/ic_18.png" alt="" className={styles.ic_18}/></a>
                            </div>

                            <div className={styles.item_freelancer_nganh_nghe} data-aos="zoom-in">
                                <img src="/ic_16.png" alt="thiet-ke-ic" className={styles.ic_15}/>
                                <h3 className={styles.h3_freelancer_nganh_nghe}><a href="/tim-viec-lam-freelancer-thiet-ke-nn2.html" className={styles.title_nn}>Thiết kế</a></h3>
                                <p className={styles.p_item_freelancer_nganh_nghe}>Xây dựng thương hiệu, website, video, poster, bao bì…</p>
                                <a href="/tim-viec-lam-freelancer-thiet-ke-nn2.html" className={styles.a_item_freelancer_nganh_nghe}><span>Chi tiết ngành nghề</span> <img src="/ic_18.png" alt="" className={styles.ic_18}/></a>
                            </div>

                            <div className={styles.item_freelancer_nganh_nghe} data-aos="zoom-in">
                                <img src="/ic_17.png" alt="dich-thuat-ic" className={styles.ic_15}/>
                                <h3 className={styles.h3_freelancer_nganh_nghe}><a href="/tim-viec-lam-freelancer-viet-lach-nn5.html" className={styles.title_nn}>Viết lách &amp; dịch thuật</a></h3>
                                <p className={styles.p_item_freelancer_nganh_nghe}>Biên tập chỉnh sửa nội dung, dịch thuật, viết sách...</p>
                                <a href="/tim-viec-lam-freelancer-viet-lach-nn5.html" className={styles.a_item_freelancer_nganh_nghe}><span>Chi tiết ngành nghề</span> <img src="/ic_18.png" alt="" className={styles.ic_18}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={`${styles.container} ${styles.main_container}`}>
            <div className={styles.main_freelancer_nganh_nghe}>
                <div className={styles.text_freelancere_nganh_nghe}>
                    <h2 className={styles.h2_frelancer_nganh_nghe} data-aos="fade-up">Lý do nên tuyển Freelancer tại timviec365.vn</h2>
                </div>

                <div className={styles.cover_sub_freelancer_nganh_nghe}>
                    <div className={styles.main_sub_freelancer_nganh_nghe}>
                        <div className={styles.sub_freelancer_nganh_nghe} data-aos="flip-up">
                            <div className={styles.it_sub_freelancer}>
                                <div className={styles.cover_text_nn}>
                                    <p className={styles.p1_text_nn}>1</p>

                                    <div className={styles.main_text_nn}>
                                        <p className={styles.p01_main_text_nn}>Tuyển Freelancer hiệu quả nhất</p>
                                        <p className={styles.p02_main_text_nn}>Đăng việc làm miễn phí, thu hút những freelancer giỏi nhất, tiết kiệm chi phí tuyển dụng</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.it_sub_freelancer}>
                                <img src="/img_dang_du_an01.png" alt="dang-du-an" className={styles.img_dang_du_an01}/>
                            </div>
                        </div>
                        <div className={styles.sub_freelancer_nganh_nghe} data-aos="flip-up">
                            <div className={styles.it_sub_freelancer}>
                                <img src="/img_dang_du_an02.png" alt="dang-du-an" className={styles.img_dang_du_an02}/>
                            </div>
                            
                            <div className={styles.it_sub_freelancer}>
                                <div className={styles.cover_text_nn}>
                                    <p className={styles.p1_text_nn}>2</p>
                                    <div className={styles.main_text_nn}>
                                        <p className={styles.p01_main_text_nn}>Chọn Freelancer ưng ý nhất</p>
                                        <p className={styles.p02_main_text_nn}>So sánh các ứng viên, kho dữ liệu ứng viên phong phú, tìm kiếm những ứng viên phù hợp với tuyển dụng</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.sub_freelancer_nganh_nghe} data-aos="flip-up">
                            <div className={styles.it_sub_freelancer}>
                                <div className={styles.cover_text_nn}>
                                    <p className={styles.p1_text_nn}>3</p>

                                    <div className={styles.main_text_nn}>
                                        <p className={styles.p01_main_text_nn}>Hỗ trợ 24/7</p>
                                        <p className={styles.p02_main_text_nn}>Đội ngũ chăm sóc khách hàng 24/7 luôn sẵn sàng hỗ trợ bạn để giải quyết các vân đề cấp bách giúp công việc của bản luôn trôi chảy.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.it_sub_freelancer}>
                                <img src="/dang_tin_3.png" alt="dang-tin" className={styles.img_dang_du_an01}/>
                            </div>
                        </div>

                        <div className={styles.btn_dang_viec_ngay} style={{ cursor: 'pointer' }} data-aos="zoom-in-up" onClick={showModal}>
                                                            <div className={`${styles.dang_viec_ngay} ${styles.btn_login_ntd_s}`}>
                                    <img src="/ic_14.png" alt="dang-tin" className={styles.ic_dang_viec}/> <span>Đăng việc ngay</span>
                                </div>
                        </div>
                    </div>             
                </div>           
            </div>
        </div>
    </div>
  )
}

export default Dangviec;
