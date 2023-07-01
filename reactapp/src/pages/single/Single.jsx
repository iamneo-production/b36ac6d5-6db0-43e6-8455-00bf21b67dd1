import "./single.css";

const Single = () => {
  return (
    <div className="single">
      <div className="singleContainer">
       
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
            
              <div className="details">
                <h1 className="itemTitle"></h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">user1@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 9876543210</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Hyderabad,Telangana
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">INDIA</span>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default Single;
