import styles from './Footer.module.css'
import { LIST_KEYWORDS, LIST_MENU } from './constants'
import { Button, Col, Collapse, List, Row } from 'antd'
import Image from 'next/image'
import { HorizontalLine } from '../commons/Components'

export const Footer = () => {
  const COLOR_WHITE = '#fff'
  const logo = () => <Image alt='/' src={url} width={35} height={35} />

  const qr = () => (
    <div className={styles.singleQr}>
      <Image alt='/' src={url} width={115} height={115} />
      <p style={{ color: COLOR_WHITE }} className={styles.qrText}>
        {txt}
      </p>
    </div>
  )

  const downloadButton = () => (
    <Button
      className={styles.btnDownload}
      icon={<Image alt='/' src={'/download.png'} width={20} height={20} />}
      style={{ width: '100%' }}>
      <p style={{ color: COLOR_WHITE, fontSize: '14px', padding: '5px' }}>
        {txt}
      </p>
    </Button>
  )

  const myCollapse = () => {
    return (
      <Collapse
        key={index}
        expandIconPosition='end'
        style={{ color: '#fff' }}
        bordered={false}
        expandIcon={({ isActive }) => (
          <Image alt='/' src={'/down-w.png'} width={14} height={14} />
        )}
        items={[
          {
            children: (
              <List
                grid={{ column: 2 }}
                dataSource={listItems}
                renderItem={(item) => (
                  <List.Item>
                    <p
                      className={styles.insideTxt}
                      style={{ color: COLOR_WHITE, fontStyle: 'italic' }}>
                      {item}
                    </p>
                  </List.Item>
                )}
              />
            ),
            label: (
              <p
                style={{
                  fontWeight: '600',
                  fontStyle: 'italic',
                  color: '#fff',
                }}>
                {header}
              </p>
            ),
          },
        ]}
      />
    )
  }

  const more = () => (
    <p style={{ color: COLOR_WHITE }}>
      {`Xem tất cả`}
      <Image
        alt='/'
        src={'/more-icon.png'}
        width={10}
        height={10}
        style={{ marginLeft: '10px' }}
      />
    </p>
  )

  return (
    <div className={styles.main}>
      <span className={styles.listKeywords}>
        {LIST_KEYWORDS.map((item, index) => (
          <span className={styles.singleSpan} key={index}>
            {index === LIST_KEYWORDS.length - 1 ? item : `${item},   `}
          </span>
        ))}
      </span>
      <div style={{ marginTop: '32px' }}>
        <HorizontalLine color={'rgba(255, 255, 255, 0.26)'} />
      </div>
      <div>
        <Row className={styles.menu}>
          <Col span={6}>
            <p className={styles.headerText} style={{ color: COLOR_WHITE }}>
              Về Timviec365
            </p>
            {LIST_MENU['Về Timviec365'].map((item, index) => (
              <p style={{ color: COLOR_WHITE }} key={index}>
                {item}
              </p>
            ))}
          </Col>
          <Col span={6}>
            <div className={styles.fstElm}>
              <p className={styles.headerText} style={{ color: COLOR_WHITE }}>
                Dành cho ứng viên
              </p>
              {LIST_MENU['Dành cho ứng viên'].map((item, index) => (
                <p style={{ color: COLOR_WHITE }} key={index}>
                  {item}
                </p>
              ))}
            </div>
            <div className={styles.sndElem}>
              <p style={{ color: COLOR_WHITE }} className={styles.headerText}>
                Việc làm theo khu vực
              </p>
              <div>
                {LIST_MENU['Việc làm theo khu vực'].map((item, index) => (
                  <p style={{ color: COLOR_WHITE }} key={index}>
                    {item}
                  </p>
                ))}
                {more()}
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.fstElm}>
              <p style={{ color: COLOR_WHITE }} className={styles.headerText}>
                Dành cho nhà tuyển dụng
              </p>
              {LIST_MENU['Dành cho nhà tuyển dụng'].map((item, index) => (
                <p style={{ color: COLOR_WHITE }} key={index}>
                  {item}
                </p>
              ))}
            </div>
            <div className={styles.sndElem}>
              <p style={{ color: COLOR_WHITE }} className={styles.headerText}>
                Việc làm theo ngành nghề
              </p>
              <div>
                {LIST_MENU['Việc làm theo ngành nghề'].map((item, index) => (
                  <p style={{ color: COLOR_WHITE }} key={index}>
                    {item}
                  </p>
                ))}
                {more()}
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.fstElm}>
              <p style={{ color: COLOR_WHITE }} className={styles.headerText}>
                Tiện ích
              </p>
              {LIST_MENU['Tiện ích'].map((item, index) => (
                <p style={{ color: COLOR_WHITE }} key={index}>
                  {item}
                </p>
              ))}
            </div>
            <div className={styles.sndElem}>
              <p style={{ color: COLOR_WHITE }} className={styles.headerText}>
                Việc làm theo tag
              </p>
              <div>
                {LIST_MENU['Việc làm theo tag'].map((item, index) => (
                  <p style={{ color: COLOR_WHITE }} key={index}>
                    {item}
                  </p>
                ))}
                {more()}
              </div>
            </div>
          </Col>
        </Row>
        <div className={styles.collapses}>
          {Object.keys(LIST_MENU).map((key, index) => {
            return myCollapse(key, LIST_MENU[key], index)
          })}
        </div>
        <div style={{ marginTop: '32px' }}>
          <HorizontalLine color={'rgba(255, 255, 255, 0.26)'} />
        </div>
        <Row
          gutter={{ lg: 25, md: 25, xs: 15 }}
          className={styles.thirdSection}>
          <Col lg={4} md={6} sm={7} xs={24}>
            <Image alt='/' src={'/footer-logo.png'} width={176} height={38} />
            <p
              style={{ color: COLOR_WHITE, textTransform: 'uppercase' }}
              className={styles.txt}>
              Kết nối với TIMVIEC365.VN
            </p>
            <div className={styles.listLogo}>
              {logo('/round-365.png')}
              {logo('/fb.png')}
              {logo('/twitter.png')}
              {logo('/youtube.png')}
            </div>
            <div className={styles.listCert}>
              <Image
                alt='/'
                src={'/dky.png'}
                width={79}
                height={29}
                style={{ marginRight: '8px' }}
              />
              <Image alt='/' src={'/dmca.png'} width={96} height={29} />
            </div>
          </Col>
          <Col lg={9} md={18} sm={17} xs={24} className={styles.aboutComp}>
            <p className={styles.compNameText} style={{ color: COLOR_WHITE }}>
              CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ
            </p>
            <p className={styles.compInfoText} style={{ color: COLOR_WHITE }}>
              VP 1: Tầng 4, B50, Lô 6, KĐT Định Công - Hoàng Mai - Hà Nội
            </p>
            <p className={styles.compInfoText} style={{ color: COLOR_WHITE }}>
              VP2: Thôn Thanh Miếu, Xã Việt Hưng, Huyện Văn Lâm, Tỉnh Hưng Yên
            </p>
            <p className={styles.compInfoText} style={{ color: COLOR_WHITE }}>
              VP3: Tầng 3, Số 1 đường Trần Nguyên Đán, Khu Đô Thị Định Công,
              Hoàng Mai, Hà Nội
            </p>
            <p className={styles.compInfoText} style={{ color: COLOR_WHITE }}>
              Hotline: 1900633682 - ấn phím 1
            </p>
            <p className={styles.compInfoText} style={{ color: COLOR_WHITE }}>
              Email: timviec365.vn@gmail.com
            </p>
          </Col>
          <Col lg={11} md={0} sm={0} className={styles.qrSection}>
            <span
              className={styles.qrHeaderText}
              style={{
                color: COLOR_WHITE,
                textTransform: 'uppercase',
              }}>
              Tải app để tìm việc siêu tốc
            </span>
            <div className={styles.listQr}>
              {qr('/qr-uv.png', 'App Timviec365 UV')}
              {qr('/qr-ntd.png', 'App Timviec365 NTD')}
              {qr('/qr-cv365.png', 'App CV365')}
              {qr('/qr-chat365.png', 'App Chat365')}
            </div>
          </Col>
        </Row>
        <div className={styles.downloadSection}>
          <div style={{ margin: '32px 0px' }}>
            <HorizontalLine color={'rgba(255, 255, 255, 0.26)'} />
          </div>
          <p
            style={{
              marginBottom: '15px',
              color: COLOR_WHITE,
              textTransform: 'uppercase',
              display: 'flex',
              justifyContent: 'center',
            }}>
            Tải app để tìm việc siêu tốc
          </p>
          <Row gutter={{ sm: 10, xs: 5 }}>
            <Col sm={7} xs={12}>
              {downloadButton('Tải app Timviec365 UV')}
            </Col>
            <Col sm={7} xs={12}>
              {downloadButton('Tải app Timviec365 NTD')}
            </Col>
            <Col sm={5} xs={12}>
              {downloadButton('Tải app CV365')}
            </Col>
            <Col sm={5} xs={12}>
              {downloadButton('Tải app Chat365')}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
