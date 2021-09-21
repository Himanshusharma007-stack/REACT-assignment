import './App.css';
import {useState,} from 'react'


function App() {



  const [userRegistration, setUserRegistration] = useState({
    name: "",
    board: "",
    medium: "",
    standard: "",
    password: "",
    cpassword: ""
  });

  

  const handleInput= (e) => {
    const name= e.target.name;
    const value= e.target.value;

    
    setUserRegistration({...userRegistration, [name]: value});
  }


  const [records, setRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord= { ...userRegistration, id: new Date().getTime().toString() }
    setRecords([...records, newRecord]);
    window.alert('Please Check the console for the output')
    
  }


  if (records.length !== 0) {  
    console.log(records)
    }



  let style= {
    "display":"none"
  }

  return (
    <>
    <h3 className="text-center my-3">Student Registration</h3>
    <div className="m-4">
    <form action="" onSubmit={handleSubmit}>
  <div className="form-group row my-3">
    <label htmlFor="name" className="col-sm-2 col-form-label">Student Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="name" value={userRegistration.name} onChange={handleInput} name="name" autoComplete="off" required/>
    </div>
  </div>

  <div className="form-group row my-3">
    <label htmlFor="board" className="col-sm-2 col-form-label">Board</label>
    <div className="col-sm-10">
      <select className="custom-select form-control"  name="board" value={userRegistration.board} onChange={handleInput} required>
    <option style={style}>Please Select</option>
    <option value="1">CBSE</option>
    <option value="2">ICSE</option>
    <option value="3">M P Board</option>
    <option value="4">Other</option>
      </select>
    </div>
  </div>

  <div className="form-group row my-3">
    <label htmlFor="medium" className="col-sm-2 col-form-label">Medium</label>
    <div className="col-sm-10">
      <select className="custom-select form-control" value={userRegistration.medium} name="medium" onChange={handleInput} required>
    <option style={style}>Please Select</option>
    <option value="1">English</option>
    <option value="2">Hindi</option>
    <option value="3">Other</option>
      </select>
    </div>
  </div>

  <div className="form-group row my-3">
    <label htmlFor="standard" className="col-sm-2 col-form-label">Standard</label>
    <div className="col-sm-10">
      <select className="custom-select form-control" name="standard" value={userRegistration.standard} onChange={handleInput} required>
    <option style={style}>Please Select</option>
    <option value="1">9th</option>
    <option value="2">10th</option>
    <option value="3">11th</option>
    <option value="4">12th</option>
      </select>
    </div>
  </div>

  <div className="form-group row my-3">
    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" value={userRegistration.password} onChange={handleInput} id="password" name="password" autoComplete="off" required/>
    </div>
  </div>

  <div className="form-group row my-3">
    <label htmlFor="cpassword" className="col-sm-2 col-form-label">Confirm Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" value={userRegistration.cpassword} onChange={handleInput} id="cpassword" name="cpassword" autoComplete="off" required/>
    </div>
  </div>


  <div className="text-center">
<button type="submit" className="btn btn-success btn-lg"  >Submit</button>
</div>



</form>



</div>



    </>
  );
}

export default App;
