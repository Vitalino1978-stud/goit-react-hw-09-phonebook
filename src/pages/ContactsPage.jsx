// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import oper from '../redux/phonebook/contacts-operations';
// import { getLoading } from '../redux/phonebook/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';
// import shortid from 'shortid';

const ContactsPage = () => {
	//  const contactsIsLoading = useSelector(getLoading);

  const dispatch = useDispatch();
  useEffect(() => dispatch(oper.fetchContacts()), [dispatch]);

 
        return (
      <>
				<ContactForm />
					
        <ContactList/>

        <Filter />
      </>
    );
  }


// const mapStateToProps = state => ({
//    isLoadingContacts: getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(oper.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default ContactsPage;
