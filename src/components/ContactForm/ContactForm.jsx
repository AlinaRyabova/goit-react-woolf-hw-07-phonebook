import React from 'react';

import { nanoid } from 'nanoid';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContact } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactNameId = nanoid();
  const contactNumberId = nanoid();

  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isAdded = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isAdded) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label} htmlFor={contactNameId}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={contactNameId}
        />
      </label>
      <label className={style.label} htmlFor={contactNumberId}>
        Number
        <input
          className={style.input}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          id={contactNumberId}
        />
      </label>

      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
