import{
  FooterLogo
} from '../../../utils/allImgs'

import '../Footer.scss'

import IcoName from '../../../data/data-layout/Footer/data-IcoName.json'
import TextFooter from '../../../data/data-layout/Footer/data-TextFooter.json'

const FooterPages = ({ClassSpanTitle=""}) => {
    return (

      <footer className="footer-area bg-img mt-5">
        <div className="footer-area bg-img">
          <div className="footer-content-area demo">
            <div className="container">
              <div className="row ">
                <div className="col-12 col-lg-4 col-md-6">
                  <div className="footer-copywrite-info">
                    <div className="copywrite_text fadeInUp" data-wow-delay="0.2s">
                      <div className="footer-logo">
                        <a href="#"><img draggable="false" src={FooterLogo} alt="logo" /> </a>
                      </div>
                      <p>© 2022 Anura Finance</p>
                      <p>All marketing and partnership inqueries should be submitted to marketing@anuradao.finance</p>
                    </div>
                    <div className="footer-social-info fadeInUp" data-wow-delay="0.4s">
                      {IcoName && IcoName.map((item , key) => (
                          <a key={key} href={item.linksrc}><i className={item.IcoName} aria-hidden="true" /></a>
                              
                      ))}
                    </div>
                  </div>
                </div>

                {TextFooter && TextFooter.map((item , key) => (
                  <div key={key} className={item.classBlock}>
                    <div className="contact_info_area d-sm-flex justify-content-between">
                      <div className={item.classInfo} data-wow-delay="0.3s">
                        <h5>{item.title}</h5>
                        <a href><p>{item.text1}</p></a>
                        <a href><p>{item.text2}</p></a>
                        <a href><p>{item.text3}</p></a>
                        <a href><p>{item.text4}</p></a>
                        {item.text5 && <a href><p>{item.text5}</p></a>}
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}


export default FooterPages