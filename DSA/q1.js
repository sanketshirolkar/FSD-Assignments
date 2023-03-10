class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

function reverse(node) {
let prev = null;
let current = node;
let next = null;
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    node = prev;
    return node;
}

function printList(node) {
    while (node != null) {
        document.write(node.data + " ");
        node = node.next;
    }
}

// Driver Code
    let head;
    head = new Node(85);
    head.next = new Node(15);
    head.next.next = new Node(4);
    head.next.next.next = new Node(20);

   
    head = reverse(head);
    console.log("Reversed linked list");
    printList(head);