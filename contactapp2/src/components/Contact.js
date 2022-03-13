// https://firebase.google.com/docs/database/web/read-and-write?authuser=1#read_data_once

import React, { useContext } from "react";
import { Row, Col } from "reactstrap";

// ico

//TODO: add firebase
import firebase from "firebase/app";

// context stuffs
//TODO: import context and action: update and single_contact
import { ContactContext } from "../context/Context";
import { SET_SINGLE_CONTACT} from "../context/action.types";
import { useHistory } from "react-router-dom";

const Contact = ({ contact, contactKey }) => {
  //TODO: destructuring dispatch from the context
  const { dispatch } = useContext(ContactContext);
  // history hooks to get history
  const history = useHistory();
  // to view a single contact in the contact/view screen
  const viewSingleContact = (contact) => {
    // setting single contact in state
    //TODO: use dispatch to view single contact

    dispatch({
      type: SET_SINGLE_CONTACT,
      payload: contact,
    });

    // sending...
    history.push("/contact/view");
  };

  return (
    <>
      <Row>
        <Col
          md="1"
          className="d-flex justify-content-center align-items-center"
        >
        </Col>
        <Col
          md="2"
          className="d-flex justify-content-center align-items-center"
        >
        </Col>
        <Col md="8" onClick={() => viewSingleContact(contact)}>
          <div className="text-primary">{contact.name}</div>

          <div className="text-secondary">{contact.phoneNumber}</div>
          <div className="text-secondary">{contact.email}</div>

        </Col>
        <Col
          md="1"
          className="d-flex justify-content-center align-items-center"
        >
        </Col>
      </Row>
    </>
  );
};

export default Contact;
