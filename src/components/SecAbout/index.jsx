const SecAbout = ({imgDwon=false , title , text , img}) => {

  return (
    <>
      {imgDwon ? (
          <section className="about-us-area section-padding-100 clearfix">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 offset-lg-0">
                  <div className="who-we-contant mt-s">
                    <div className="dream-dots text-left" data-aos="fade-up" data-aos-delay="300">
                      <span className="gradient-text blue">{title}</span>
                    </div>
                    <h4 data-aos="fade-up" data-aos-delay="300">{text}</h4>
                    <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                    <p data-aos="fade-up" data-aos-delay="400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa ut quasi adipisci voluptates, voluptatibus aliquid alias beatae reprehenderit incidunt iusto laboriosam.</p>
                    <a className="btn more-btn mt-30" href="#">Read More</a>
                  </div>
                </div>
                <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
                  <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
                    <img draggable="false" src={img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (

          <section className="about-us-area section-padding-100 clearfix" id="about">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
                  <div className="welcome-meter" data-aos="fade-up" data-aos-delay="200">
                    <img draggable="false" src={img} alt="" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 offset-lg-0">
                  <div className="who-we-contant mt-s">
                    <div className="dream-dots text-left" data-aos="fade-up" data-aos-delay="300">
                      <span className="gradient-text ">For the Next-Generation Investor</span>
                    </div>
                    <h4 data-aos="fade-up" data-aos-delay="300">Real Utility and Rock-Solid Stability</h4>
                    <p data-aos="fade-up" data-aos-delay="300">We are focused on providing utility and opportunities for stable and consistent yield return for those who participate in our protocol. With a doxed development team and years of collective experience in traditional finance, decentralized finance, and the greater field of technology; we are primed for rapid development and long-term protocol growth.</p>
                    <p data-aos="fade-up" data-aos-delay="400">Our development team has been hard at work to bring welcomed, long-sought-after innovation and stability to the DeFi space. It’s long past time to deal with rampant manipulation and projects that only benefit the ground-floor. We are looking to change the game by bringing some common-sense investment principles into decentralized finance. With a wealth of protocol utility and a focus on stable and consistent return on investment, Anura will become a sure footing for the future of decentralized projects.</p>
                    <a className="btn more-btn mt-30" href="https://anuradao.medium.com/" target="_blank" rel="noreferrer noopener">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        )}
    </>
  );
}

export default SecAbout;