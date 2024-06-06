import {RawNodeDatum} from "react-d3-tree";

//Breath-first Search
export function bfs(selectedNodeName: string | undefined, tree: RawNodeDatum | RawNodeDatum[], newNodeName: string) {
    const queue: RawNodeDatum[] = []

    queue.unshift(tree as RawNodeDatum)

    while (queue.length > 0) {
        let curNode = queue.pop();
        if (curNode?.name === selectedNodeName) {
            curNode = addNode(curNode, newNodeName)
            return {...tree, curNode}
        }

        const len = curNode?.children?.length || 0;
        for (let i = 0; i < len; i++) {
            queue.unshift(curNode?.children?.[i] as RawNodeDatum)
        }
    }
}

function addNode(node: RawNodeDatum | undefined, newNodeName: string) {
    node?.children?.push(
        {
            name: newNodeName,
            children: []
        });
    return node;
}