// #Our job is to write a function that can take a list of categories 
// # provided by the product database and sort them in the optimal 
// # insertion order for the storefront so that no category insertion 
// # will result in an integrity error.  The taxonomy for categories can be arbitrarily deep.

// #Your function should take a list of dictionaries representing the categories 
// # from the product database and provide as output a list of dictionaries 
// # sorted in the proper insertion order.  There may be more than one optimal 
// # ordering of the categories, but you only have to provide an optimal ordering. 


//Using sorting function O(nlgn) Time O(1) Space
//sorts entries first by their parent IDs, making sure they come first, and then their id values 

const compare = (first, second) => {
    return first.parent_id === second.id ? 1 : -1
 }
 
const sort_categories = (categories) => {
   return categories.sort(compare)
 }
 
 
 export default sort_categories