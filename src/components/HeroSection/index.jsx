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


    // <>
    //   {AnuraWeb && (
    //     <section className={"hero-section moving section-padding"} id="home">
    //       <div className="moving-bg" />
    //       <div className="hero-section-content">
    //         <div className="container ">
    //           <div className="row align-items-center">
    //             <div className={"col-12 col-lg-5 col-md-12"}>
    //               <div className="welcome-content">
    //                 <div className="promo-section">
    //                   <h3 className="special-head dark">{specialHead}</h3>
    //                 </div>
    //                 <h1 className="" data-aos-delay="200">{title}</h1>
    //                 <p className="w-text " data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet.</p>
    //                 <div className="dream-btn-group " data-aos-delay="400">
    //                   <a href="#" className="btn more-btn mr-3">{link1}</a>
    //                   <a href="#" className="btn more-btn">{link2}</a>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-lg-6">
    //               <div className="dotted mt-30 " data-aos-delay="500">
    //                 <img draggable="false" src={img} alt="" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   )}