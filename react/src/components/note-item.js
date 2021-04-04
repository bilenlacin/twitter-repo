import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteNote } from '../action-creators';
import './note-item.css';

class NoteItem extends React.Component {
  render() {
    return <div></div>;
  }
}

export default withRouter(connect(null, { deleteNote: deleteNote })(NoteItem));
