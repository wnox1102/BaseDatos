import React, { Component } from 'react'

export class form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }
    /**
     * Funcion para detectar los cambios ingresados por el input y guardarlos en la variable email del estado
     * @param e 
     * 
     */
    handleChange =  (e)=>{
        this.setState({email:e.target.value})
    }
    /**
     * Metodo render : El cual va a renderizar todo el codigo HTML que se encuentre dentro de el 
     */
    render() {
        
        const email = this.state.email;
        return (
            <>
                
                <form>
                    <div className='form-group'>
                        <label for='email'>Email Address</label>
                        <input value={email} type='email' className='form-control' id='email' aria-describedby="emailHelp" onChange={this.handleChange}/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className='form-group'>
                        <label for="exampleInputPassword1"> Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <div className='form-group form-check'>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <h1>Este es el correo ingresado: {email}</h1>
            </>
        )
    }
}

export default form
