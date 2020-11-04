import React, {useState} from 'react';
import s from './note.module.sass';

const NoteItem = (props) => {
  let [id, setId] = useState(props.id);
  let [body, setBody] = useState(props.body);
  let [title, setTitle] = useState(props.title);
  let [colorTheme, setcolorTheme] = useState(props.colorTheme);
  let [editModeBody, setEditModeBody] = useState(false);
  let [editModeTitle, setEditModeTitle] = useState(false);


  const changeTheme = (colorTheme) => {
    setcolorTheme(colorTheme);
    props.updateNewNoteColorCreator(colorTheme, id);
    alert(colorTheme);
  }

  const activateEditModeText = () => { setEditModeBody(true) }
  const activateEditModeTitle = () => { setEditModeTitle(true) }

  const deactivateEditModeText = () => {
    setEditModeBody(false);
    props.updateNewNoteBodyCreator(body, id);
  }
  const deactivateEditModeTitle = () => {
    setEditModeTitle(false);
    props.updateNewNoteTitleCreator(title, id);
  }

  const onNoteBodyChange = (e) => { setBody(e.currentTarget.value) }
  const onNoteTitleChange = (e) => { setTitle(e.currentTarget.value) }

  const onChooseNoteClick = () => {
    props.onChooseNoteClick(!props.isChoosen, id);
  }

  return (
    <form className={ `${s.note_item} ${colorTheme}`} draggable={true}>
        <div>
          {!editModeTitle
            ? <span onDoubleClick={activateEditModeTitle} className={ s.note_item__title }>{props.title || 'Title :)'}</span>
            : <input onBlur={deactivateEditModeTitle} onChange={onNoteTitleChange} value={title} autoFocus={true} className={ s.note_item__title_input }/>
          }
        </div>

        <div>
          {!editModeBody
            ? <span onDoubleClick={activateEditModeText} className={ s.note_item__text }>{props.body || 'Enter a note text...'}</span>
            : <input onBlur={deactivateEditModeText} onChange={onNoteBodyChange} value={body} autoFocus={true} className={ s.note_item__text_input }/>
          }
        </div>

        <div className={ `${ s.theme }` }>
          <span className={ s.theme__grey } onClick={() => changeTheme('theme__grey')}></span>
          <span className={ s.theme__pink } onClick={() => changeTheme('theme__pink')}></span>
          <span className={ s.theme__blue } onClick={() => changeTheme('theme__blue')}></span>
          <span className={ s.theme__green } onClick={() => changeTheme('theme__green')}></span>
          <span className={ s.theme__yellow } onClick={() => changeTheme('theme__yellow')}></span>
        </div>

        <label className={ s.note_item__checkbox }>
          <input type='checkbox' checked={props.isChoosen} onChange={onChooseNoteClick} />
          <span></span>
       </label>
    </form>
  );
}

export default NoteItem;