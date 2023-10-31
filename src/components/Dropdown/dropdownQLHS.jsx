import { Dropdown } from "antd";
import styles from "./index.module.css"

const DropdownQLHS = () => {
  const items = [
    {
      key: "1",
      label: "Freelancer đặt giá",
    },
    {
      key: "2",
      label: "Freelancer đang làm việc",
    },
    {
      key: "3",
      label: "Freelancer đã lưu",
    },
  ];
  return (
    <>
      <Dropdown
        trigger="click"
        menu={{
          items,
        }}
      >
        <p
          onClick={(e) => e.preventDefault()}
          className={styles.a_item_menu_ic_menu_ntd05}
        >
          Quản lý hồ sơ
        </p>
      </Dropdown>
    </>
  );
};

export default DropdownQLHS;
