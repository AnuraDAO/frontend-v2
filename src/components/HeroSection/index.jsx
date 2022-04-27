const SecHeroSection = ({
      ClassSec="",
      ClassDiv="",
      specialHead="",
      title="",
      link1="",
      link2="",
      img="",
      AnuraWebOr3Or4Or5Or6=true,
      AnuraWebOr4Or5Or6=true,

    }) => {

  return (
    <section className={ClassSec} id="home">
      <div className="hero-section-content">
        <div className="container ">
          <div className="row align-items-center">
            <div className={ClassDiv}>
              <div className="welcome-content">
                <div className="promo-section">
                </div>
                <h1>{title}</h1>
                <p className="w-text fadeInUp" data-wow-delay="0.3s">A governance-first organization bringing stable investment opportunities with consistent returns to decentralized finance.</p>
                <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                  <a href="https://docs.anuradao.finance" className="btn more-btn mr-3">{link1}</a>
                  <a href="https://presale.anuradao.finance/" target="_blank" rel="noreferrer noopener" className="btn more-btn">{link2}</a>
                </div>
              </div>
            </div>
            {AnuraWebOr3Or4Or5Or6 && (
              <div className="col-lg-6">
                {AnuraWebOr4Or5Or6 && (
                  <div className="illusto-2">
                    <img draggable="false" src={img} alt="" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

  );
}

export default SecHeroSection;