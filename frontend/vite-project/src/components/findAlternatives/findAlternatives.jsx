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
    <tr>
      <th scope="col">Brand/service</th>
      <th scope="col"></th>
      <th scope="col">Description</th>
      <th scope="col">Top Alternatives</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr className="data">
      <td><img src={th} alt="" /> Coca Cola </td>
      <td>See Why</td>
      <td >A popular coke drink</td>
      <td >
        <img src={th} alt="" />
        <img src={th} alt="" />
        <img src="" alt="" />
      </td>
      <td>Compare</td>
    </tr>
    <br />
    <tr>
      <td><img src={th} alt="" /> Coca Cola </td>
      <td>See Why</td>
      <td >A popular coke drink</td>
      <td >
        <img src={th} alt="" />
        <img src={th} alt="" />
        <img src="" alt="" />
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

