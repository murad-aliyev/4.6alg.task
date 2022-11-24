import React,{Component} from 'react'
import './style.css'

class SubscribeButton extends Component {
 
  state = { name: "Murad",
            email: "murad.aliev.2003m@gmail.com",
            password: "12345678", 
            ischecked: false
          };

  handleChange = (event) => {
      this.setState({[ event.target.name] : event.target.value});
  }

  handleCheckboxChange = (event) => {
    this.setState({ ischecked: !this.state.ischecked });
  }

  handleClick1 = () => this.setState({ name: ""});
  handleClick2 = () => this.setState({ email: ""});
  handleClick3 = () => this.setState({ password: "" });

  render() {
    return (
      <div className='user'>
  <label>  
    Xəstənin tam adı:
    <br></br>   
    <input class="user-name" name="fullName" type="text" required/>
  </label>
  <br></br>
  <br></br>
  <label>
    Vəsiqə seriyası və nömrəsi:
    <br></br> 
    <input class="series" name="id" type="text" required/>
  </label>
  <br></br>
  <br></br>
  <label>
    Cinsi:
    <br></br>
  <select name="gender">
    <option value="male">Kişi</option>
    <option value="female">Qadın</option>
  </select>
  </label>
  <br></br>
  <br></br>
  <br></br> 
  <label> 
    Yaş:  
    <br></br> 
    <input class="user-age" name="age" type="number"/>
  </label>
  <br></br>
  <br></br>
  <label>
    E-mail:
    <br></br>
    <input class="e-mail" name="mail" type="email"/>
  </label>
  <br></br>
  <br></br>
  <label>
   Telefon nömrəsi:
   <br></br>
    <input class="pNumber" name="phoneNumber" type="text"/>
  </label>
  <br></br>
  <br></br>
  <label>
Simptomların təsviri:
<br></br>
<textarea rows="5" cols="30" name="simptom">
   </textarea>
  </label>
  <br></br>
  <br></br>
  <label>
   Abunə olun:
  <input name="abune" type="checkbox"/>
  </label>
  <br></br>
  <br></br>
  <button>Göndər</button>
      </div>
    );
  }
 }

 export default SubscribeButton