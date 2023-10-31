import React, {useState} from 'react';
import styles from './index.module.css';
import { UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
    Upload,
    Row,
    Col,
  } from 'antd';
  const { TextArea } = Input;
  const onChange = (value) => {
    console.log('changed', value);
  };
  

const Dangviecbanthoigian = () => {
    const [componentSize, setComponentSize] = useState('default');
    const [value4, setValue4] = useState('Apple');
    const [value, setValue] = useState('');
    const [state, setState] = useState('1');

    const handleRadioChange= (e)=>{
        console.log('hihi', e.target.value);
        setState(e.target.value);
      }
    const onFormLayoutChange = (size) => {
        setComponentSize(size);
    };
    const onChange4 = ({ target: { value } }) => {
        console.log('radio4 checked', value);
        setValue4(value);
    };
    const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
    ];
return (
    <div className={`${styles.right_container } ${styles.right_container_styles}`}>
        {/* <!-- start --> */}
        <div className={styles.cate}>
            <span>Việc làm tự do / </span>
            <span><a href="" className="">Tuyển dụng freelancer / </a></span>
            <span><a href="" className="">Đăng việc bán thời gian</a></span>
        </div>

        <div className="cover_dang_viec" data="1">
        </div>
        <div className={`${styles.form_cover} ${styles.main_right_container}`}>
        <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        style={{ width: '100%' }}
        // style={{ maxWidth: 600 }}
        >
        <Row >
            <Col span={24}>
                    <p className={styles.title_main_right}>Vị Trí Cần Tuyển Dụng</p>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Form.Item>
                    <div className={styles.cover_choose_img}>
                        <img src="/logo.png" alt="Ảnh" id="ghost"/>
                        <div className={styles.choose_img}>
                            <p>Logo công ty</p>
                            <label className={styles.custom_file_upload}>
                                <input name="image" id="image" type="file" accept="image/jpg,image/jpeg,image/png,image/gif,image/svg " onchange="loadFile(event)" style={{display:'none'}} className={styles.load_img}/>
                                Chọn ảnh
                            </label>
                        </div>
                    </div>
                </Form.Item>
            </Col>
        </Row>
        <Row gutter={27} className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={12}>
                <Form.Item
                    label={
                        <p className={styles.title_input}>Tên vị trí cần tuyển <span>*</span></p>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                <Input className={styles.input_style} placeholder="VD: Thiết kế web bán hàng cao cấp"/>
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label={
                        <p className={styles.title_input}>Yêu cầu kinh nghiệm <span>*</span></p>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Select
                        showSearch
                        size='large'
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        defaultValue={'1'}
                        options={[
                            {
                                value:'1',
                                label:'Chọn kinh nghiệm',
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
        <Row gutter={27} className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={12}>
                <Form.Item
                    label={
                        <p className={styles.title_input}>Nơi làm việc <span>*</span></p>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Select
                        showSearch
                        size='large'
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        defaultValue={'1'}
                        options={[
                            {
                                value: '1',
                                label: 'Chọn tỉnh / thành phố',
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
            <Col span={12}>
                <Form.Item
                    label={
                        <p className={styles.title_input}>Chọn lĩnh vực cần tuyển <span>*</span></p>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Select
                        showSearch
                        size='large'
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        defaultValue={'1'}
                        options={[
                            {
                                value:'1',
                                label:'Chọn lĩnh vực',
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
        <Row gutter={27} className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={12}>
                <Form.Item
                    label={
                        <p className={styles.title_input}>Hình thức làm việc <span>*</span></p>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Select
                        showSearch
                        size='large'
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        defaultValue={'1'}
                        options={[
                            {
                                value: '1',
                                label: 'Chọn hình thức',
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
            <Col span={12}>
                <Form.Item
                    label={
                        <p className={styles.title_input}>Kỹ năng <span>*</span></p>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Select
                        showSearch
                        size='large'
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        defaultValue={'1'}
                        options={[
                            {
                                value:'1',
                                label:'Chọn kỹ năng',
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
        <Row className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={24} >
                <Form.Item 
                    label={
                        <div className={styles.title_input_label}>
                            <p>Thông tin chi tiết <span style={{color:'#FF0000'}}>*</span></p>
                        </div>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <TextArea 
                        span={24}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        autoSize={{ minRows:6, maxRows:6}}
                        className={`${styles.input_style } ${styles.text_style}`}  placeholder="VD: Thiết kế các giao diện website cần thiết như: Trang chủ, xem hàng, thanh toán..."/>
                </Form.Item>
            </Col>
        </Row>
        <Row className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={24}>
            <Form.Item
                label={
                    <div>
                        <p className={styles.title_input} style={{width:'100%'}}>Thêm tài kiệu đính kèm</p> 
                    </div>
                }
                wrapperCol={{ span: 24 }}
                labelCol={{ span: 24 }}
            >
                <Upload span={24} >
                    <Button className={`${styles.upload_style} ${styles.input_style}`} >
                        <img  className={styles.icon_upload}  src='/icon_upload.png' alt="icon_upload.png" />
                        <p className={styles.p_input}>Tải lên bất kỳ hình ảnh hoặc tài liệu mô tả ngắn gọn công việc (Kích thước tệp tối đa: 25 MB).</p>
                    </Button>
                </Upload>
            </Form.Item>
            </Col>
        </Row>
        <Row >
            <Col span={24}>
                    <p className={styles.title_main_right}>Chi Phí Và Thời Gian</p>
            </Col>
        </Row>
        <Row className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={24}>
            <Form.Item 
                label={
                    <p className={styles.title_input_label}>Ngân sách dự kiến cho công việc này <span style={{color:'#FF0000'}}>*</span></p>
                } 
                wrapperCol={{span:24}}
                labelCol={{span:8.5}}
            >
                    <Radio.Group defaultValue='1' buttonStyle="solid" onChange={handleRadioChange}>
                        <Row>
                            <Col>
                                <Radio.Button value="1" style={{width:'95px', textAlign: 'center'}} className={styles.title_input_label} > Cố định </Radio.Button>
                            </Col>
                            <Col>
                                <Radio.Button value="2" className={styles.title_input_label}>Ước lượng</Radio.Button>
                            </Col>
                        </Row>
                    </Radio.Group>
            </Form.Item>
            </Col>
        </Row>
        <Row gutter={27} className={`${styles.cover_input} ${styles.position_r}`}>
            {state==='1' &&  <Col span={12}>
                <Form.Item
                     wrapperCol={{ span: 24 }}
                >
                    <InputNumber 
                        placeholder= "Nhập mức lương (VNĐ)"
                        className={styles.input_style} style={{width:'100%'}} onChange={onChange} />
                </Form.Item>
            </Col>}

            {state==='2' && (<>
                <Col style={{paddingRight:0}} span={6}>
                        <Form.Item
                            wrapperCol={6}
                            // style={{padding:0}}
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
            <Col style={{width: '50%'}}>
                <Form.Item
                    wrapperCol={{ span: 24 }}
                >
                    <Select
                        showSearch
                        size='large'
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
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
        <Row gutter={27} className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={12}>
            <Form.Item 
                label={
                    <p className={styles.title_input}>Ngày bắt đầu đặt giá <span>*</span></p>
                }
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <DatePicker format="DD/MM/YYYY" placeholder='dd/mm/yyyy' className={styles.input_style} />
            </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item 
                label={
                    <p className={styles.title_input}>Ngày đặt giá kết thúc <span>*</span></p>
                }
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <DatePicker  format="DD/MM/YYYY" placeholder='dd/mm/yyyy' className={styles.input_style}/>
            </Form.Item>
            </Col>
        </Row>
        <Row gutter={27} className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={12}>
                <Form.Item 
                    label={
                        <p className={styles.title_input}>Ngày bắt đầu làm việc <span>*</span></p>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <DatePicker format="DD/MM/YYYY" placeholder='dd/mm/yyyy' className={styles.input_style}/>
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                     label={
                        <p className={styles.title_input}>Thời hạn làm việc <span>*</span></p>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <InputNumber placeholder="VD: 1 tháng" className={styles.input_style} min={1} max={10} onChange={onChange} />
                </Form.Item>
            </Col>
        </Row>
        <Row className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={12} offset={6}>
                <Form.Item wrapperCol={{span:24}} className={styles.buton_item}>
                    {/* <Col span={4}>col-4</Col> */}
                    <Button className={styles.btn_post} type="primary">ĐĂNG VIỆC</Button>
                </Form.Item>
            </Col>
        </Row>
        </Form>

        </div>
    </div>                
  )
}

export default Dangviecbanthoigian
