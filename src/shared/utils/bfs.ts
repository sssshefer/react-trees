import {RawNodeDatum} from "react-d3-tree";

//Breath-first Search
export function bfs(name: string|undefined, tree: RawNodeDatum | RawNodeDatum[], newNodeName: string) {
    const queue: RawNodeDatum[] = []

    queue.unshift(tree as RawNodeDatum)

    while (queue.length > 0) {
        const curNode = queue.pop();

        if (curNode?.name === name) {
            curNode?.children?.push(
                {
                    name:newNodeName,
                    children: []
                });
            return {...tree}
        }

        const len = curNode?.children?.length || 0;
        for (let i = 0; i < len; i++) {
            queue.unshift(curNode?.children?.[i] as RawNodeDatum)
        }
    }
}