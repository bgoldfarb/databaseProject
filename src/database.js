//Using sorting function O(nlgn) Time O(1) Space
//sorts entries first by their parent IDs, making sure they come first, and then their id values in ascending order

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


export default sort_categories 