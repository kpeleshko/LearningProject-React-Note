import React from 'react';
import Categories from './categories/categories';
import NoteList from './note-list/note-list';
import s from './body.module.sass';
// import Note from './note/note';

function Body(props) {
  return (
    <main className={ s.app_wrapper }>
      <Categories categoriesData={props.categoriesData} addCategory={props.addCategory}/>
      <NoteList />
      {/* <Note/> */}
    </main>
  );
}

export default Body;
