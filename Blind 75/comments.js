/**
 * Merge Two Sorted Lists Commented Code, attempted 6/26/2022
 */ 

// initialize a dummy head node
// initialize a crtNode variable to keep track of the current node, starting with the dummy head node

// while there are still nodes to compare in two lists
    // if value of 2nd node is less than value of 1st node
        // set the current node's link to l2 node
        // set the l2 node to l2's next node
   // else
        // set the current node's link to l1 node
        // set the l1 node to l1's next node

    // move on to the next node

// if one of the lists no longer have any nodes to compare, point crt's link to the remaining nodes in the other list
// if both lists are empty, point crt's link to null

// return merged linked list
