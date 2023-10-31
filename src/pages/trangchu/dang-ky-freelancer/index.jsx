import React, {useState} from 'react'
import styles from './index.module.css'
import { Button, Checkbox, Form, Input, Row, Col, DatePicker , Select, Radio, InputNumber, Space} from 'antd';
import { Content } from 'next/font/google';
import Link from 'next/link';
const onChange = (value) => {
    console.log('changed', value);
  };
const Register = () => {
    const [state, setState] = useState('1');
    const [isActive, setIsActive] = useState(true);
    const [isNTD, setIsNTD] = useState(true);


    const handleTabClick = (tab) => {
        if (tab === 'co_dinh') {
          setIsActive(true);
        } else if (tab === 'uoc_luong') {
          setIsActive(false);
        }
      };
    const handleRadioChange= (e)=>{
        console.log('hihi', e.target.value);
        setState(e.target.value);
    }
    const clickNTD = ()=>{
        setIsNTD(true);
    }
    const clickUV = ()=>{
        setIsNTD(false);
    }
  return (
    <div>
      <div className={styles.banner}>
          <div className={`${styles.container} ${styles.relative_banner}`}>
              {/* <!__ <img src="../images/banner.png" alt=""> __> */}
              <div className={styles.cover_content_banner_both}>
                  <div className={styles.content_banner}>
                      <Link href="/"><span>Trang chủ / </span></Link>
                      <span>Đăng ký</span>
                  </div>
              </div>
          </div>
      </div>
      <div className={styles.cover_container}>
        <div className={`${styles.container} ${styles.main_container}`}>
            <div className={styles.main_cover_container}>
                <div className={styles.cover_register_both} style={{display: 'flex',flexWrap: 'wrap'}}>
                    <div className={styles.register_top}>
                        
                        <div className={`${styles.it_rgt_top} ${styles.rgt_ntd}  ${isNTD? styles.active:''}`} data_register="nha_tuyen_dung" onClick={clickNTD} >
                            <p className={styles.text_it_bold}>Nhà tuyển dụng</p>
                            <p className={styles.text_it_normal}>Đăng ký để tìm freelancer</p>
                        </div>
                        <div className={`${styles.it_rgt_top} ${styles.rgt_uv} ${isNTD? '':styles.active}`} data_register="ung_vien" onClick={clickUV}>
                            <p className={styles.text_it_bold}>Freelancer</p>
                            <p className={styles.text_it_normal}>Đăng ký để tìm việc làm</p>
                        </div>
                    </div>
                    <div className={styles.register_bottom}>
                        <Form
                            name="basic"
                            // labelCol={{ span: 8 }}
                            // wrapperCol={{ span: 16 }}
                            style={{ margin: '25px 0 0 0' }}
                            initialValues={{ remember: true }}
                            // onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Row>
                                <Col>
                                    <div className={styles.text_title_rgt_bt}><img src="/ic_lock.png" alt="ntd-info" className={styles.ic_lock}></img>
                                        {isNTD? 'Thông Tin Nhà Tuyển Dụng':'Thông Tin Freelancer'}
                                    </div> 
                                </Col>
                            </Row>    
                            <Row>
                                <Col span={24}>
                                    <Form.Item 
                                        label={
                                            <p className={styles.title_input}>Email <span>*</span></p>
                                        }
                                        className={styles.cover_input}
                                        labelCol={{span:24}}
                                        wrapperCol={{span:24}}    
                                    >
                                        <Input placeholder="Nhập địa chỉ email" className={styles.input_style}/>
                                    </Form.Item>
                                </Col>
                            </Row>    
                            <Row >
                                <Col span={12}>
                                        <Form.Item
                                            label={
                                                <p className={styles.title_input}>Mật khẩu <span>*</span></p>
                                            }
                                            style={{width:'calc(100% - 24px)'}}
                                            className={styles.cover_input}
                                            labelCol={{span:24}}
                                            wrapperCol={{span:24}}
                                        >
                                            <Input.Password className={styles.input_style} placeholder="Nhập mật khẩu"/>
                                        </Form.Item>
                                </Col>
                                <Col span={12}>
                                        <Form.Item
                                            label={
                                                <p className={styles.title_input}>Nhập lại mật khẩu <span>*</span></p>
                                            }
                                            style={{width:'calc(100% - 24px)', marginLeft:'24px'}}
                                            className={styles.cover_input}
                                            labelCol={{span:24}}
                                            wrapperCol={{span:24}}
                                        >
                                            <Input.Password className={styles.input_style} placeholder="nhập lại mật khẩu"/>
                                        </Form.Item>
                                </Col>
                            </Row>  
                            <Row>
                                <Col span={24}>
                                    <Form.Item 
                                        label={
                                            <p className={styles.title_input}>Họ và tên <span>*</span></p>
                                        }
                                        className={styles.cover_input}
                                        labelCol={{span:24}}
                                        wrapperCol={{span:24}}    
                                    >
                                        <Input placeholder="Nhập họ và tên" className={styles.input_style}/>
                                    </Form.Item>
                                </Col>
                            </Row>    
                            <Row>
                                <Col span={24}>
                                    <Form.Item 
                                        label={
                                            <p className={styles.title_input}>Số điện thoại <span>*</span></p>
                                        }
                                        className={styles.cover_input}
                                        labelCol={{span:24}}
                                        wrapperCol={{span:24}}    
                                    >
                                        <Input placeholder="Nhập số điện thoại" className={styles.input_style}/>
                                    </Form.Item>
                                </Col>
                            </Row>  
                            <Row>
                                <Col span={12}>
                                        <Form.Item
                                            label={
                                                <p className={styles.title_input}>Ngày sinh <span>*</span></p>
                                            }
                                            className={styles.cover_input}
                                            labelCol={{span:24}}
                                            wrapperCol={{span:24}}
                                        >
                                            <DatePicker format="DD/MM/YYYY" placeholder='Chọn ngày sinh' className={styles.input_style} style={{width:'calc(100% - 24px)'}}/>
                                        </Form.Item>
                                </Col>
                                <Col span={12}>
                                        <Form.Item
                                            label={
                                                <p className={styles.title_input}>Giới tính <span>*</span></p>
                                            }
                                            style={{width:'calc(100% - 24px)', marginLeft:'24px'}}
                                            className={styles.cover_input}
                                            labelCol={{span:24}}
                                            wrapperCol={{span:24}}
                                        >
                                        <Select
                                            className={styles.custom_input}
                                            showSearch
                                            size='large'
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            defaultValue={'1'}
                                            options={[
                                                {
                                                    value:'1',
                                                    label:'Chọn giới tính',
                                                },
                                                {
                                                value: 'Nam',
                                                label: 'Nam',
                                                },
                                                {
                                                value: 'Nữ',
                                                label: 'Nữ',
                                                },
                                                {
                                                value: 'Khác',
                                                label: 'Khác',
                                                },
                                            ]}
                                        />
                                        </Form.Item>
                                </Col>
                            </Row>

                            <Row style={{marginBottom:'20px'}}>
                                <Col span={12}>
                                        <Form.Item
                                            label={
                                                <p className={styles.title_input}>Tỉnh/Thành phố <span>*</span></p>
                                            }
                                            className={styles.cover_input}
                                            labelCol={{span:24}}
                                            wrapperCol={{span:24}}
                                        >
                                        <Select
                                            showSearch
                                            style={{width:'calc(100% - 24px)'}}
                                            size='large'
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            className={styles.custom_input}
                                            defaultValue={'1'}
                                            options={[
                                                {
                                                    value:'1',
                                                    label:'Chọn Tỉnh/Thành phố',
                                                },
                                                {
                                                value: 'Nam',
                                                label: 'Nam',
                                                },
                                                {
                                                value: 'Nữ',
                                                label: 'Nữ',
                                                },
                                                {
                                                value: 'Khác',
                                                label: 'Khác',
                                                },
                                            ]}
                                        />
                                        </Form.Item>
                                </Col>
                                <Col span={12}>
                                        <Form.Item
                                            label={
                                                <p className={styles.title_input}>Quận/ Huyện <span>*</span></p>
                                            }
                                            style={{width:'calc(100% - 24px)', marginLeft:'24px'}}
                                            className={styles.cover_input}
                                            labelCol={{span:24}}
                                            wrapperCol={{span:24}}
                                        >
                                        <Select
                                            showSearch
                                            size='large'
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            className={styles.custom_input}
                                            defaultValue={'1'}
                                            options={[
                                                {
                                                    value:'1',
                                                    label:'Chọn quận/huyện',
                                                },
                                                {
                                                value: 'Nam',
                                                label: 'Nam',
                                                },
                                                {
                                                value: 'Nữ',
                                                label: 'Nữ',
                                                },
                                                {
                                                value: 'Khác',
                                                label: 'Khác',
                                                },
                                            ]}
                                        />
                                        </Form.Item>
                                </Col>
                            </Row>

                            { isNTD===false && (<>
                            <Row >
                                <Col span={24}>
                                <Form.Item 
                                    label={
                                        <p className={styles.title_input}>Mức lương <span style={{color:'#FF0000'}}>*</span></p>
                                    } 
                                    wrapperCol={{span:7}}
                                    labelCol={{span:24}}
                                >
                                <div className={styles.cover_tab}>
                                    <div className={styles.ht_luong_tong}>
                                        <p onClick={() => handleTabClick('co_dinh')} className={`${styles.it_tab} ${ isActive? styles.active:''}`} data-tabluong="co_dinh">Cố định</p>
                                        <input type="radio" name="ht_luong" className={styles.loai_luong} value="1"/>
                                    </div>
                                    <div className={`${styles.ht_luong_tong} ${styles.uocluong}`}>
                                        <p onClick={() => handleTabClick('uoc_luong')} className={`${styles.it_tab} ${ isActive? '':styles.active}`}data-tabluong="uoc_luong">Ước lượng</p>
                                        <input type="radio" name="ht_luong" className={styles.loai_luong} value="2"/>
                                    </div>
                                </div>
                                </Form.Item>
                                </Col>
                            </Row>
                            <Row style={{marginBottom:'40px'}}>
                                {isActive===true &&  <Col span={12}>
                                        <Form.Item
                                            wrapperCol={{ span: 24 }}

                                        >
                                            <InputNumber 
                                                placeholder= "Nhập mức lương (VNĐ)"
                                                className={styles.input_style}
                                                style={{width:'calc(100% - 24px)'}}
                                                onChange={onChange} />
                                        </Form.Item>
                                    </Col>}
                                {isActive===false && (<>
                                    <Col style={{paddingRight:0}} span={6}>
                                            <Form.Item
                                                wrapperCol={6}
                                            >
                                                <InputNumber 
                                                        placeholder= "Từ ... (VNĐ)"
                                                        className={styles.input_style} style={{width:'100%'}}  onChange={onChange} />
                                                
                                            </Form.Item>
                                        </Col>
                                        <span style={{position:'absolute', left: '25.8%', top: '20%' }}>-</span>
                                    <Col  style={{paddingLeft:0}} span={6}>
                                        <Form.Item
                                            wrapperCol={6}
                                        >
                                            <InputNumber 
                                                    placeholder= "Đến ... (VNĐ)"
                                                    className={styles.input_style} style={{width:'100%'}} min={1} max={10} onChange={onChange} />
                                        </Form.Item>
                                    </Col>
                                </>)
                                } 
                                <Col span={12}>
                                    <Form.Item
                                        wrapperCol={{ span: 24 }}
                                    >
                                        <Select
                                            showSearch
                                            size='large'
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            className={styles.custom_input}
                                            style={{width:'calc(100% - 24px)', marginLeft:'24px'}}
                                            defaultValue={'1'}
                                            options={[
                                                {
                                                    value:'1',
                                                    label:'Chọn hình thức trả lương',
                                                },
                                                {
                                                value: 'HY',
                                                label: 'Hưng Yên',
                                                },
                                                {
                                                value: 'HN',
                                                label: 'Hà Nội',
                                                },
                                                {
                                                value: 'ND',
                                                label: 'Nam Định',
                                                },
                                            ]}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row style={{marginBottom:'20px'}}>
                                <Col span={24}>
                                    <Form.Item
                                        label={
                                            <div>
                                                <p className={styles.title_input}>Lĩnh vực làm việc <span>*</span></p>
                                                <p className={styles.title_input02}>(Bạn chỉ có thể chọn 1 lĩnh vực)</p>
                                            </div>
                                        }
                                        wrapperCol={{span:24}}
                                        labelCol={{span:24}}
                                    >
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <Checkbox className={styles.cover_checkbox_style} style={{width:'calc(100% - 12px)', fontSize:'15px' ,color: '#495057', fontFamily:'Roboto Medium, Arial, sans-serif'}} onChange={onChange}>IT & Lập trình</Checkbox>
                                </Col>
                                <Col span={12}>
                                    <Checkbox className={styles.cover_checkbox_style} style={{width:'calc(100% - 12px)', marginLeft:'12px' , fontSize:'15px' ,color: '#495057'}}  onChange={onChange}> Thiết kế</Checkbox>
                                </Col>
                            </Row>

                            <Row style={{display:'flex', alignContent:'space-between'}}>
                                <Col span={12}>
                                    <Checkbox className={styles.cover_checkbox_style} style={{width:'calc(100% - 12px)' , fontSize:'15px' ,color: '#495057'}} onChange={onChange}>Video</Checkbox>
                                </Col>
                                <Col span={12}>
                                    <Checkbox className={styles.cover_checkbox_style} style={{width:'calc(100% - 12px)', marginLeft:'12px' , fontSize:'15px' ,color: '#495057'}} onChange={onChange}> Lĩnh vực khác</Checkbox>
                                </Col>
                            </Row>
                            <Row style={{marginTop:'20px'}}>
                                <Col span={24}>
                                    <Form.Item
                                        label={
                                            <div>
                                                <p className={styles.title_input}>Kỹ năng chi tiết  <span>*</span></p>
                                                <p className={styles.title_input02}>(Bạn chỉ có thể chọn 3 kỹ năng chi tiết)</p>
                                            </div>
                                        }
                                        wrapperCol={{span:24}}
                                        labelCol={{span:24}}
                                    >
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row style={{display:'flex', alignContent:'space-between'}}>
                                <Col span={12}>
                                    <Checkbox className={styles.cover_checkbox_style} style={{width:'calc(100% - 12px)' , fontSize:'15px' ,color: '#495057'}} onChange={onChange}>Video</Checkbox>
                                </Col>
                                <Col span={12}>
                                    <Checkbox className={styles.cover_checkbox_style} style={{width:'calc(100% - 12px)', marginLeft:'12px' , fontSize:'15px' ,color: '#495057'}} onChange={onChange}> Lĩnh vực khác</Checkbox>
                                </Col>
                            </Row>
                            <Row style={{display:'flex', alignContent:'space-between'}}>
                                <Col span={12}>
                                    <Checkbox className={styles.cover_checkbox_style} style={{width:'calc(100% - 12px)' , fontSize:'15px' ,color: '#495057'}} onChange={onChange}>Video</Checkbox>
                                </Col>
                                <Col span={12}>
                                    <Checkbox className={styles.cover_checkbox_style} style={{width:'calc(100% - 12px)', marginLeft:'12px' , fontSize:'15px' ,color: '#495057'}} onChange={onChange}> Lĩnh vực khác</Checkbox>
                                </Col>
                            </Row> </>)}
                            <Row className={styles.cover_btn_continue} style={{marginTop:'50px'}}>
                                <Col span={24}>
                                    <Button className={styles.btn_continue} style={{display:'block'}}>Tiếp tục</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register
