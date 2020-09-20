import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './categories.module.sass';

function CategoriesItem (props) {
return <NavLink to={'/category/' + props.id} className={ s.categories__item }>{props.category}</NavLink>}


function Categories (props) {

  let categoriesElements = props.categoriesData.map(category => <CategoriesItem category={category.category} id={category.id} />);

  let newCategoryElement = React.createRef();

  let addCategory = () => {
    debugger;
    let text = newCategoryElement.current.value;
    props.addCategory(text);
  }

  return (
    <div className={ s.categories }>
      {categoriesElements}
      <div  className={ s.create_categories }>
        <input ref={newCategoryElement} type='text' placeholder='Create new category' />
        <button onClick={addCategory} >+</button>
      </div>
    </div>
  );
}

export default Categories;
