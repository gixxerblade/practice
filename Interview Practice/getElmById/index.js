
function getElementById(elem, id) {
    let foundNode  
    function helper(node) {
    // iterate through children
      for(let child of node) {
          // if child.id matches id assign node to foundNode
          if(child.id === id) {
            // found it here
            foundNode = child
            foundNode.style.color = "red"
            foundNode.style.fontSize = "30px"
          }
      // do children have children
      // if child has children recurse    
        helper(child.children)
      }
    }
      
    helper(elem.children)
    // return node
    return foundNode
  }