import React, { Component } from 'react'

export class table extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        
        const clients = this.props.clients /** Arreglos de JSON que vienen por props desde App.js  */
        console.log(clients)
        return (
            <>
            {clients.length>0?  /** Renderizado Condicional: Nos indica si el lenght de nuestro array es mayor que 0 hay clientes y mostramos los datos */
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {clients.map(client=> /** va a recorrer nuestro array mapeando nuestros datos con la variable client  */
                            <tr>
                                <th scope='row'>
                                    {client.id}
                                </th>
                                <td>
                                    {client.name}
                                </td>
                                <td>
                                    {client.lastname}
                                </td>
                                <td>
                                    {client.email}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                :<h1>No hay clientes </h1>}
               
            </>
        )
    }
}

export default table
