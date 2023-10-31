import { Dropdown } from "antd";
import styles from "./index.module.css";
const DropdownQLTS = () => {
  const items = [
    {
      key: "1",
      label: "Cập nhật thông tin",
    },
    {
      key: "2",
      label: "Đăng xuất",
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
          className={styles.a_item_menu_ic_menu_ntd06}
        >
          Quản lý tài khoản
        </p>
      </Dropdown>
    </>
  );
};

export default DropdownQLTS;
