import { useState } from 'react'
function RobotForm (props) { 
    const { onAdd } = props
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [mass, setMass] = useState('')

    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleType=(e)=>{
        setType(e.target.value)
    }
    const handleMass=(e)=>{
        setMass(e.target.value)
    }

    const add = (e) => {
        onAdd({
           name,type,mass
        })
        setName('')
        setType('')
        setMass('')
    }

        return (
            <div>  
            <form>
              <label for='name'>Name</label>             
              <input type="text" id='name' name="name" value={name} placeholder="Name" onChange={e=>handleName(e)} />
              <label for='type'>Type</label>    
              <input type="text" id='type' name="type" value={type} placeholder="Type" onChange={e=>handleType(e)} />
              <label for='mass'>Mass</label>    
              <input type="text" id='mass' name="mass" value={mass} placeholder="Mass" onChange={e=>handleMass(e)} />
              <input
                type="button"
                value="add"
                onClick={add}
              />
              <p>RobotForm</p>
              </form> 
            </div>
          );
}
export default RobotForm;
// class RobotForm extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         type: "",
//         name: "",
//         mass: ""
//       };
   
//       this.handleChangeType=(event)=>{
//           this.setState({
//               type:event.target.value
//               });
//       }
//        this.handleChangeName=(event)=>{
//           this.setState({
//               name:event.target.value
//               });
//       }
//        this.handleChangeMass=(event)=>{
//           this.setState({
//               mass:event.target.value
//               });
//       }
//     }
//     render() {
//       return (
//         <div>                
//           <input type="name" id="name" value={this.state.name} placeholder="Name" onChange={event=>this.handleChangeName(event)} />
//           <input type="text" id="type" value={this.state.type} placeholder="Type" onChange={event=>this.handleChangeType(event)} />
//           <input type="text" id="mass" value={this.state.mass} placeholder="Mass" onChange={event=>this.handleChangeMass(event)} />
//           <input
//             type="button"
//             value="add"
//             onClick={() =>
//               this.props.onAdd({
//                 name: this.state.name,
//                 type: this.state.type,
//                 mass: this.state.mass
//               })
//             }
//           />
//           <p>RobotForm</p>
//         </div>
//       );
//     }
//   }
  


