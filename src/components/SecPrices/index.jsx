import SectionHeading from "../SectionHeading"
import PricingItem from "./PricingItem"

const SecPrices = ({ClassSec="features section-padding-0-70" , data , ClassSpanTitle}) => {

    return (

      <section className={ClassSec}>
        <div className="container">

          <SectionHeading
            title="Token Pricing"
            text="Presale Event Purchases"
            ptext="Our presale event will unfold over five days. Investors without whitelist status will have the option to purchase tokens at 5% above current price, increasing by an additional 5% for each subsequent day of the event."
            ClassSpanTitle={ClassSpanTitle}
          />          
          <div className="row align-items-center">
            {data && data.map((item , key) => (
              <PricingItem
                key={key}
                Round={item.Round}
                dollar={item.dollar}
                bonus={item.bonus}
              />
            ))}
          </div>
        </div>
      </section>
    );
}

export default SecPrices;