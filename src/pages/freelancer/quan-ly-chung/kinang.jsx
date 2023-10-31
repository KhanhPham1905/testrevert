import { Form } from "antd";
import styles from "./index.module.css";
import { Select, Space } from "antd";

const Kinang = () => {
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Form>
        <p className={styles.p_vip}>Chọn lĩnh vực</p>
        <div className={styles.div_select}>
          <Space
            style={{
              width: "100%",
            }}
            direction="vertical"
          >
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              defaultValue={["a10", "c12"]}
              onChange={handleChange}
              options={options}
            />
          </Space>
        </div>
        <p className={styles.p_vip}>Chọn kĩ năng</p>
        <div className={styles.div_select}>
          <Space
            style={{
              width: "100%",
            }}
            direction="vertical"
          >
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              defaultValue={["a10", "c12"]}
              onChange={handleChange}
              options={options}
            />
          </Space>
        </div>
        <label
          className={`${styles.input_style} ${styles.upload_profile_more}`}
        >
          <input
            type="file"
            name="file"
            id="file"
            accept="image/png, image/jpg, image/jpeg, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            style={{ display: "none" }}
          />
          <img
            onError='this.onError=null; this.src="/images/icon_upload.png";'
            src="/icon_upload.png"
            alt="icon_upload"
            className={styles.icon_upload}
          />
          <p className={styles.p_input}>
            Tải lên bất kỳ hình ảnh hoặc tài liệu mô tả ngắn gọn công việc (Kích
            thước tệp tối đa: 8MB).
          </p>
        </label>
        <div className={`${styles.button_item_update} ${styles.text_center}`}>
          <button className={styles.btn_post} value="update" name="update_file">
            Cập nhật thông tin
          </button>
        </div>
      </Form>
    </>
  );
};

export default Kinang;
