//createCategoryList

const liniareCategories = (categories, options=[]) =>{

    for (let category of categories) {
        options.push({

            /*_id*/ value: category._id, 
            name: category.name,
            parentId: category.parentId,
            type: category.type,
            
        })
        if (category.children.length >0){

            liniareCategories(category.children, options)
        }
    }
    return options; 
}


export default liniareCategories