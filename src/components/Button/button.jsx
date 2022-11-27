import React,{Component} from 'react'
import './style.css'

class SubscribeButton extends Component {
 
  state = { fullName: "",
            id: "",
            gender: "male",
            age: "",
            mail: "",
            phoneNumber: "", 
            simptom: "",
            abune: false
          };

  handleChange = (event) => {
      this.setState({[ event.target.name] : event.target.value});
  }

  handleCheckboxChange = (event) => {
    this.setState({ abune: !this.state.abune });
  }

  handleClick = () => {
    console.log(this.state);
    alert("Kart qeydiyyatdan keçdi");

  };

  render() {
    return (
      <div className='user'>
  <label>  
    Xəstənin tam adı:
    <br></br>   
    <input onChange={this.handleChange} className="user-name" name="fullName" type="text" required/>
  </label>
  <br></br>
  <br></br>
  <label>
    Vəsiqə seriyası və nömrəsi:
    <br></br> 
    <input onChange={this.handleChange} className="series" name="id" type="text" required/>
  </label>
  <br></br>
  <br></br>
  <label>
    Cinsi:
    <br></br>
  <select onChange={this.handleChange} name="gender">
    <option value="male">Kişi</option>
    <option value="female">Qadın</option>
  </select>
  </label>
  <br></br>
  <br></br> 
  <label> 
    Yaş:  
    <br></br> 
    <input onChange={this.handleChange} className="user-age" name="age" type="number"/>
  </label>
  <br></br>
  <br></br>
  <label>
    E-mail:
    <br></br>
    <input onChange={this.handleChange} className="e-mail" name="mail" type="email"/>
  </label>
  <br></br>
  <br></br>
  <label>
   Telefon nömrəsi:
   <br></br>
    <input onChange={this.handleChange} className="pNumber" name="phoneNumber" type="text"/>
  </label>
  <br></br>
  <br></br>
  <label>
Simptomların təsviri:
<br></br>
<textarea onChange={this.handleChange} rows="5" cols="30" name="simptom">
   </textarea>
  </label>
  <br></br>
  <br></br>
  <label>
   Abunə olun:
  <input onChange={this.handleCheckboxChange} checked={this.state.abune} className='checkbox' type="checkbox"/>
  </label>
  <br></br>
  <br></br>
  <button onClick={this.handleClick}>Göndər</button>
      </div>
    );
  }
 }

 export default SubscribeButton