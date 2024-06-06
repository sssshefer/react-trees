# <img src="https://github.com/sssshefer/react-trees/assets/63253440/d83ae1e6-26ce-49e4-90c5-5a1af663b453" width="24"> Family Tree Visualization

This project is a React application that visualizes a family tree using the `react-d3-tree` library. Users can dynamically add new family members to the tree through a modal interface. The tree is rendered with D3 and allows interactive exploration of family relationships.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How to Use Queue Data Structure in JavaScript](#how-to-use-queue-data-structure-in-javascript)
  - [Understanding the Methods](#understanding-the-methods)
- [Breadth-First Search (BFS) in JavaScript](#breadth-first-search-bfs-in-javascript)

## Features

- **Interactive Family Tree**: Visualize family relationships with an interactive tree structure.
- **Add Family Members**: Easily add new family members to the tree using a modal form.
- **Breadth-First Search**: Efficiently update the tree structure using the BFS algorithm to find the correct insertion point.

## Technologies Used

- **React**: For building the user interface.
- **react-d3-tree**: For rendering the tree structure.
- **Chakra UI**: For styling and modal components.
- **TypeScript**: For type checking and improved development experience.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/sssshefer/react-trees.git
    ```
2. Install dependencies:
    ```sh
    cd react-trees
    npm install
    ```
3. Start the development server:
    ```sh
    npm start
    ```
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

> [!CAUTION]
> Having the same name in a tree doesn't work well

## How to Use Queue Data Structure in JavaScript

A queue is a fundamental data structure in computer science that follows the First-In-First-Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed. Queues are used in various applications such as task scheduling, handling requests, and managing resources. In JavaScript, while there's no built-in queue data structure, we can easily implement one using arrays.

### Understanding the Methods

- **`push(element)`**: Adds an element to the end of the array. In our queue, this is used in the `enqueue` operation to add elements to the end.
- **`shift()`**: Removes the first element from the array and returns it. This is used in the `dequeue` operation to remove elements from the front of the queue.
- **`unshift(element)`**: Adds an element to the beginning of the array. Although not used in this queue implementation, it is worth mentioning as it can be useful in other scenarios where you need to add elements to the front.
- **`pop()`**: Removes the last element from the array and returns it. This is also not used in this queue implementation but is commonly used in stack data structures.

## Breadth-First Search (BFS)

Breadth-First Search (BFS) is a fundamental algorithm for traversing or searching tree or graph data structures. Starting at the root (or an arbitrary node in the case of a graph), BFS explores the neighbor nodes at the present depth prior to moving on to nodes at the next depth level. This algorithm is particularly useful for finding the shortest path in an unweighted graph.
