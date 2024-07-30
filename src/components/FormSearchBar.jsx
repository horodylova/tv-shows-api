 import { useState } from "react"

function FormSearchBar({state, setState}) {
    

    function handleSubmit (event) {
        event.preventDefault()
        console.log("Form data submitted:", state);
        setState({
            name: "",
            country: ""
        })

    }

    function handleChange(event) {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value
        });
      }
  
    return (
   <form onSubmit={handleSubmit}>
    <label>Enter a name of person: 
        <input 
        type="text"  
        name="name" 
        value={state.name} 
        onChange={handleChange}/>
        </label>
   
    <label>Enter a country: 
        <input 
        type="text"
        name="country" 
        value={state.country} 
        onChange={handleChange}/>
        </label>
    <button type="submit">Search</button>
   </form>
  )
}

export default FormSearchBar