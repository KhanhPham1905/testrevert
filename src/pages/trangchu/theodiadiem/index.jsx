import styles from "./index.module.css";
import Link from "next/link";
const TheoDiadiem = () => {
  return (
    <div className={styles.cover_item02_home}>
      <div className={styles.container}>
        <div className={styles.cover_job}>
          <div className={`${styles.job} ${styles.job_fix}`}>
            <h2 className={styles.title_h2_job} data-aos="fade-up">
              Việc làm Freelancer theo địa điểm
            </h2>
            <p className={styles.text_p_job} data-aos="zoom-in">
              Top nơi làm việc tại Việt Nam
            </p>
            <ul className={styles.list_diadiemviec}>
              <li className={styles.item_diadiem} data-aos="fade-down">
                <Link href="/tim-viec-lam-freelancer.html">
                  <img
                    className={`${styles.img_border} ${styles.lazyloaded}`}
                    src="/img_vieclam01.png"
                    data-src="/img_vieclam01.png"
                    alt="Hà Nội"
                  />
                  <div className={styles.text_vieclam}>
                    <p className={styles.text01_vieclam}>Hà Nội</p>
                    <p className={styles.text02_vieclam}>85373 Việc làm</p>
                  </div>
                </Link>
              </li>
              <li className={styles.item_diadiem} data-aos="fade-down">
                <Link href="/tim-viec-lam-freelancer.html">
                  <img
                    className={`${styles.lazyloaded}`}
                    src="/img_vieclam02.png"
                    data-src="/img_vieclam02.png"
                    alt="Hồ Chí Minh"
                  />
                  <div className={styles.text_vieclam}>
                    <p className={styles.text01_vieclam}>Hồ Chí Minh</p>
                    <p className={styles.text02_vieclam}>0 Việc làm</p>
                  </div>
                </Link>
              </li>
              <li className={styles.item_diadiem} data-aos="fade-down">
                <Link href="/tim-viec-lam-freelancer.html">
                  <img
                    className={`${styles.lazyloaded}`}
                    src="/img_vieclam03.png"
                    data-src="/img_vieclam03.png"
                    alt="Huế"
                  />
                  <div className={styles.text_vieclam}>
                    <p className={styles.text01_vieclam}>Huế</p>
                    <p className={styles.text02_vieclam}>0 Việc làm</p>
                  </div>
                </Link>
              </li>
              <li className={styles.item_diadiem} data-aos="fade-down">
               <Link href="/tim-viec-lam-freelancer.html">
                  <img
                    className={`${styles.lazyloaded}`}
                    src="/img_vieclam04.png"
                    data-src="/img_vieclam04.png"
                    alt="Đà Nẵng"
                  />
                  <div className={styles.text_vieclam}>
                    <p className={styles.text01_vieclam}>Đà Nẵng</p>
                    <p className={styles.text02_vieclam}>0 Việc làm</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoDiadiem;
