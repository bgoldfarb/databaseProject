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
 
 const sort_categories2 = (categories) => {
     let result = []
     let parentIdMap = {}
     //Creates the parentId Map
     categories.reduce((acc, curr) => {
         let parent_id = curr.parent_id
         let id = curr.id
         parentIdMap[id] = parent_id
     })
 }
 
 var categories = [{
 
     name: "Accessories",   
 
     id: 6,
 
     parent_id: 2
 
 }, {
 
     name: "Men",
 
     id: 2,
 
     parent_id: null
 
 },{
 
     name: "Women",
 
     id: 10,
 
     parent_id: null
 
 },
 {
 
     name: "Belts",
 
     id: 5,
 
     parent_id: 10
 
 },
 {
 
     name: "Kids",
 
     id: 33,
 
     parent_id: null
 
 },
 {
 
     name: "Shirts",
 
     id: 9,
 
     parent_id: 33
 
 },
 {
 
     name: "Petites",
 
     id: 19,
 
     parent_id: null
 
 },
 {
 
     name: "Sweaters",
 
     id: 54,
 
     parent_id: 19
 
 }];
 
 console.log(sort_categories(categories))