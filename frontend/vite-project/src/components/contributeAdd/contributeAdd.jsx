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
                  <input type="text" placeholder="" />
                </div>
              </div>
            </div>
            <div className="brandIdf">
              <div className="idfName">Brand description</div>
              <div className="idField">
                <div className="search-bar">
                  <input type="text" placeholder="" />
                </div>
              </div>
            </div>
            <div className="brandIdf">
              <div className="idfName">Counrty of origin</div>
              <div className="idField">
                <div className="search-bar">
                  <input type="text" placeholder="" />
                </div>
              </div>
            </div>
            <div className="brandIdf">
              <div className="idfName">Brand logo</div>
              <div className="idField">
                <button className="fileButton">Attach a file</button>
              </div>
            </div>
            <div className="brandIdf ">
              <div className="idfName optional">
                Additional information : (optional){" "}
              </div>
            </div>
            <div className="brandIdf">
              <div className="idfName">Brand logo 2</div>
              <div className="idField">
                <button className="fileButton">Attach a file</button>
              </div>
            </div>
            <div className="brandIdf">
              <div className="idfName">Brand logo 3</div>
              <div className="idField">
                <button className="fileButton">Attach a file</button>
              </div>
            </div>
            <div className="brandIdf">
              <div className="idfName">Parent company</div>
              <div className="idField">
                <div className="search-bar">
                  <input type="text" placeholder="" />
                </div>
              </div>
            </div>
            <div className="brandIdf">
              <div className="idfName">Subsediaries</div>
              <div className="idField">
                <div className="search-bar">
                  <input type="text" placeholder="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="title">3- why it should be added ? </div>
        <div className="cardContent">
          <div className=" card">
            Write an article explaining why you believe this brand should be
            listed on boycott.org, the article have to be subjective and show
            how the brand is abusing it's position in the market, the article
            have to be based on facts that can be confirmed for it to pass the
            review process.
            <div className="why">
              <textarea type="text" placeholder="" />
            </div>
          </div>
        </div>
        <div className="title">4- provide evidence </div>
        <div className="cardContent">
          <div className=" card">
            Attach any files, pictures, screenshots and links that we can use to
            confirmm that your addition is valid.
            <div className="brandIdf">
              <div className="idfName">Add a link</div>
              <div className="idField">
                <div className="search-bar">
                  <input type="text" placeholder="" />
                </div>
              </div>
            </div>
            <div className="brandIdf">
              <div className="idfName">Add an image</div>
              <div className="idField">
                <button className="fileButton">Attach a file </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="submit">
        <button className="submitButton">Submit add request</button>
      </div>
    </div>
  );
}

export default ContributeAdd;
