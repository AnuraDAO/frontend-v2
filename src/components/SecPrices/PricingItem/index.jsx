const PricingItem = ({ Round, dollar, bonus }) => {

    return (
      <div className="col-lg-3 col-sm-6 col-xs-12">
        <div className="pricing-item ">
          <h4>Day {Round}</h4>
          <h3><strong className="xzc-1-month">{dollar}</strong></h3> 
          <span>AVAX/RIBT</span>
          <div className="pricing"></div>
          <label><strong>{bonus} Current Price</strong></label>
        </div>
      </div>
    );
}

export default PricingItem;