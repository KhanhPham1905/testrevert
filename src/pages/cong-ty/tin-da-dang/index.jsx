import styles from "./index.module.css";
import Link from "next/link";
const TinDaDang = () => {
  return (
    <div className={styles.right_container}>
      <div className={styles.cate}>
        <Link href="/">
          <span>Việc làm tự do / </span>
        </Link>
        <span>
          <a href="" className="">
            Tin đã đăng{" "}
          </a>
        </span>
      </div>

      <div className={styles.job_new}>
        <p className={styles.text_p_job}>Tin đã đăng</p>
        <div className={styles.main_table_job}>
          <div className={styles.title_table_02}>
            <div className={`${styles.item_title_table} ${styles.w_35}`}>
              <p className={styles.p_it_title_02}>Tên công việc</p>
            </div>
            <div className={styles.item_title_table}>
              <p className={styles.p_it_title_02}>Hình thức</p>
            </div>
            <div className={styles.item_title_table}>
              <p className={styles.p_it_title_02}>Hạn cuối đặt giá</p>
            </div>
            <div className={styles.item_title_table}>
              <p className={styles.p_it_title_02}>Trạng thái</p>
            </div>
            <div className={styles.item_title_table}>
              <p className={styles.p_it_title_02}>Quản lý</p>
            </div>
          </div>
          <div className={styles.cover_table}></div>
        </div>
      </div>

      <div className={styles.see_more}>
        <p className={styles.phan_trang} style={{}}></p>
      </div>
    </div>
  );
};

export default TinDaDang;
