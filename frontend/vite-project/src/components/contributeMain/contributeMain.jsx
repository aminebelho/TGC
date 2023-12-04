import "./contributeMain.css";
import { Link } from "react-router-dom";

function ContributeMain() {
  return (
    <div className="ContributeMain">
      <div className="content">
        <div className="table-responsive">
          <div className="title">Contribute</div>
          <div className="cardContent">
            <div className=" card">
              Contributing to Boycott.org benefits everyone by fostering a more
              transparent and ethical marketplace. Your input empowers consumers
              to make informed choices and encourages responsible business
              practices. We value your privacy and security, and we want you to
              know that contributing to our platform is both anonymous and
              secure. You can share your insights and information with
              confidence, knowing that your identity and data are protected.
              Together, we can shape a world where consumer power and ethical
              values drive the marketplace.
            </div>
          </div>
          <div className="subtitle">Pick a contribution method</div>
          <div className="cardContent">
            <div className=" card">
              <div className="contributionMeth">
                You can contribute to boycott.org in 3 ways :
              </div>
              <div className="contributionMeth">
                1- request adding a company/service/brand to our database.{" "}
                <button className="contributeButton">
                  <Link to="/contributeAdd">Contribute</Link>
                </button>
              </div>
              <div className="contributionMeth">
                2- request removing a company from our database.{" "}
                <button className="contributeButton">
                  <Link to="/contributeAdd">Contribute</Link>
                </button>
              </div>
              <div className="contributionMeth">
                3- donate to help us cover infostructure costs.{" "}
                <button className="contributeButton">
                  <Link to="/contributeDonate">Contribute</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContributeMain;
