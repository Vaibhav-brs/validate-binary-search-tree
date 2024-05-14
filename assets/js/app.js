class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBST() {
    const input = document.getElementById("tree").value.trim();
    const values = input.split(",").map(val => parseInt(val.trim()));
  
    const root = buildTree(values);
    const isValid = isValidBST(root);
  
    const outputDiv = document.getElementById("output");
    if (isValid) {
      outputDiv.innerHTML = "<strong>Valid Binary Search Tree:</strong> The given tree is a valid BST.";
    } else {
      outputDiv.innerHTML = "<strong>Invalid Binary Search Tree:</strong> The given tree is not a valid BST.";
    }
  }
  
  function buildTree(values) {
    if (!values.length) return null;
  
    const root = new TreeNode(values[0]);
    const queue = [root];
  
    let i = 1;
    while (queue.length && i < values.length) {
      const current = queue.shift();
  
      if (values[i] !== null) {
        current.left = new TreeNode(values[i]);
        queue.push(current.left);
      }
      i++;
  
      if (i < values.length && values[i] !== null) {
        current.right = new TreeNode(values[i]);
        queue.push(current.right);
      }
      i++;
    }
  
    return root;
  }
  
  function isValidBST(root) {
    return validate(root, -Infinity, Infinity);
  }
  
  function validate(node, min, max) {
    if (!node) return true;
  
    if (node.val <= min || node.val >= max) return false;
  
    return validate(node.left, min, node.val) && validate(node.right, node.val, max);
  }
  