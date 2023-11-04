import "./contributeAdd.css";
import { AiOutlineSearch } from "react-icons/ai";

function ContributeAdd() {
  return (
    <div className="add">
      <div className="content">
        <div className="title">Request adding a brand</div>
        <div className="cardContent">
          <div className=" card">
            Contributions to boycott.org are completely anonymous , we don't
            collect any personal data nor data that can be used for
            fingerprinting your browser , any unsaved changes to this page will
            be lost if you close your browser before submitting your request.
          </div>
        </div>
        <div className="title">1- Make sure the brand isn't alredy added</div>
        <div className="cardContent">
          <div className=" card">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Lookup a brand"
                // value={query}
                // onChange={handleInputChange}
              />
              <div className="searchIcon">
                <AiOutlineSearch />
              </div>
            </div>
            if you can't find the brand nor it's parent company you can proceed
            with the process
          </div>
        </div>
        <div className="title">2- Brand identification </div>
        <div className="cardContent">
          <div className=" card">
            <div className="brandIdf">
              <div className="idfName">Brand name</div>
              <div className="idField">
                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Lookup a brand"
                    // value={query}
                    // onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContributeAdd;
