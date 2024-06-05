import React, {useState} from 'react';
import './App.css';
import Tree, {RawNodeDatum, TreeNodeDatum, TreeNodeEventCallback} from 'react-d3-tree';
import {Box} from "@chakra-ui/react";
import AddFamilyMemberModal from "../components/AddFamilyMemberModal";
import {bfs} from "../shared/utils/bfs";

function App() {
    const [treeData, setTreeData] = useState<RawNodeDatum|RawNodeDatum[]>({
        name: 'Root',
        children: []
    })

    const [node, setNode] = useState<undefined | TreeNodeDatum>(undefined);

    const close = () => {
        setNode(undefined);
    }

    const handleSubmit = (name: string) => {
        const newTree = bfs(node?.name, treeData, name)

        if(newTree){
            setTreeData(newTree)
        }
    }
    return (
        <Box h="100vh" w="100vw">
            <Tree
                data={treeData}
                onNodeClick={(node) => setNode(node.data)}
                translate={{x: 200, y: 200}}
            />
            <AddFamilyMemberModal
                isOpen={Boolean(node)}
                onClose={() => close()}
                onSubmit={handleSubmit}
            />
        </Box>
    );
}


export default App;
