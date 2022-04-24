import {
  AnuraWebDistribution,
  AnuraWebGraph11,
} from "../../utils/allImgs"

import SectionHeading from "../SectionHeading"

const TokenDistribution = ({data , ClassSpanTitle}) => {

    return (

      <section className="token-distribution section-padding-100-85">
        <div className="container">
          <SectionHeading
            title="Tokenomics"
            text="Our Protocol Allocation"
            ClassSpanTitle={ClassSpanTitle}
          />

          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12">
              <div>
                <h2 className="text-center mb-30" data-aos="fade-up" data-aos-delay="0.3s">Funds Allocation</h2>
                <img draggable="false" src={AnuraWebDistribution} className="center-block" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 mt-s">
              <h2 className="text-center mb-30" data-aos="fade-up" data-aos-delay="0.3s">Token Distribution</h2>
              <div className="row">
                <div className="col-sm-4">

                  <div>
                    <img draggable="false" src={AnuraWebGraph11} className="center-block" alt="" />
                  </div>
                </div>
                <div className="col-sm-8">
                  {data && data.map((item , key) => (
                      <div className="token-info" key={key}>
                        <div className={item.ClassName}>
                          <div className="token-icon">{item.Num}</div>
                          <div className="token-descr">{item.descr}</div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default TokenDistribution