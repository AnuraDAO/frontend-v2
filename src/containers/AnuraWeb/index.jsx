import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'

import {
        Services,
        Features2InfoTop,
        Features2InfoDown,
       } from '../../data/data-containers/AnuraWeb/data-AnuraWeb.js';

import SecPricesInfo from '../../data/data-containers/AnuraWeb/data-SecPricesInfo.json';
import RoadmapInfo from '../../data/data-containers/AnuraWeb/data-RoadmapInfo.json';
import FaqInfo from '../../data/data-containers/AnuraWeb/data-FaqInfo.json';

import {
        AnuraWebPlatform1,
        AnuraWebwhitepaper,
        AnuraWebAbout1
        } from '../../utils/allImgs'

import './style/AnuraWeb.scss'
import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'
import SecHeroSection from '../../components/HeroSection'
import SecAbout from '../../components/SecAbout'

import JoinUs from './JoinUs'
import OurJoinUsFirst from '../../data/data-containers/AnuraWeb/data-OurJoinUsFirst.json';
import OurJoinUsSecond from '../../data/data-containers/AnuraWeb/data-OurJoinUsSecond.json';

import Features2 from '../../components/Features2'
import SpreadMap from '../../components/SpreadMap'
import SecPrices from '../../components/SecPrices'
import Roadmap from '../../components/Roadmap'
import Faq from '../../components/Faq'
import OurServices from "./OurServices"

const AnuraWebContainer = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (
      
      <div>
        
        <Header Title="Anura Finance" />
        <SecHeroSection
          ClassSec="hero-section moving section-padding"
          ClassDiv="col-12 col-lg-5 col-md-12"
          title="Anura"
          link1="Whitepaper"
          link2="Buy $RIBT"
          img={AnuraWebPlatform1}
        />
        <div className="clearfix" />
        <Features2
            icoCounterClass="ico-counter mb-30"
            Features2InfoTop={Features2InfoTop}
            Features2InfoDown={Features2InfoDown}
        />
        <SecPrices data={SecPricesInfo} />
        <SecAbout
          imgDwon={false}
          title=""
          text=""
          img={AnuraWebAbout1}
        />
        <JoinUs
          OurJoinUsFirst={OurJoinUsFirst}
          OurJoinUsSecond={OurJoinUsSecond}
        />
        <OurServices data={Services}/>
        <div className="clearfix" />
        <SpreadMap whitepaper={AnuraWebwhitepaper}/>

        {/* <TokenDistribution data={TokenDistributionInfo} /> */}

        <Roadmap data={RoadmapInfo} />
        <Faq data={FaqInfo} />
        <FooterPages />
      </div>
    );
};

export default AnuraWebContainer