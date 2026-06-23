// Import visuals
import payment_method_gcash from '../../../img/home_payment-gcash.png';
// import payment_method_wise from '../../../img/home_payment-wise.png';
import payment_method_transfer from '../../../img/home_payment-transfer.png';
// import payment_method_revolut from '../../../img/home_payment-revolut.png';
import payment_method_shine from '../../../img/home_payment-shine.png';

function HomePaymentMethods() {
  return (
    <div className="content_blk home_payment-methods ctnr_cntr">
    	<div className="intro home_intro">
			<h2 className="intro_title">Payment made easy with</h2>
    	</div>
    	<div className="home_payments-grid">
    		<img className="payment_method" src={payment_method_gcash} alt="GCash" />
    		<img className="payment_method" src={payment_method_shine} alt="Shine" />
    		<img className="payment_method" src={payment_method_transfer} alt="Bank Transfer" />
    	</div>
    </div>
  );
}

export default HomePaymentMethods;