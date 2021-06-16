import { useState} from 'react';
import React, { Component } from 'react';
import operations from '../../redux/phonebook/contacts-operations.js';
import { connect } from 'react-redux';
import store from '../../redux/store'
// import shortid from 'shortid';
import css from './ContactForm.module.css'


const ContactForm = ({ getData }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const contacts = store.store.getState().contacts.items;

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    getData({ name: `${name}`, number: `${number}` });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChangeName = event => {
    setName(event.target.value);
  };
  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };


// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: ''
//   }
//   nameInputId = shortid.generate();
//   numberInputId = shortid.generate();

//   handleChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//     handleSubmit = event => {
//     event.preventDefault();

//     const { name } = this.state;
//     const contacts = store.store.getState().contacts.items;
//     if (contacts.some(contact => contact.name === name)) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     this.props.onAdd(this.state);
//     this.reset();
//   };

  // handleSubmit = event => {
	// 	event.preventDefault();
		
		
  //   this.props.onAdd(this.state);
  //   this.reset();
	// };
	
	// reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  // render() {
    return (
      <form onSubmit={handleSubmit} className={css.ContactForm}>
      <label className={css.label} >
        Name:
        <input
            id="outlined-basic"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
              onChange={handleChangeName}
            // className={css.input_name}
            placeholder="Input name"
        />
      </label>
      <label label className={css.label} >
        Phone number:
           <input
         id="outlined-basic"
          type="number"
          name="number"
          value={number}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
            onChange={handleChangeNumber}
          className={css.input_name}
          placeholder="Input number"
        />
            
      </label>

        <button type='submit' className={css.add_btn}>Add contact</button>
        
      </form>
    )
  }


const mapDispatchToProps = dispatch => ({getData: value => dispatch(operations.addContact(value))})
export default connect(null, mapDispatchToProps)(ContactForm);
