import React from 'react';

function FormSearchBar({ nameAndCountry, setnameAndCountry }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form data submitted:", nameAndCountry);
    setnameAndCountry({
      name: "",
      country: ""
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setnameAndCountry(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Enter a name of person:
        <input
          type="text"
          name="name"
          value={nameAndCountry.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter a country:
        <input
          type="text"
          name="country"
          value={nameAndCountry.country}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit"/>
    </form>
    </div>
  );
}

export default FormSearchBar;
