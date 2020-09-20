import React from 'react';
import s from './note-list.module.sass';
// import Note from '../note/note';

function NoteItem() {
  return (
    <div className={ s.note_item }>
      <h3 className={ s.note_item__title }>Note Title</h3>
      <p className={ s.note_item__text }>Note Text</p>
      delete
      edit
    </div>
  );
}

function NoteList() {
  return (
    <div className={ s.note_list }>
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </div>
  );
}

export default NoteList;
