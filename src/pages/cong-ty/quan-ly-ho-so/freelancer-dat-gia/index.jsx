import React from 'react'
import styles from './index.module.css'
import { Space, Table, Tag } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
  
  const data = [
    {
      key: '1',
      name: 'JohnBrown',
      age: 32,
      address: '10000000000 đ',
      tags: '999.999đ',
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
    return index % 2 === 0 ? styles.evenRow : styles.oddRow;
  };
  
const Freelancerdatgia = () => {
  const router = useRouter()
  const columns = [
    {
      title:'Tên freelancer',
      dataIndex: 'name',
      key: 'name',
      className: styles.column1,
      render: (text) => <div className={styles.item_table}><p onClick={(e)=>{router.push('/ung-vien-freelancer-:name-uv:id.html')}} className={`${styles.content_table} ${styles.it_blue}`}>{text}</p></div>,
    },
    {
      title: 'Tên dự án',
      dataIndex: 'age',
      key: 'age',
      className: styles.column2,
      render: (text) => <div className={styles.item_table}><p onClick={(e)=>{router.push('/:jobname-vl:id.html')}} className={`${styles.content_table} ${styles.it_blue}`}>{text}</p> </div>,
    },
    {
      title: 'Ngân sách dự kiến',
      dataIndex: 'address',
      key: 'address',
      render: (text) => <div className={`${styles.item_table} ${styles.content_table}`}><p className={styles.it_red}>{text}</p></div>
    },
    {
      title: 'Đặt giá',
      key: 'tags',
      dataIndex: 'tags',
      render: (_) => (
        <>
          <div className={styles.item_table}>
              <div className={styles.img_item_table}>
                <img src="/icon_check.png" alt="chap_nhan_flc" className={styles.icon_21} id="chap_nhan_flc"/>
                <img src="/icon_cancel.png" alt="tu_choi_flc" className={styles.icon_21} id="tu_choi_flc" />
              </div>
              <p className={styles.it_pink}>12.345.700đ</p>
          </div>
        </>
      ),
    },
    {
      title: 'Liên hệ',
      key: 'action',
      className:styles.column5,
      render: (_) => (
        <>
        <div className={styles.item_table}>
            <a href="tel:0987654321"> <img src="/phone (1).png" alt="phone-ic" className={styles.icon_18}/>
            </a>
        </div>
        </>
      ),
    },
  ];
  return (
    <div className={styles.right_container}>
                {/* <!-- start --> */}
                <div className={styles.cate}>
                    <Link href="/"><span>Việc làm tự do / </span></Link>
                    <span><Link href="" className="">Quản lý hồ sơ / </Link></span>
                    <span><Link href="" className=""> Freelancer đặt giá </Link></span>
                </div>
                {/* <!-- end --> */}

                {/* <!-- start Tin đã đăng --> */}
                <div className={styles.job_new}>
                    <p className={styles.text_p_job}>Danh sách freelancer đã đặt giá</p>
                    <div className={styles.main_table_job}>
                    <Table 
                        columns={columns}
                        dataSource={data}
                        pagination={false} 
                        rowClassName={getRowClassName}
                        style={{minWidth:'660px'}}
                    />
                    </div>
                </div>
            <div className={styles.see_more}>
        </div>
    </div>
  )
}

export default Freelancerdatgia
