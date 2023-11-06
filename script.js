const TreeNode = require('./TreeNode');

// // Randomized Sample Tree;
const randomTree = new TreeNode('RandomTree');

const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 3; i++) {
    randomTree.addChild(randomize());
};

// add second-level children
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        randomTree.children[i].addChild(randomize());
    }
}

// add third-level children
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
            randomTree.children[i].children[j].addChild(randomize());
        }
    }
 };

// randomTree.print();
// randomTree.breadthFirstTraversal();
// randomTree.depthFirstTraversal(); 


const tree = new TreeNode('Root');

tree.addChild('folder0');
tree.addChild('folder1');
tree.addChild('folder2');
tree.addChild('folder3');

tree.children[0].addChild('file');
tree.children[0].children[0].addChild('txt');

tree.children[1].addChild('file');
tree.children[1].children[0].addChild('txt')

tree.removeChild('folder3');

tree.children[2].addChild('file');
tree.children[2].children[0].addChild(1)
tree.children[2].children[0].addChild(2)
tree.children[2].children[0].addChild(3)
tree.children[2].addChild('file');
tree.children[2].children[1].addChild(1)
tree.children[2].children[1].children[0].addChild(2)
tree.children[2].children[1].children[0].children[0].addChild(3)
tree.children[2].addChild('file');

tree.print();
//tree.depthFirstTraversal();
//tree.breadthFirstTraversal();









