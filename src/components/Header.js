import React, { useState, useEffect, useContext } from "react";
import Menu from './Menu';
import { DataContext } from '../context/DataContext';

const Header = props => {
  const formId = 0;
  const [form, setForm] = useState();

  const { getForm } = useContext(DataContext);

  const formGetter = async (formId) => {
    const f = await getForm(formId);
    setForm(f);
  }

  useEffect(() => {
    formGetter();
  }, [formId]);

  return (
    <header>
      <Menu
      />
      {form && form.title}

    </header>
  );
}

export default Header;
