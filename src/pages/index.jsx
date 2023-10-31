import { Select } from "antd";
import styles from "./index.module.css";
import TheoNghe from "./trangchu/theonghe";
import { useEffect, useState } from "react";
import axios from "axios";
import TheoDuAn from "./trangchu/theoduan";
import Banthoigian from "./trangchu/banthoigian";
import TheoDiadiem from "./trangchu/theodiadiem";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const TrangChu = () => {
  const router = useRouter();
  const [getCano, setCano] = useState('');
  const option = [
    {
      value: 1,
      label: "IT & Lập trình",
    },
    { value: 2, label: "Thiết kế" },
    { value: 3, label: "Video" },
    { value: 4, label: "Xây dựng" },
    { value: 5, label: "Viết lách" },
    { value: 6, label: "Kinh doanh" },
    { value: 7, label: "Dịch thuật" },
  ];

  useEffect(()=>{
    const pathname = new URL(window.location.href).pathname;
        const origin = new URL(window.location.href).origin;
        setCano(origin + pathname)
  }, [])

  return (
    <>
      <Head>
      <meta name="robots" content="noindex,nofollow" />
        <title>
          Tìm Việc Làm Freelancer Mới Nhất, Lương Cao | Freelancer.timviec365.vn
        </title>
        <meta
          name="description"
          content="Danh sách việc làm Freelancer mới nhất đang tuyển dụng. Tìm việc làm freelancer lương cao, hàng đầu. Tham khảo trên hệ thống freelancer.timviec365.vn"
        />
        <meta
          name="Keywords"
          content="việc làm freelancer, tìm việc làm freelancer"
        />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Tìm Việc Làm Freelancer Mới Nhất, Lương Cao | Freelancer.timviec365.vn"
        />
        <meta
          property="og:description"
          content="Danh sách việc làm Freelancer mới nhất đang tuyển dụng. Tìm việc làm freelancer lương cao, hàng đầu. Tham khảo trên hệ thống freelancer.timviec365.vn"
        />
        <meta
          property="og:image"
          content="/banner_home_1024.png"
        />
        <link rel="canonical" href={getCano} />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Danh sách việc làm Freelancer mới nhất đang tuyển dụng. Tìm việc làm freelancer lương cao, hàng đầu. Tham khảo trên hệ thống freelancer.timviec365.vn"
        />
      </Head>
      <div className={styles.body}>
        <div className={styles.cover_container_cover_background}>
          <div className={styles.container_container_relative}>
            <div className={styles.banner_home}>
              {/* <div class="content_banner_home"> */}
              <h1 className={styles.title_home} data-aos="fade-down">
                Tìm việc làm freelancer mới nhất
              </h1>
              {/* <div class="cover_main_search"> */}
              {/* thanh search */}
              <form
                action=""
                className={styles.cover_search}
                autoComplete="off"
                method="POST"
              >
                <div className={styles.main_search}>
                  <div
                    className={`${styles.cover_input_search} ${styles.autocomplete}`}
                  >
                    <input
                      type="text"
                      placeholder="Nhập từ khóa"
                      defaultValue=""
                      name="keyword"
                      id="keyword"
                      className={`${styles.input_search} ${styles.keyword}`}
                      autoComplete="off"
                      onKeyDown={(event) => {
                        if (event.keyCode === 13)
                          document.getElementById("search").click();
                      }}
                    />
                  </div>
                  <div className={styles.line} />
                  <div className={styles.cover_select_search}>
                    <select
                      name="search_nn"
                      id="search_nn"
                      className={`${styles.select_search} ${styles.select2_hidden_accessible}`}
                      data-select2-id="select2-data-search_nn"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option value="" data-select2-id="select2-data-2-wyo4">
                        Chọn ngành nghề
                      </option>
                      <option value={1}>IT &amp; Lập trình</option>
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
                      dir="ltr"
                      data-select2-id="select2-data-1-5yuk"
                      style={{ width: "129.6px" }}
                    >
                      <span className={styles.selection}>
                        <span
                          className={`${styles.select2_selection} ${styles.select2_selection_single}`}
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex={0}
                          aria-disabled="false"
                          aria-labelledby="select2-search_nn-container"
                          aria-controls="select2-search_nn-container"
                        >
                          <span
                            className={`${styles.select2_selection_arrow}`}
                            role="presentation"
                          >
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
                  <div className={styles.line} style={{marginLeft: "10px"}} />
                  <div className={styles.cover_select_search}>
                    <select
                      name="search_tp"
                      id="search_tp"
                      className={`${styles.select_search} ${styles.select2_hidden_accessible}`}
                      data-select2-id="select2-data-search_tp"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <option value="" data-select2-id="select2-data-4-arnr">
                        Chọn tỉnh thành
                      </option>
                      <option value={1}>Hà Nội</option>
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
                      dir="ltr"
                      data-select2-id="select2-data-3-k6lz"
                      style={{ width: "124.8px" }}
                    >
                      <span className={styles.selection}>
                        <span
                          className={`${styles.select2_selection} ${styles.select2_selection_single}`}
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex={0}
                          aria-disabled="false"
                          aria-labelledby="select2-search_tp-container"
                          aria-controls="select2-search_tp-container"
                        >
                          <span
                            className={`${styles.select2_selection__arrow}`}
                            role="presentation"
                          >
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
                  <div className={styles.btn_search}>
                    <button type="submit" name="search" id="search">
                      <img
                        src="/ic_search.png"
                        data-src="/ic_search.png"
                        alt="Tìm kiếm"
                        className={` ${styles.lazyloaded}`}
                      />
                      <span className={styles.span_search}>Tìm kiếm</span>
                    </button>
                  </div>
                </div>
              </form>

              <div className={styles.nganh_nghe_noi_bat}>
                <p className={styles.p_nganh_nghe}>Ngành nghề nổi bật:</p>
                <div className={styles.list_nganh_nghe}>
                  <div className={`${styles.it_nganh_nghe}`} data-aos="zoom-in">
                    <Link href="/tim-viec-lam-freelancer.html">
                      <img
                        className={`${styles.img_nganh_nghe} ${styles.lazyloaded}`}
                        src="/img_home01.png"
                        data-src="/img_home01.png"
                        alt="php-ic"
                      />
                      <p>Lập trình php</p>
                    </Link>
                  </div>
                  <div className={`${styles.it_nganh_nghe}`} data-aos="zoom-in">
                    <Link href="/tim-viec-lam-freelancer.html">
                      <img
                        className={`${styles.img_nganh_nghe} ${styles.lazyloaded}`}
                        src="/img_home02.png"
                        data-src="/img_home02.png"
                        alt="design-ic"
                      />
                      <p>Thiết kế</p>
                    </Link>
                  </div>
                  <div className={`${styles.it_nganh_nghe}`} data-aos="zoom-in">
                    <Link href="/tim-viec-lam-freelancer.html">
                      <img
                        className={`${styles.img_nganh_nghe} ${styles.lazyloaded}`}
                        src="/img_home03.png"
                        data-src="/img_home03.png"
                        alt="content-ic"
                      />
                      <p>Biên tập viên</p>
                    </Link>
                  </div>
                  <div className={`${styles.it_nganh_nghe}`} data-aos="zoom-in">
                    <Link href="/tim-viec-lam-freelancer.html">
                      <img
                        className={`${styles.img_nganh_nghe} ${styles.lazyloaded}`}
                        src="/img_home04.png"
                        data-src="/img_home04.png"
                        alt="youtube-ic"
                      />
                      <p>Youtube</p>
                    </Link>
                  </div>
                  <div className={`${styles.it_nganh_nghe}`} data-aos="zoom-in">
                    <Link href="/tim-viec-lam-freelancer.html">
                      <img
                        className={`${styles.img_nganh_nghe} ${styles.lazyloaded}`}
                        src="/img_home05.png"
                        data-src="/img_home05.png"
                        alt="trans-ic"
                      />
                      <p>Dịch thuật</p>
                    </Link>
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        <TheoNghe />
        <TheoDuAn />
        <Banthoigian />
        <TheoDiadiem />
      </div>
    </>
  );
};
export default TrangChu;
