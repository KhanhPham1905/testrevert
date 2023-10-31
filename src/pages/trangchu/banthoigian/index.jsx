import styles from "./index.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const Banthoigian = () => {
  const router = useRouter();
  return (
    <div className={styles.cover_item_home}>
  <div className={styles.container}>
    <div className={styles.cover_job}>
      <div className={`${styles.job} ${styles.job_fix}`} style={{ visibility: "unset" }}>
        <h2 className={styles.title_h2_job} data-aos="fade-up">
          Việc làm Freelancer bán thời gian
        </h2>
        <p className={styles.text_p_job} data-aos="zoom-in">
          1204+ Việc làm bán thời gian
        </p>
        <Link href="/tim-viec-lam-freelancer-ban-thoi-gian.html" className={styles.see_all}>
          Xem tất cả{" "}
          <span className={styles.ic_right}>
            <img
              className={`${styles.lazyloaded} ${styles.ic_right}`}
              src="/ic_right.png"
              data-src="/ic_right.png"
              alt="all-ic"
            />
          </span>
        </Link>
        <div className={`${styles.cover_it_job} ${styles.cover_it_job_fix}`}>
          <div className={styles.item_job02}>
            <img
              className={`${styles.img_user_job02} ${styles.lazyloaded}`}
              src="/job-1697186172.jpg"
              data-src="/job-1697186172.jpg"
              alt="Nguyen The Anh"
              onClick={() => {router.push('/:jobname-vl:id.html')}}
            />
            <div className={styles.text_item_job_02}>
              <Link href="/:jobname-vl:id.html">
                <h3 className={styles.h3_text_it_02}>thiết kế web2</h3>
              </Link>
              <div className={styles.info_user_job02}>
                <Link href="/nha-tuyen-dung-:name-ntd:id">
                  <p className={styles.it_info_user}>
                    <img
                      className={`${styles.lazyloaded} ${styles.ic_home03}`}
                      src="/ic_home03.png"
                      data-src="/ic_home03.png"
                      alt="user-ic"
                    />
                    <span>Nguyen The Anh</span>
                  </p>
                </Link>
                <p className={styles.it_info_user}>
                  <img
                    className={`${styles.lazyloaded} ${styles.ic_home02}`}
                    src="/ic_home02.png"
                    data-src="/ic_home02.png"
                    alt="user-ic"
                  />
                  <span>Bán thời gian </span>
                </p>
                <p className={styles.it_info_user}>
                  <img
                    className={`${styles.lazyloaded} ${styles.ic_home01}`}
                    src="/ic_home01.png"
                    data-src="/ic_home01.png"
                    alt="city-ic"
                  />
                  <span>Bắc Giang</span>
                </p>
              </div>
              <p className={`${styles.text_content_it01} ${styles.flex} ${styles.space}`}>
                <span>1 lượt đặt giá</span>
                <span>Hết hạn: 30-10-2023</span>
              </p>
              <div className={styles.tag_nganh_nghe}>
                <Link href="/tim-viec-lam-freelancer.html">
                  <p className={styles.it_tag_nganh_nghe}>HTML</p>
                </Link>
              </div>
            </div>
            <div className={styles.btn_right_home}>
              <p
                className={styles.dat_gia}
                onClick={() => showLogin()}
                data-ntd_id={116604}
                data-date="30-10-2023"
                data-tittle="thiết kế web2"
                data-id={110565}
              >
                Đặt giá
              </p>
              <p className={styles.gia}> 900.000 VNĐ </p>
            </div>
          </div>
          <div className={styles.item_job02}>
            <img
              className={`${styles.img_user_job02} ${styles.lazyloaded}`}
              src="/job-1697184356.jpg"
              data-src="/job-1697184356.jpg"
              alt="Nguyen The Anh"
              onClick={() => {router.push('/:jobname-vl:id.html')}}
            />
            <div className={styles.text_item_job_02}>
              <Link href="/:jobname-vl:id.html">
                <h3 className={styles.h3_text_it_02}>thiết kế web </h3>
              </Link>
              <div className={styles.info_user_job02}>
                <Link href="/nha-tuyen-dung-:name-ntd:id">
                  <p className={styles.it_info_user}>
                    <img
                      className={`${styles.lazyloaded} ${styles.ic_home03}`}
                      src="/ic_home03.png"
                      data-src="/ic_home03.png"
                      alt="user-ic"
                    />
                    <span>Nguyen The Anh</span>
                  </p>
                </Link>
                <p className={styles.it_info_user}>
                  <img
                    className={`${styles.lazyloaded} ${styles.ic_home02}`}
                    src="/ic_home02.png"
                    data-src="/ic_home02.png"
                    alt="user-ic"
                  />
                  <span>Toàn thời gian tạm thời </span>
                </p>
                <p className={styles.it_info_user}>
                  <img
                    className={`${styles.lazyloaded} ${styles.ic_home01}`}
                    src="/ic_home01.png"
                    data-src="/ic_home01.png"
                    alt="city-ic"
                  />
                  <span>Hà Nội</span>
                </p>
              </div>
              <p className={`${styles.text_content_it01} ${styles.flex} ${styles.space}`}>
                <span>1 lượt đặt giá</span>
                <span>Hết hạn: 31-10-2023</span>
              </p>
              <div className={styles.tag_nganh_nghe}>
                <Link href="/tim-viec-lam-freelancer.html">
                  <p className={styles.it_tag_nganh_nghe}>Thiết kế web</p>
                </Link>
              </div>
            </div>
            <div className={styles.btn_right_home}>
              <p
                className={styles.dat_gia}
                onClick={() => showLogin()}
                data-ntd_id={116604}
                data-date="31-10-2023"
                data-tittle="thiết kế web "
                data-id={110564}
              >
                Đặt giá
              </p>
              <p className={styles.gia}> 3.000.000 VNĐ </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Banthoigian;
