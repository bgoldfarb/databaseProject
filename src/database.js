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

const parentsFirst = (first, second) => {
  return first.parent_id === second.id ? 1 : -1
}

const sortById = (first, second) => {
    return first.id < second.id && first.parent_id !== null ? 1 : -1
}


 
const sort_categories = (categories) => {
   let parentsFirstObject =  categories.sort(parentsFirst)
   return parentsFirstObject.sort(sortById) 
 }

/*
 const categories = [
    {

    name: "Accessories",   

    id: 1,

    parent_id: 20

}, {

    name: "Men",

    id: 20,

    parent_id: null

},
{

    name: "Belts",   

    id: 3,

    parent_id: 15

},
{

    name: "Women",   

    id: 15,

    parent_id: null

},
{
    name: "Toddlers",
    id:7,
    parent_id:null
},
{
    name: "Shirts",
    id: 19,
    parent_id: 7
}
];
 */
const categories = [
    {

    name: "Accessories",   

    id: 1,

    parent_id: 20

}, {

    name: "Men",

    id: 20,

    parent_id: null

},
{

    name: "Belts",   

    id: 3,

    parent_id: 15

},
{

    name: "Women",   

    id: 15,

    parent_id: null

}
];
 console.log(sort_categories(categories))
 export default sort_categories 