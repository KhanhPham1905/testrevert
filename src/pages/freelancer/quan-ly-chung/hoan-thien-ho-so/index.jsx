import { Tabs } from "antd";
import Profile from "../profile";
import styles from "./index.module.css";
import Gioithieubanthan from "../gioithieubanthan";
import Congviecmongmuon from "../congviecmongmuon";
import Kinang from "../kinang";
import Link from "next/link";
const QLC = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Thông tin cơ bản",
      children: <Profile />,
    },
    {
      key: "2",
      label: "Giới thiệu bản thân",
      children: <Gioithieubanthan/>,
    },
    {
      key: "3",
      label: "Công việc mong muốn",
      children: <Congviecmongmuon/>,
    },
    {
      key: "4",
      label: "Kỹ năng",
      children: <Kinang/>,
    },
    {
      key: "5",
      label: "Hồ sơ năng lực",
      children: <div></div>,
    }
  ];
  return (
    <div className={styles.right_container}>
      <div className={styles.cate}>
        <span>
          <Link href="/">Việc làm tự do /</Link>
        </span>
        <span>Quản lý chung / </span>
        <span>
          <a href="" className="">
            Hoàn thiện hồ sơ
          </a>
        </span>
      </div>
      <div className={styles.job_new}>
        {/* <div className={styles.profile_top}>
          <p
            className={`${styles.item_profile_top} ${styles.active}`}
            data-file="thong_tin"
          >
            Thông tin cơ bản
          </p>
          <p className={styles.item_profile_top} data-file="gt_ban_than">
            Giới thiệu bản thân
          </p>
          <p className={styles.item_profile_top} data-file="cong_viec_mm">
            Công việc mong muốn
          </p>
          <p className={styles.item_profile_top} data-file="ky_nag">
            Kỹ năng
          </p>
          <p className={styles.item_profile_top} data-file="hs_nang_luc">
            Hồ sơ năng lực
          </p>
        </div> */}
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          indicatorSize={(origin) => origin - 16}
        />
      </div>
    </div>
  );
};

export default QLC;
