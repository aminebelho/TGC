import "./TodaysPicks.css";
import th from "../../assets/th.jpg";
import { BsArrowRight } from "react-icons/bs";

function TodaysPicks() {
  return (
    <div className="TodaysPicks">
      <div className="Picks">
        <div className="title">Today's Picks</div>
        <div class="container text-center">
          <div class="row row-cols-2">

            <div class="col">
              <div className="gridContent">
                {" "}
                <img src={th} alt="" />
                <div className=" desc">
                Featured here for supporting mass genocide in Gaza 
                <br />
                view alternatives <BsArrowRight />
              </div>
              </div>
            </div>
            <div class="col">
              <div className="gridContent">
                {" "}
                <img src={th} alt="" />
                <div className=" desc">
                Featured here for supporting mass genocide in Gaza 
                <br />
                view alternatives <BsArrowRight />
              </div>
              </div>
            </div>
            <div class="col">
              <div className="gridContent">
                {" "}
                <img src={th} alt="" />
                <div className=" desc">
                Featured here for supporting mass genocide in Gaza 
                <br />
                view alternatives <BsArrowRight />
              </div>
              </div>
            </div>
            <div class="col">
              <div className="gridContent">
                {" "}
                <img src={th} alt="" />
                <div className=" desc">
                Featured here for supporting mass genocide in Gaza 
                <br />
                view alternatives <BsArrowRight />
              </div>
              </div>
            </div>
            
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default TodaysPicks;
