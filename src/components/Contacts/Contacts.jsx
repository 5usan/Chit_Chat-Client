import React, { useEffect } from "react";
import { useSelector } from "react-redux/";
import useLocalStorage from "../../hooks/useLocalStorage";

const Contacts = () => {
  const { allContacts } = useSelector((state) => state.contact);
  const [contacts, setContacts] = useLocalStorage("contacts");

  useEffect(() => {
    setContacts(allContacts);
  }, [allContacts, setContacts]);

  console.log(contacts, "cont");
  return <div>Contacts</div>;
};

export default Contacts;
