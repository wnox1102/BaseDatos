import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/navbar'
import Form from './components/form'
import Table from './components/table'

function App() {
  /**Simulacion de base de datos de clientes  */
  const clients = [
    
    {id:'1', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'2', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'3', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'4', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'5', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'6', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'7', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'8', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'9', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'10', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'11', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
  ]
  /** 
   * En el componente Navbar se le esta enviando por props el titulo que mostrara 
   * En el componente Table se le esta enviando por  props los clientes 
   */
  return (
      <>
        
        <Navbar title='Base de datos'/>
        <br/>
        <Form/>
        <br/>
        <hr/>
        <Table clients={clients}/>
      </>
  );
}

export default App;
