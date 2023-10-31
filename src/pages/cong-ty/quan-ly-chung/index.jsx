import NavBarCT from "@/components/navbarCT";
import styles from "./index.module.css";
import Link from "next/link";
const QuanLyChung = () => {
  return (
    <div className={styles.right_container}>
      <div className={styles.cate}>
        <Link href="/">
          <span>Việc làm tự do / </span>
        </Link>
        <span>
          <a href="" className="">
            Quản lý chung
          </a>
        </span>
      </div>

      <div className={styles.freelancer}>
        <div className={styles.cover_freelancer}>
          <div className={styles.item_freelancer}>
            <p className={styles.text_item_free}>Freelancer đặt giá</p>
            <p className={styles.number_item_free}>0 </p>
          </div>
          <div className={styles.item_freelancer}>
            <p className={styles.text_item_free}>Freelancer đã lưu</p>
            <p className={styles.number_item_free}>0 </p>
          </div>
          <div className={styles.item_freelancer}>
            <p className={styles.text_item_free}>Freelancer đang làm việc</p>
            <p className={styles.number_item_free}>0 </p>
          </div>
          <div className={styles.item_freelancer}>
            <p className={styles.text_item_free}>Việc làm đã hoàn thành</p>
            <p className={styles.number_item_free}>0 </p>
          </div>
        </div>
      </div>

      <div className={styles.job_new}>
        <p className={styles.text_p_job}>Danh sách việc làm mới nhất</p>
        <div className={styles.main_table_job}>
          <div className={styles.title_table}>
            <div className={`${styles.item_title_table} ${styles.w_35}`}>
              <p className={styles.p_it_title}>Tên công việc</p>
            </div>
            <div className={styles.item_title_table}>
              <p className={styles.p_it_title}>Ngân sách dự kiến</p>
            </div>
            <div className={styles.item_title_table}>
              <p className={styles.p_it_title}>Lượt đặt giá</p>
            </div>
            <div className={styles.item_title_table}>
              <p className={styles.p_it_title}>Hạn cuối đặt giá</p>
            </div>
            <div className={styles.item_title_table}>
              <p className={styles.p_it_title}>Quản lý</p>
            </div>
          </div>
          <div className={styles.cover_table}></div>
        </div>
      </div>

      <div className={styles.job_new}>
        <p className={styles.text_p_job}>
          Danh sách freelancer đặt giá mới nhất
        </p>
        <div className={styles.main_table_job}>
          <div className={styles.title_table}>
            <div className={styles.item_title_table}>
              <p className={styles.p_it_title}>Tên freelancer</p>
            </div>
            <div className={`${styles.item_title_table} ${styles.w_35}`}>
              <p className={styles.p_it_title}>Tên dự án</p>
            </div>
            <div className={styles.item_title_table}>
              <p className={styles.p_it_title}>Ngân sách dự kiến</p>
            </div>
            <div className={styles.item_title_table}>
              <p className={styles.p_it_title}>Đặt giá</p>
            </div>
            <div className={styles.item_title_table}>
              <p className={styles.p_it_title}>Liên hệ</p>
            </div>
          </div>
          <div className={styles.cover_table}></div>
        </div>
      </div>
    </div>
  );
};

export default QuanLyChung;
