import "./findAlternatives.css";
import th from "../../assets/th.jpg";

function FindAlternatives() {
  return (
    <div className="FindAlternatives">
      <div className="Alternatives">
        <div className="title">Find Alternatives</div>
        <div className="table-responsive">
          <table class="table ">
            <thead>
              <tr className="data head">
                <th scope="col">Brand/service</th>
                <th scope="col"></th>
                <th scope="col">Description</th>
                <th scope="col">Top Alternatives</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="data">
                <td>
                  <img src={th} alt="" /> Coca Cola{" "}
                </td>
                <td>See Why</td>
                <td colSpan="2">A popular coke drink</td>
                <td>
                  <img className="imgAlt" src={th} alt="" />
                  <img className="imgAlt" src={th} alt="" />
                  <img className="imgAlt" src="" alt="" />
                </td>
                <td>Compare</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FindAlternatives;
