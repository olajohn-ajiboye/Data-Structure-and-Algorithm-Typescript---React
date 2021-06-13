
// Definition for a binary tree node.
class TreeNode {

    constructor(public val: number = 0,
        public left: TreeNode | null = null,
        public right: TreeNode | null = null) {
    }

}

var findDuplicateSubtrees = function (root: TreeNode) {
    const lookUpMap = new Map()
    const result: TreeNode[] = []

    /* have a pre-order traversal
     - don't make this check for the rootNode
     - put the currentNode value and it's children in map as map.set(value, [left,right])
     - for every subsequent node, look up the map and check if value exists and [left,right ] ===
     - if above condition return the node we are checking without adding it. 
     - We might even remove the node that was compared
    */

    const preOrderTraverse = (node: TreeNode) => {
        if (!node) return
        // check if node already exists
        if (lookUpMap.has(node.val)) {
            // check for dupliciity
            const [left, right] = lookUpMap.get(node.val)
            if (left === node?.left && right === node?.right) {
                result.push(node)
                lookUpMap.delete(node.val)
            }
        } else {
            lookUpMap.set(node.val, [node?.left?.val, node?.right?.val])
        }

        preOrderTraverse(node.left!)
        preOrderTraverse(node.right!)
    }
    preOrderTraverse(root)
    console.log(lookUpMap)
    console.log(result)
    return result
};