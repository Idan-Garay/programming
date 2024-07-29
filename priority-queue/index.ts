// heap data structure -> a complete binary tree that satisfies heap property
//  where any given node is greater than it's child nodes and the root node is largest/smallest among all other nodes
// heapify -> a process of creating a heap data structure from a binary tree

function heapify(arr: number[], x: number) {
  // have have largest as x in parameter
  var child = x;
  var leftChild = x * 2 + 1;
  var rightChild = x * 2 + 2;

  if (arr[leftChild] > arr[x]) {
    x = leftChild;
  } else if (arr[rightChild] > arr[x]) {
    x = rightChild;
  }
  const temp = arr[child];
  arr[child] = arr[x];
  arr[x] = temp;
}

var arr = [3, 9, 2, 1, 4, 5];
heapify(arr, arr.length / 2 - 1);
