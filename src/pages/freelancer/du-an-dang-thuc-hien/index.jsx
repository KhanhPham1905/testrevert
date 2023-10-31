import React from 'react'
import styles from './index.module.css'
import { Space, Table, Tag, Rate } from 'antd';
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
    return (index % 2) === 0 ? styles.evenRow : styles.oddRow;
  };
  
const Freelancerdanglamviec = () => {
  const router = useRouter()
  const columns = [
    {
      title: 'Tên dự án',
      dataIndex: 'age',
      key: 'age',
      className: styles.column2,
      render: (text) => <div className={styles.item_table}>< p  style={{cursor:'pointer'}} onClick={(e)=>{router.push('/:jobname-vl:id.html')}} className={`${styles.content_table} ${styles.it_blue}`}>{text}</p> </div>,
    },
    {
      title: 'Ngân sách',
      dataIndex: 'address',
      key: 'address',
      className: styles.column3,
      render: (text) => <div className={`${styles.item_table} ${styles.content_table}`}><p className={styles.it_red}>{text}</p></div>
    },
    {
      title: 'Ngày hết hạn',
      key: 'tags',
      dataIndex: 'tags',
      className: styles.column4,
      render: (text) => <div className={`${styles.item_table} ${styles.content_table}`}><p>{text}</p></div>,
    },
    {
      title: 'Trạng thái',
      key: 'action',
      className:styles.column5,
      render: (_) => (
        <>
        <div className={styles.item_table}>
          <div className={styles.item_table_02}>
              <div> Không hoàn thành</div>                          
          </div>
        </div>
        </>
      ),
    },
    {
      title: 'Đánh giá',
      key: 'action',
      className:styles.column6,
      render: (_) => (
        <>
          <div className={styles.item_table_02}>
            <Rate className={styles.start_antd} disabled={true}/>
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
                    <span><a href="" className=""> Dự án đang thực hiện
 </a></span>
                </div>
                {/* <!-- end --> */}

                {/* <!-- start Tin đã đăng --> */}
                <div className={styles.job_new}>
                    <p className={styles.text_p_job}>Dự án đang thực hiện
                    </p>
                    <div className={styles.main_table_job}>
                    <Table style={{minWidth:'660px'}} columns={columns} dataSource={data} pagination={false} rowClassName={getRowClassName}  />
                    </div>
                </div>
            <div className={styles.see_more}>
        </div>
    </div>
  )
}

export default Freelancerdanglamviec
