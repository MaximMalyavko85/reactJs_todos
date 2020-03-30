import React, { useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";
import { FirebaseContext } from "../context/firebase/firebaseContaxt";
import { Loader } from "../components/Loader";
import { AlertContext } from "../context/alert/alertContext";

export const Home = () => {
  const { loading, notes, fetchNotes, removeNote } = useContext(
    FirebaseContext
  );

  const alert = useContext(AlertContext);

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  const remove = id => {
    removeNote(id)
      .then(() => alert.show("Заметка удалена", "success"))
      .catch(() => alert.show("Что-то пошло не так", "danger"));
  };

  return (
    <React.Fragment>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} onRemove={remove} />}
    </React.Fragment>
  );
};
