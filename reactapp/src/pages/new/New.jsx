import "./new.css";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    
    <div className="new">

      <div className="newContainer">
    
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
        
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file" className="label"> 
                </label>
                <input className="input"
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label className="label">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} className="input" />
                </div>
              ))}
              <button className="my-button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
