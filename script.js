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
tree.print();
console.log();

tree.children[0].addChild('file');
tree.children[0].children[0].addChild('txt');
tree.print();
console.log();

tree.children[1].addChild('file');
tree.children[1].children[0].addChild('txt')
tree.print();
console.log();

tree.removeChild('folder3');
tree.print();
console.log();

tree.children[2].addChild('file1');
tree.children[2].children[0].addChild('a')
tree.children[2].children[0].addChild('b')
tree.children[2].children[0].addChild('c')
tree.children[2].addChild('file2');
tree.children[2].children[1].addChild(1)
tree.children[2].children[1].children[0].addChild(2)
tree.children[2].children[1].children[0].children[0].addChild(3)
tree.children[2].addChild('file3');
tree.removeChild('file3');
tree.print();
// tree.depthFirstTraversal();
// tree.breadthFirstTraversal();