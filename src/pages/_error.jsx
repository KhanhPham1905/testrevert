import React from 'react'
import styles from './_error.module.css'
import Link from 'next/link'
const _error = () => {
  return (
    <div>
      <div className={styles.container_error}>
        <div className={styles.error}>
            <div className={styles.error_text}>
                <span>
                    Xin lỗi, có thể trang bạn đang tìm kiếm đã bị xóa bỏ hoặc lỗi URL
                </span>
            </div>
            <div className={styles.error_btn}>
                <Link href="/">Quay về trang chủ</Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default _error
