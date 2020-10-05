import React, {useState} from 'react';
import s from './note.module.sass';

function NoteItem(props) {
  const [id, setId] = useState(props.id);

  let onChooseNoteClick = () => {
    props.onChooseNoteClick(!props.isChoosen, id);
  }

  let onNoteTitleChange = (e) => {
    let title = e.target.value;
    props.updateNewNoteTitleCreator(title, id);
  }

  let onNoteBodyChange = (e) => {
    let body = e.target.value;
    props.updateNewNoteBodyCreator(body, id);
  }


  return (
    <div className={ s.note_item } data-key={id}>

      <textarea type="text" value={props.title} onChange={onNoteTitleChange} className={ s.note_item__title }>{props.title}</textarea>
      <textarea value={props.body} onChange={onNoteBodyChange} className={ s.note_item__text }>{props.body}</textarea>
      <label className={ s.note_item__checkbox }>
        <input type='checkbox' checked={props.isChoosen} onChange={onChooseNoteClick} />
        <span></span>
      </label>
    </div>
    
  );
}

export default NoteItem;

