import Button from "../components/button";
import caret from "../assets/caret.svg";
import { Link } from "react-router-dom";

const Request = () => {
  return (
    <section className="request pt">
      <div className="container">
        <div className="request__container">
          <div className="request__cta mb-sm">
            <Button>Request Information</Button>
          </div>
          <div className="summary">
            <div className="container">
              <div className="summary__container">
                <div className="summary__list">
                  <p className="muted">Request Type</p>
                  <p className="info">Post-con</p>
                </div>
                <div className="summary__list">
                  <p className="muted">Customer Name</p>
                  <p className="info">peter abu-ekpeshie</p>
                </div>
                <div className="summary__list">
                  <p className="muted">Cleaning date</p>
                  <p className="info">19&#8226;10&#8226;2019</p>
                </div>
                <div className="summary__list">
                  <p className="muted">Invoice Status</p>
                  <p className="status">ungenerated</p>
                </div>
                <div className="summary__list">
                  <p className="muted">request date</p>
                  <p className="info">06&#8226;10&#8226;2019</p>
                </div>
                <div className="summary__list">
                  <p className="muted">Requst time</p>
                  <p className="info">8:00 A.M</p>
                </div>
                <div className="summary__list">
                  <p className="muted">Location</p>
                  <p className="info">8, yovi street</p>
                  <p className="info">Iwaya, onike, yaba</p>
                </div>
                <div className="summary__list">
                  <p className="muted">House type</p>
                  <p className="info">5-bedroom duplex</p>
                </div>
                <div className="summary__list">
                  <p className="muted">Cleaning date</p>
                  <p className="info">19*10*2019</p>
                </div>
                <div className="summary__dropdown">
                  <div className="summary__dropdown-cta">
                    <span>Action</span>
                    <img src={caret} alt="down" />
                  </div>
                  <div className="summary__dropdown__list">
                    <p className="item">Contact Consumer</p>
                    <Link to="/generate" className="item">
                      Generate invoice{" "}
                      <span style={{ fontWeight: 500 }}>(click)</span>
                    </Link>
                    <p className="item">Reject request</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Request;
