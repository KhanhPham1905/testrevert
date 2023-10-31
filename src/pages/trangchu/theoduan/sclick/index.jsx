import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../index.module.css";

export default class MultipleItems extends Component {
  
  render() {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className={styles.div}>
        <Slider {...settings}>
          <div className={styles.content_it_duan}>
            <div className={styles.content_it_top}>
              <img src="./img_demo02.png" alt="duan" />
              <div className={styles.bg_img}></div>
              <div className={styles.cover_user}>
                <img
                  src="https://freelancer.timviec365.vn/thumb/2023/09/07//job-1694050506.jpg"
                  alt="avt"
                />
                <a>
                  <p className={styles.name_user}>Cty Dũng</p>
                </a>
              </div>
            </div>
            <div className={styles.content_it_bottom}>
              <a>
                <h3 className={styles.title_content_it}>
                  laptop thinkpad t480s new 99 giá cả thương lượng
                </h3>
                <p className={styles.it_min_left}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home01.png"
                      alt="icon"
                    />
                  </span>
                  Hà Nội
                </p>
                <p className={styles.it_min_right}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home02.png"
                      alt="icon"
                    />
                  </span>
                  Toàn thời gian tạm thời
                </p>
                <p className={styles.text_content_it01}>
                  <span>1 lượt đặt giá</span>
                  <span className={styles.f_left}>Hết hạn: 25/09/2023</span>
                </p>
                <p className={styles.text_p_it_bottom}>ac</p>
              </a>
            </div>
            <span className={styles.price_tag}>12.313 VNĐ</span>
          </div>
          <div className={styles.content_it_duan}>
            <div className={styles.content_it_top}>
              <img src="./img_demo02.png" alt="duan" />
              <div className={styles.bg_img}></div>
              <div className={styles.cover_user}>
                <img
                  src="https://freelancer.timviec365.vn/thumb/2023/09/07//job-1694050506.jpg"
                  alt="avt"
                />
                <a>
                  <p className={styles.name_user}>Cty Dũng</p>
                </a>
              </div>
            </div>
            <div className={styles.content_it_bottom}>
              <a>
                <h3 className={styles.title_content_it}>
                  laptop thinkpad t480s new 99 giá cả thương lượng
                </h3>
                <p className={styles.it_min_left}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home01.png"
                      alt="icon"
                    />
                  </span>
                  Hà Nội
                </p>
                <p className={styles.it_min_right}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home02.png"
                      alt="icon"
                    />
                  </span>
                  Toàn thời gian tạm thời
                </p>
                <p className={styles.text_content_it01}>
                  <span>1 lượt đặt giá</span>
                  <span className={styles.f_left}>Hết hạn: 25/09/2023</span>
                </p>
                <p className={styles.text_p_it_bottom}>ac</p>
              </a>
            </div>
            <span className={styles.price_tag}>12.313 VNĐ</span>
          </div>
          <div className={styles.content_it_duan}>
            <div className={styles.content_it_top}>
              <img src="./img_demo02.png" alt="duan" />
              <div className={styles.bg_img}></div>
              <div className={styles.cover_user}>
                <img
                  src="https://freelancer.timviec365.vn/thumb/2023/09/07//job-1694050506.jpg"
                  alt="avt"
                />
                <a>
                  <p className={styles.name_user}>Cty Dũng</p>
                </a>
              </div>
            </div>
            <div className={styles.content_it_bottom}>
              <a>
                <h3 className={styles.title_content_it}>
                  laptop thinkpad t480s new 99 giá cả thương lượng
                </h3>
                <p className={styles.it_min_left}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home01.png"
                      alt="icon"
                    />
                  </span>
                  Hà Nội
                </p>
                <p className={styles.it_min_right}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home02.png"
                      alt="icon"
                    />
                  </span>
                  Toàn thời gian tạm thời
                </p>
                <p className={styles.text_content_it01}>
                  <span>1 lượt đặt giá</span>
                  <span className={styles.f_left}>Hết hạn: 25/09/2023</span>
                </p>
                <p className={styles.text_p_it_bottom}>ac</p>
              </a>
            </div>
            <span className={styles.price_tag}>12.313 VNĐ</span>
          </div>
          <div className={styles.content_it_duan}>
            <div className={styles.content_it_top}>
              <img src="./img_demo02.png" alt="duan" />
              <div className={styles.bg_img}></div>
              <div className={styles.cover_user}>
                <img
                  src="https://freelancer.timviec365.vn/thumb/2023/09/07//job-1694050506.jpg"
                  alt="avt"
                />
                <a>
                  <p className={styles.name_user}>Cty Dũng</p>
                </a>
              </div>
            </div>
            <div className={styles.content_it_bottom}>
              <a>
                <h3 className={styles.title_content_it}>
                  laptop thinkpad t480s new 99 giá cả thương lượng
                </h3>
                <p className={styles.it_min_left}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home01.png"
                      alt="icon"
                    />
                  </span>
                  Hà Nội
                </p>
                <p className={styles.it_min_right}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home02.png"
                      alt="icon"
                    />
                  </span>
                  Toàn thời gian tạm thời
                </p>
                <p className={styles.text_content_it01}>
                  <span>1 lượt đặt giá</span>
                  <span className={styles.f_left}>Hết hạn: 25/09/2023</span>
                </p>
                <p className={styles.text_p_it_bottom}>ac</p>
              </a>
            </div>
            <span className={styles.price_tag}>12.313 VNĐ</span>
          </div>
          <div className={styles.content_it_duan}>
            <div className={styles.content_it_top}>
              <img src="./img_demo02.png" alt="duan" />
              <div className={styles.bg_img}></div>
              <div className={styles.cover_user}>
                <img
                  src="https://freelancer.timviec365.vn/thumb/2023/09/07//job-1694050506.jpg"
                  alt="avt"
                />
                <a>
                  <p className={styles.name_user}>Cty Dũng</p>
                </a>
              </div>
            </div>
            <div className={styles.content_it_bottom}>
              <a>
                <h3 className={styles.title_content_it}>
                  laptop thinkpad t480s new 99 giá cả thương lượng
                </h3>
                <p className={styles.it_min_left}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home01.png"
                      alt="icon"
                    />
                  </span>
                  Hà Nội
                </p>
                <p className={styles.it_min_right}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home02.png"
                      alt="icon"
                    />
                  </span>
                  Toàn thời gian tạm thời
                </p>
                <p className={styles.text_content_it01}>
                  <span>1 lượt đặt giá</span>
                  <span className={styles.f_left}>Hết hạn: 25/09/2023</span>
                </p>
                <p className={styles.text_p_it_bottom}>ac</p>
              </a>
            </div>
            <span className={styles.price_tag}>12.313 VNĐ</span>
          </div>
          <div className={styles.content_it_duan}>
            <div className={styles.content_it_top}>
              <img src="./img_demo02.png" alt="duan" />
              <div className={styles.bg_img}></div>
              <div className={styles.cover_user}>
                <img
                  src="https://freelancer.timviec365.vn/thumb/2023/09/07//job-1694050506.jpg"
                  alt="avt"
                />
                <a>
                  <p className={styles.name_user}>Cty Dũng</p>
                </a>
              </div>
            </div>
            <div className={styles.content_it_bottom}>
              <a>
                <h3 className={styles.title_content_it}>
                  laptop thinkpad t480s new 99 giá cả thương lượng
                </h3>
                <p className={styles.it_min_left}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home01.png"
                      alt="icon"
                    />
                  </span>
                  Hà Nội
                </p>
                <p className={styles.it_min_right}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home02.png"
                      alt="icon"
                    />
                  </span>
                  Toàn thời gian tạm thời
                </p>
                <p className={styles.text_content_it01}>
                  <span>1 lượt đặt giá</span>
                  <span className={styles.f_left}>Hết hạn: 25/09/2023</span>
                </p>
                <p className={styles.text_p_it_bottom}>ac</p>
              </a>
            </div>
            <span className={styles.price_tag}>12.313 VNĐ</span>
          </div>
          <div className={styles.content_it_duan}>
            <div className={styles.content_it_top}>
              <img src="./img_demo02.png" alt="duan" />
              <div className={styles.bg_img}></div>
              <div className={styles.cover_user}>
                <img
                  src="https://freelancer.timviec365.vn/thumb/2023/09/07//job-1694050506.jpg"
                  alt="avt"
                />
                <a>
                  <p className={styles.name_user}>Cty Dũng</p>
                </a>
              </div>
            </div>
            <div className={styles.content_it_bottom}>
              <a>
                <h3 className={styles.title_content_it}>
                  laptop thinkpad t480s new 99 giá cả thương lượng
                </h3>
                <p className={styles.it_min_left}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home01.png"
                      alt="icon"
                    />
                  </span>
                  Hà Nội
                </p>
                <p className={styles.it_min_right}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home02.png"
                      alt="icon"
                    />
                  </span>
                  Toàn thời gian tạm thời
                </p>
                <p className={styles.text_content_it01}>
                  <span>1 lượt đặt giá</span>
                  <span className={styles.f_left}>Hết hạn: 25/09/2023</span>
                </p>
                <p className={styles.text_p_it_bottom}>ac</p>
              </a>
            </div>
            <span className={styles.price_tag}>12.313 VNĐ</span>
          </div>
          <div className={styles.content_it_duan}>
            <div className={styles.content_it_top}>
              <img src="./img_demo02.png" alt="duan" />
              <div className={styles.bg_img}></div>
              <div className={styles.cover_user}>
                <img
                  src="https://freelancer.timviec365.vn/thumb/2023/09/07//job-1694050506.jpg"
                  alt="avt"
                />
                <a>
                  <p className={styles.name_user}>Cty Dũng</p>
                </a>
              </div>
            </div>
            <div className={styles.content_it_bottom}>
              <a>
                <h3 className={styles.title_content_it}>
                  laptop thinkpad t480s new 99 giá cả thương lượng
                </h3>
                <p className={styles.it_min_left}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home01.png"
                      alt="icon"
                    />
                  </span>
                  Hà Nội
                </p>
                <p className={styles.it_min_right}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home02.png"
                      alt="icon"
                    />
                  </span>
                  Toàn thời gian tạm thời
                </p>
                <p className={styles.text_content_it01}>
                  <span>1 lượt đặt giá</span>
                  <span className={styles.f_left}>Hết hạn: 25/09/2023</span>
                </p>
                <p className={styles.text_p_it_bottom}>ac</p>
              </a>
            </div>
            <span className={styles.price_tag}>12.313 VNĐ</span>
          </div>
          <div className={styles.content_it_duan}>
            <div className={styles.content_it_top}>
              <img src="./img_demo02.png" alt="duan" />
              <div className={styles.bg_img}></div>
              <div className={styles.cover_user}>
                <img
                  src="https://freelancer.timviec365.vn/thumb/2023/09/07//job-1694050506.jpg"
                  alt="avt"
                />
                <a>
                  <p className={styles.name_user}>Cty Dũng</p>
                </a>
              </div>
            </div>
            <div className={styles.content_it_bottom}>
              <a>
                <h3 className={styles.title_content_it}>
                  laptop thinkpad t480s new 99 giá cả thương lượng
                </h3>
                <p className={styles.it_min_left}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home01.png"
                      alt="icon"
                    />
                  </span>
                  Hà Nội
                </p>
                <p className={styles.it_min_right}>
                  <span className={styles.ic_home}>
                    <img
                      className={styles.lazyloaded}
                      src="./ic_home02.png"
                      alt="icon"
                    />
                  </span>
                  Toàn thời gian tạm thời
                </p>
                <p className={styles.text_content_it01}>
                  <span>1 lượt đặt giá</span>
                  <span className={styles.f_left}>Hết hạn: 25/09/2023</span>
                </p>
                <p className={styles.text_p_it_bottom}>ac</p>
              </a>
            </div>
            <span className={styles.price_tag}>12.313 VNĐ</span>
          </div>
        </Slider>
      </div>
    );
  }
}
