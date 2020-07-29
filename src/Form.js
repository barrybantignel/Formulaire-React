import React, {Component} from 'react';
import Car from './Car'

class Form extends Component {

    state = {
        username: '',
        color:'',
        colors: ["", "red", "blue", "green", "black", "pink"],
        comment:''
    }

    
   handlerPseudo= (e) => {
       this.setState({
       username: e.target.value
    })
}

   handleColor= (event) => {
             
       this.setState({
       color: event.target.value
       })
       
   }

   handleComments= (event) => {

    this.setState({
    comment: event.target.value
    })
   }

   handleSubmitForm= (e) => {
       e.preventDefault(); // ppur sauvegarder les données en empechant le rechargement de la page
       console.log(`Username: ${this.state.username} Couleur: ${this.state.color} Commentaire: ${this.state.comment}`)

   }
    

    render() {
        return(
            <div>
                <Car color={this.state.color} height="400" />
                <h1>Commentaire</h1>
                
                <form onSubmit={this.handleSubmitForm}>
                    <div>

                    <label>Pseudo</label>
                    <input type="text" value={this.state.username} onChange={this.handlerPseudo} />
                   
                    </div>

                    <div>
                        
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color, index) => {
                                return <option key= {index} value={color}>{color}</option>
                                })
                            }
                         
                        </select>
                    </div>

                    <div>

                        <label>Commentaire</label>
                        <textarea value= {this.state.comment} onChange= {this.handleComments}></textarea>
                        
                    </div>

                    <button>Valider</button>
                  
                </form>
            </div>
        )
    }
}
export default Form;