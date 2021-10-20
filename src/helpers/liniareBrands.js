//createCategoryList

const liniareBrands = (brands, options=[]) =>{

    for (let brand of brands) {
        options.push({

            /*_id*/ value: brand._id, 
            name: brand.name,
          
            
        })
        /*if (category.children.length >0){

            liniareCategories(category.children, options)
        }
        */
    }
    return options; 
}


export default liniareBrands