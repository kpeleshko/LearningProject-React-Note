import {onSendNoteClick, onDeleteNoteClick, onChooseNoteClick, updateNewNoteBodyCreator, updateNewNoteTitleCreator, updateNewNoteColorCreator} from '../../../redux/notes-reduser';
import NoteList from './note-list';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  
  return {
    notes: state.notes.note,
    newNoteBody: state.notes.newNoteBody,
    newNoteTitle: state.notes.newNoteTitle
  }
}

const NoteListContainer = connect(mapStateToProps, {onSendNoteClick, onDeleteNoteClick, onChooseNoteClick, updateNewNoteTitleCreator, updateNewNoteBodyCreator, updateNewNoteColorCreator})(NoteList);

export default NoteListContainer;
