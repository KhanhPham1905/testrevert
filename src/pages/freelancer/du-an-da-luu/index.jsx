import styles from "./index.module.css"
import React from 'react'

import { Space, Table, Tag, Rate } from 'antd';
import { useRouter } from "next/router";
import Link from "next/link";
  const columns = [
    {
      title:'Tên công việc',
      dataIndex: 'name',
      key: 'name',
      className: styles.column1,
      render: (text) => <div className={styles.item_table}><p className={`${styles.content_table} ${styles.it_blue}`}>{text}</p></div>,
    },
    {
      title: 'Ngân sách dự kiến',
      dataIndex: 'age',
      key: 'age',
      className: styles.column2,
      render: (text) => <div className={styles.item_table}>
                            <p className={styles.it_red}>
                                90.000.000 
                                đ
                            </p>
                            <a href="/thiet-ke-web-4-vl110567.html" className={styles.d_block}><p className={styles.it_sky}>Đặt giá</p></a>
                        </div>,
    },
    {
      title: 'Kỹ năng',
      dataIndex: 'address',
      key: 'address',
      className: styles.column3,
      render: (text) => <div className={styles.item_table}>
                            <p className={styles.it_pink}>
                                Thiết kế web
                            </p>
                        </div>
    },
    {
      title: 'Hạn cuối đặt giá',
      key: 'tags',
      dataIndex: 'tags',
      className: styles.column4,
      render: (text) => <div className={`${styles.item_table} ${styles.content_table}`}><p>{text}</p></div>,
    },
    {
        title: ' ',
        key: 'action',
        className:styles.column6,
        render: (_) => (
          <>
            <div className={styles.item_table_02}>
                <img src="/icon_trash.png" alt="delete-ic" className={`${styles.icon_18} ${styles.id_user_delete}`} id="id_user_delete" value="116606" data-id="859"/>
            </div>
          </>
        ),
      },
  ];
  
  const data = [
    {
      key: '1',
      name: 'JohnBrown',
      age: 32,
      address: '10000000000 đ',
      tags: 'Quận Long Biên - Hà Nội ',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: '1-2000 đ',
      tags: '12.345.555',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: '3000 đ',
      tags: '121.223đ',
    },
  ];
  const getRowClassName = (record, index) => {
    return (index % 2) === 0 ? styles.evenRow : styles.oddRow;
  };
  
const Freelancerdaluu = () => {
  const router =useRouter()
  const columns = [
    {
      title:'Tên công việc',
      dataIndex: 'name',
      key: 'name',
      className: styles.column1,
      render: (text) => <div style={{cursor:'pointer'}} className={styles.item_table}><p onClick={(e)=>{router.push('/:jobname-vl:id.html')}} className={`${styles.content_table} ${styles.it_blue}`}>{text}</p></div>,
    },
    {
      title: 'Ngân sách dự kiến',
      dataIndex: 'age',
      key: 'age',
      className: styles.column2,
      render: (text) => <div className={styles.item_table}>
                            <p className={styles.it_red}>
                                90.000.000 
                                đ
                            </p>
                            <a href="/thiet-ke-web-4-vl110567.html" className={styles.d_block}><p className={styles.it_sky}>Đặt giá</p></a>
                        </div>,
    },
    {
      title: 'Kỹ năng',
      dataIndex: 'address',
      key: 'address',
      className: styles.column3,
      render: (text) => <div className={styles.item_table}>
                            <p className={styles.it_pink}>
                                Thiết kế web
                            </p>
                        </div>
    },
    {
      title: 'Hạn cuối đặt giá',
      key: 'tags',
      dataIndex: 'tags',
      className: styles.column4,
      render: (text) => <div className={`${styles.item_table} ${styles.content_table}`}><p>{text}</p></div>,
    },
    {
        title: ' ',
        key: 'action',
        className:styles.column6,
        render: (_) => (
          <>
            <div className={styles.item_table_02}>
                <img src="/icon_trash.png" alt="delete-ic" className={`${styles.icon_18} ${styles.id_user_delete}`} id="id_user_delete" value="116606" data-id="859"/>
            </div>
          </>
        ),
      },
  ];
  

    var A='a';
  return (
    <div className={styles.right_container}>
                {/* <!-- start --> */}
                <div className={styles.cate}>
                    <Link href="/"><span>Việc làm tự do / </span></Link>
                    <span><a href="" className="">Quản lý hồ sơ / </a></span>
                    <span><a href="" className=""> Freelancer đã lưu </a></span>
                </div>
                {/* <!-- end --> */}

                {/* <!-- start Tin đã đăng --> */}
                <div className={styles.job_new}>
                    <p className={styles.text_p_job}>Danh sách freelancer đã lưu</p>
                    <div className={styles.main_table_job}>
                    <Table style={{minWidth:'660px'}} columns={columns} dataSource={data} pagination={false} rowClassName={getRowClassName}  />
                    </div>
                </div>
            <div className={styles.see_more}>
        </div>
    </div>
  )
}

export default Freelancerdaluu
