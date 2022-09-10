import React, { useCallback, useState, useEffect } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Handle,
} from "react-flow-renderer";

import "./SpecificNode.css";

// TODO: awful hack
let setNodesGlobal = null;
let nodesGlobal = null;

const WithCheckboxNode = ({ data, isConnectable, id }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div
        style={{
          height: "50px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "start",
          gap: "1rem",
        }}
      >
        <span>
          Done{" "}
          <input
            type="checkbox"
            checked={data.done}
            onChange={(evt) => {
              const nodeIndex = nodesGlobal.findIndex((n) => n.id === id);
              if (nodeIndex) {
                const isDone = nodesGlobal[nodeIndex]?.data?.done;
                setNodesGlobal([
                  ...nodesGlobal.slice(0, nodeIndex),
                  {
                    ...nodesGlobal[nodeIndex],
                    data: {
                      ...nodesGlobal[nodeIndex].data,
                      // done: !nodesGlobal[nodeIndex].data,
                      done: !isDone,
                    },
                  },
                  ...nodesGlobal.slice(nodeIndex + 1),
                ]);
              }
              // console.log(setNodesGlobal());
              // const nodeIndex = nodes.findIndex(n => n.id === )
              // setNodes([]);
            }}
          />
        </span>
        {data.label}
      </div>
      {/* <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: 10, background: "#555" }}
        isConnectable={isConnectable}
      /> */}
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ bottom: 10, top: "auto", background: "#555" }}
        isConnectable={isConnectable}
      />
    </>
  );
};

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: "QA / Testing Software Engineer",
      content:
        "Only for ones, who already have some coding experience with python and JS",
      done: true,
    },
    position: { x: 250, y: 1 },
    className: "light",
  },
  {
    id: "20",
    type: "checkboxNode",
    data: { label: "Coding: Minimal Quiz", done: false },
    position: { x: 450, y: 110 },
    className: "light",
  },
  {
    id: "2",
    type: "checkboxNode",
    data: { label: "Learn more about code style", done: false },
    position: { x: 450, y: 110 },
    className: "light",
  },
  {
    id: "3",
    data: { label: "Algorithms, 100+ problems on leetcode.com", done: false },
    position: { x: 550, y: 210 },
    className: "light",
  },
  {
    id: "4",
    data: { label: "Code review process in the company", done: false },
    position: { x: 650, y: 310 },
    className: "light",
  },
  {
    id: "41",
    data: { label: "Intership at 123 department", done: false },
    position: { x: 550, y: 410 },
    className: "light",
  },
  {
    id: "42",
    data: { label: "Crash-course in Beb's lab in Montreal", done: false },
    position: { x: 750, y: 510 },
    className: "light",
  },
  {
    id: "5",
    data: { label: "SDE I", done: false },
    position: { x: 400, y: 600 },
    className: "light",
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    label: "So your code doesnt look ugly for our teams",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    label: "Most of QA's dont focus on it, but for us it's crucial",
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    label: "Most newbiews are scared",
  },
  {
    id: "e4-41",
    source: "4",
    target: "41",
    animated: true,
    label: "This is the most obvious path",
  },
  {
    id: "e4-42",
    source: "4",
    target: "42",
    animated: true,
    label: "Much harder, but much faster",
  },
  {
    id: "e41-5",
    source: "41",
    target: "5",
    animated: true,
    label: "So you can start right away",
  },
  {
    id: "e42-5",
    source: "42",
    target: "5",
    animated: false,
    label: "TODO: add a node to explain some internal policies",
  },
];

const nodeTypes = {
  checkboxNode: WithCheckboxNode,
};

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const [currentNodeId, setCurrentNodeId] = useState("");

  const [nodeId, setNodeId] = useState(1);
  const [nodeName, setNodeName] = useState("Node #4354");
  const [nodeBg, setNodeBg] = useState("#eee");
  const [nodeHidden, setNodeHidden] = useState(false);

  useEffect(() => {
    setNodesGlobal = setNodes;
    nodesGlobal = nodes;
  }, [nodes, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === "1") {
          // it's important that you create a new object here
          // in order to notify react flow about the change
          node.style = { ...node.style, backgroundColor: nodeBg };
        }

        return node;
      }),
    );
  }, [nodeBg, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === "1") {
          // when you update a simple type you can just update the value
          node.hidden = nodeHidden;
        }

        return node;
      }),
    );
    setEdges((eds) =>
      eds.map((edge) => {
        if (edge.id === "e1-2") {
          edge.hidden = nodeHidden;
        }

        return edge;
      }),
    );
  }, [nodeHidden, setNodes, setEdges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={(e, n) => {
        setCurrentNodeId(n?.id);
      }}
      nodeTypes={nodeTypes}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="bottom-left"
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === "input") return "#0041d0";
          if (n.type === "output") return "#ff0072";
          if (n.type === "default") return "#1a192b";

          return "#eee";
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return "#fff";
        }}
        nodeBorderRadius={2}
      />
      <Controls />
      <Background color="#ffaacc" gap={2} />

      <div className="updatenode__content">
        <label>Content:</label>
        <br />
        {nodes?.find((n) => n.id === currentNodeId)?.data?.content}
        {/* <input
          value={
            nodes?.find((n) => n.id === currentNodeId)?.data?.label ||
            "Select Node"
          }
          //   onChange={(evt) => setNodes([

          //   ])}
        /> */}
        {/*
        <label className="updatenode__bglabel">background:</label>
        <input value={nodeBg} onChange={(evt) => setNodeBg(evt.target.value)} />

        <div className="updatenode__checkboxwrapper">
          <label>hidden:</label>
          <input
            type="checkbox"
            checked={nodeHidden}
            onChange={(evt) => setNodeHidden(evt.target.checked)}
          />
        </div> */}
      </div>
    </ReactFlow>
  );
};

export default OverviewFlow;
