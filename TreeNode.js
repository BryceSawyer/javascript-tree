// TREE DATA STRUCTURE: JAVASCRIPT

// Introduction
// Trees are wonderful data structures that can model real life hierarchical information,
// including: 
// organizational charts,
// genealogical trees,
// computer file systems,
// HTML elements on a web page (also known as the Document Object Model, or DOM),
// state diagrams,
// and more.

// A tree is composed of tree nodes. A tree node is a very simple data structure that contains:

// Data
// A list of children, where each child is itself a tree node
// We can add data to and remove data from a tree and traverse it in two different ways:

// Depth-first, or
// Breadth-first.

// TreeNode class that contains data and maintains a collection of TreeNode classes called children.
class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    // addChild method:
    // adds a child to the tree as either data or TreeNode
    addChild(child) {
        // If child is an instance of TreeNode. If it is, add child to the end of the children array.
        if (child instanceof TreeNode) {
            this.children.push(child);
            // Else, create a TreeNode instance for it before adding it to the children array.
        } else {
            this.children.push(new TreeNode(child));
        }
    }
    // removeChild method:
    // removes a child from the tree as either data or TreeNode
    removeChild(childToRemove) {
        const length = this.children.length;
        // Compare target child with each child in the children array
        this.children = this.children.filter(child => {
            // If target child is an instance of TreeNode,
            return childToRemove instanceof TreeNode
                // Update the children array if target child is found
                ? child !== childToRemove
                // Else 
                //   Compare target child with each child's data in the children array
                //   Update the children array if target child is found
                : child.data !== childToRemove;
        });
        // If target child is not found in the children array
        if (length === this.children.length) {
            // Recursively call .removeChild() for each grandchild.
            this.children.forEach(child => child.removeChild(childToRemove));
        }
    }
    // Pretty Print/Print method:
    // Print takes one parameter, level, which is initialized to 0, 
    // to enable printing the entire tree structure from the top to the bottom.
    print(level = 0) {
        let result = '';
        for (let i = 0; i < level; i++) {
            result += '-- ';
        }
        console.log(`${result}${this.data}`);
        this.children.forEach(child => child.print(level + 1));
    }
    // Depth-first Tree Traversal:
    // A recursive method that fully traverses the tree with a top-down approach for each child of the tree
    depthFirstTraversal() {
        // For each node
        //   Display its data
        console.log(this.data);
        // For each child in children, call itself recursively
        this.children.forEach(child => child.depthFirstTraversal(child));
    }
    // Breadth-first Tree Traversal:
    // A iterative method that fully traverses the tree a level at a time, instead of a child at a time
    breadthFirstTraversal() {
        // Assign an array to contain the current root node
        let queue = [this];
        // While the array is not empty
        while (queue.length) {
            // Extract the first tree node from the array
            const current = queue.shift();
            // Display tree node's data
            console.log(current.data);
            // Append tree node's children to the array
            queue = queue.concat(current.children);
        }
    }
};



module.exports = TreeNode;