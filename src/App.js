import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [dropdata, setDropdata] = useState("");
  const [file, setFile] = useState("");
  const [response, setResponse] = useState(null);

  // console.log(data);
  // console.log(dropdata);
  // console.log(file);
  const onSubmit = () => {
    console.log(file)
    const body = {
      label: dropdata,
      uploadFile: file.name,
    };
    axios
      .post("https://intern.rightfullabs.com/assignment/postData",body)
      .then((res) => setResponse(res.data.Response))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .post("https://intern.rightfullabs.com/assignment/dropDownList")
      .then((res) => setData(res.data.dropdown))
      .catch((err) => console.log(err));
  }, []);
  console.log(response)
  return (
    <div className="App" style={{marginTop:"10rem"}}>
      {data && (
        <select onChange={(e) => setDropdata(e.target.value)}>
          <option>Select any option</option>
          {data.map((data) => (
            <option key={data.id}>{data.label}</option>
          ))}
        </select>
      )}
      &nbsp;
      &nbsp;
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br />
      <br />
      <button onClick={onSubmit}>Submit</button>
      <br />
      <br />
      {
        response && (
           <h4>Response:<br /> label: {response.label} <br /> uploadFile: {response.uploadFile}</h4>
        )
      }
     
    </div>
  );
}

export default App;
