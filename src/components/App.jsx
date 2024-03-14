import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../redux/operations';
import { selectContact } from '../redux/selectors';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import style from './App.module.css';

const App = () => {
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  return (
    <>
      <h1 className={style.h1}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.h2}>Contacts</h2>
      <Filter />
      <ContactList contacts={contacts} />
    </>
  );
};

export default App;
