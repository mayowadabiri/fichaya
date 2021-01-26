// @ts-nocheck
import Logo from "../assets/path0.png";
import Button from "../components/button";

const Preview = () => {
  return (
    <section className="preview pt">
      <div className="container">
        <div className="invoice__cta mb-xsm">
          <Button>Generate Invoice</Button>
        </div>
        <p className="muted mb-sm">Enter Invoice Info</p>
        <div className="preview__form">
          <div className="preview__form-container">
            <div className="preview__logo">
              <img src={Logo} alt="logo" />
              <p className="muted">Invoice</p>
            </div>
            <div className="preview__items">
              <div className="preview__items-1">
                <div>
                  <p className="muted">FROM</p>
                  <p>FICHAYA</p>
                  <p>finance@fichaya.com</p>
                  <p>+2348177141611</p>
                </div>
                <div>
                  <p className="muted">BILL TO</p>
                  <p style={{ fontWeight: 600 }}>Spleet Nigeria Limited</p>
                  <p>info@spleet.ng</p>
                  <p>51, Iwaya Road, Onike Yaba</p>
                  <p>+2348140564969</p>
                </div>
              </div>
              <div className="preview__items-2">
                <div>
                  <p className="muted">STATUS</p>
                  <p style={{ fontWeight: 600, color: "#F6431E" }}>UNPAID</p>
                </div>
                <div>
                  <p className="muted">CREATED</p>
                  <p>October 8, 2020</p>
                </div>
                <div>
                  <p className="muted">DUE</p>
                  <p>October 11, 2020</p>
                </div>
                <div>
                  <p className="muted">Amount</p>
                  <p>NGN 48, 375</p>
                </div>
              </div>
            </div>
            <div className="preview__table">
              <div className="preview__title">
                <p className="muted">Description</p>
                <p className="muted">QTY</p>
                <p className="muted">UNIT PRICE</p>
                <p className="muted">AMOUNT</p>
              </div>
              <hr className="hr" />
              <div className="preview__detail">
                <p>
                  5 Bedroom Duplex <br /> post-con cleaning
                </p>
                <p>1</p>
                <p>NGN 45,000</p>
                <p>NGN 45,000</p>
              </div>
            </div>
            <div className="preview__amount">
              <div>
                <div className="preview__list">
                  <p className="muted">SUB-TOTAL</p>
                  <p>NGN 45, 000</p>
                </div>
                <div className="preview__list">
                  <p className="muted">VAT (7.5%)</p>
                  <p>NGN 3,375</p>
                </div>
                <div className="preview__list">
                  <p className="muted">TOTAL</p>
                  <p className="info" style={{fontWeight: "bold", fontSize: "16px"}}>NGN 48, 375</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" preview__buttons mt-sm">
          <button className="cta cta__blue">Cancel</button>
          <button className="cta cta__yellow">CREATE INVOICE</button>
        </div>
      </div>
    </section>
  );
};

export default Preview;
