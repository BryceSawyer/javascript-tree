const TreeNode = require('./TreeNode'); // Adjust the import path based on your project structure

describe('TreeNode', () => {
    let rootNode;

    beforeEach(() => {
        rootNode = new TreeNode('Root');
        jest.clearAllMocks();
    });

    test('should add a child with data', () => {
        rootNode.addChild('Child');
        expect(rootNode.children.length).toBe(1);
        expect(rootNode.children[0].data).toBe('Child');
    });

    test('should add a child as a TreeNode', () => {
        const childNode = new TreeNode('Child');
        rootNode.addChild(childNode);
        expect(rootNode.children.length).toBe(1);
        expect(rootNode.children[0]).toBe(childNode);
    });

    test('should remove a child by data', () => {
        rootNode.addChild('Child1');
        rootNode.addChild('Child2');
        rootNode.removeChild('Child1');
        expect(rootNode.children.length).toBe(1);
        expect(rootNode.children[0].data).toBe('Child2');
    });

    test('should remove a child by TreeNode', () => {
        const childNode1 = new TreeNode('Child1');
        const childNode2 = new TreeNode('Child2');
        rootNode.addChild(childNode1);
        rootNode.addChild(childNode2);
        rootNode.removeChild(childNode1);
        expect(rootNode.children.length).toBe(1);
        expect(rootNode.children[0]).toBe(childNode2);
    });

    test('should print the tree structure', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        rootNode.addChild('Child1');
        rootNode.children[0].addChild('Child2');
        rootNode.print();
        expect(consoleSpy).toHaveBeenCalledTimes(3); // Each node is printed

    });

    test('should perform depth-first traversal', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        rootNode.addChild('Child1');
        rootNode.children[0].addChild('Child2');
        rootNode.depthFirstTraversal();
        expect(consoleSpy).toHaveBeenCalledTimes(3); // Each node is traversed
    });

    test('should perform breadth-first traversal', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        rootNode.addChild('Child1');
        rootNode.addChild('Child2');
        rootNode.breadthFirstTraversal();
        expect(consoleSpy).toHaveBeenCalledTimes(3); // Each node is traversed
    });
});