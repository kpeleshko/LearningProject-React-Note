const updateNewNoteTitle = 'UPDATE-NEW-NOTE-TITLE';
const updateNewNoteBody = 'UPDATE-NEW-NOTE-BODY';
const updateNewNoteColor = 'UPDATE-NEW-NOTE-COLOR';
const chooseNote = 'CHOOSE-NOTE';
const sendNewNote = 'SEND-NEW-NOTE';
const deleteNote = 'DELETE-NOTE';

let initialState = {
    note: [
        
    ]
}

const notesReduser = (state = initialState, action) => {
    switch(action.type) {
        case updateNewNoteTitle: 
            let copyNotesTitle = state.note.map(item => {
                let copyItem = item;
                item.id === action.itemId ? copyItem.title = action.newText : copyItem.title = copyItem.title
                return copyItem;
            });
            return {
                ...state,
                note: copyNotesTitle,
                newNoteTitle: action.newText,
            }
        case updateNewNoteBody:
            let copyNotesBody = state.note.map(item => {
                let copyItem = item;
                item.id === action.itemId ? copyItem.note = action.newText : copyItem.note = copyItem.note
                return copyItem;
            });
            return {
                ...state,
                note: copyNotesBody,
                newNoteBody: action.newText
            }
        case chooseNote:
            let copyNote = state.note.map(item => {
                let copyItem = item;
                if(item.id === action.itemId) {
                    copyItem.isChoosen = action.isChoosen
                }
                return copyItem;
            });
            return {
                ...state,
                note: copyNote

            };
        case sendNewNote:
            let title = '';
            let body = '';
            return {
                ...state,
                newNoteTitle: '',
                newNoteBody: '',
                note: [...state.note, {id: ++state.note.length, isChoosen: false, title: title, note: body }],
            };
        case deleteNote:
            let copy = state.note.filter(item => !item.isChoosen).map((item, id) => {
                return {
                    ...item,
                    id: ++id
                }
            })
            return {
                ...state,
                note: copy,
            }
        default:
            return state
    }
}


export const onDeleteNoteClick = (itemId) => ({type: deleteNote, itemId: itemId})
export const onSendNoteClick = () => ({type: sendNewNote})
export const onChooseNoteClick = (isChoosen, itemId) => ({type: chooseNote, isChoosen: isChoosen, itemId: itemId})
export const updateNewNoteBodyCreator = (body, itemId) => ({type: updateNewNoteBody, newText: body, itemId: itemId })
export const updateNewNoteTitleCreator = (title, itemId) => ({type: updateNewNoteTitle, newText: title, itemId: itemId })
export const updateNewNoteColorCreator = (colorTheme, itemId) => ({type: updateNewNoteColor, newcolorTheme: colorTheme, itemId: itemId })

export default notesReduser