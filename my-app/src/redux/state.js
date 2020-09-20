let state = {
    categoriesData : [
        {id: 1, category: 'Selfcare'},
        {id: 2, category: 'Home'},
        {id: 3, category: 'Personal'},
        {id: 4, category: 'Work'}
    ]
}

export let addCategory = (categoryName) => {
    debugger;
    let newCategory = {
        id: 5,
        category: categoryName
    };

    state.categoriesData.push(newCategory);
}

export default state