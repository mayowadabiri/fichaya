import { Link } from "react-router-dom";
import Button from "../components/button";

const Invoice = () => {
  return (
    <section className="invoice pt">
      <div className="container">
        <div>
          <div className="invoice__cta mb-xsm">
            <Button>Generate Invoice</Button>
          </div>
          <p className="muted mb-sm">Enter Invoice Info</p>
          <div>
            <div className="invoice__forms">
              <div className="form form1">
                <div className="form__container">
                  <div className="form__group form1-name">
                    <label className="form__label">
                      Customer/ Company Name
                    </label>
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Spleet Limited"
                    />
                  </div>
                  <div className="form__group">
                    <label className="form__label">Email address</label>
                    <input
                      type="email"
                      className="form__input"
                      placeholder="info@spleet.ng"
                    />
                  </div>
                  <div className="form__group">
                    <label className="form__label">Phone Number</label>
                    <input type="text" className="form__input" />
                  </div>
                  <div className="form__group form1-home">
                    <label className="form__label">
                      Home/ Building Address
                    </label>
                    <input
                      type="text"
                      className="form__input"
                      placeholder="51, Iwaya Road, Onike, Iwaya"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="form">
                  <div className="form__container">
                    <div className="form__group">
                      <label className="form__label">Issue Date</label>
                      <input
                        type="date"
                        className="form__input"
                        placeholder="Spleet Limited"
                      />
                    </div>
                    <div className="form__group">
                      <label className="form__label">Due Date</label>
                      <input
                        type="date"
                        className="form__input"
                        placeholder="Spleet Limited"
                      />
                    </div>
                    <div className="form__group">
                      <label className="form__label">Invoice Number</label>
                      <input
                        type="text"
                        className="form__input"
                        placeholder="000000001"
                      />
                    </div>
                    <div className="form__group">
                      <label className="form__label">V.A.T %</label>
                      <input
                        type="text"
                        className="form__input"
                        placeholder="7.5%"
                      />
                    </div>
                    <div className="form__group form2-desc">
                      <label className="form__label">Service Description</label>
                      <input
                        type="text"
                        className="form__input"
                        placeholder="5 Bedroom Duplex post-con cleaning"
                      />
                    </div>
                    <div className="form__group">
                      <label className="form__label">Service amount</label>
                      <input
                        type="text"
                        className="form__input"
                        placeholder="NGN 45,000"
                      />
                    </div>
                    <div className="form__group">
                      <label className="form__label">Total Amount</label>
                      <input
                        type="text"
                        className="form__input form__input-disabled"
                        placeholder="NGN 48,375"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="invoice__buttons mt-sm">
                <button className="cta cta__blue">Cancel</button>
                <Link to="/preview" className="cta cta__yellow">
                  CREATE INVOICE <span style={{fontWeight: 500, textTransform: "lowercase"}}>(click)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invoice;
