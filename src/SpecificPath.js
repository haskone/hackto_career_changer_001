import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "react-flow-renderer";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "QA / Testing Software Engineer" },
    position: { x: 250, y: 1 },
    className: "light",
  },
  {
    id: "2",
    data: { label: "Learn more about code style" },
    position: { x: 450, y: 110 },
    className: "light",
  },
  {
    id: "3",
    data: { label: "Algorithms, 100+ problems on leetcode.com" },
    position: { x: 550, y: 210 },
    className: "light",
  },
  {
    id: "4",
    data: { label: "Code review process in the company" },
    position: { x: 650, y: 310 },
    className: "light",
  },
  {
    id: "41",
    data: { label: "Intership at 123 department" },
    position: { x: 550, y: 410 },
    className: "light",
  },
  {
    id: "42",
    data: { label: "Crash-course in Beb's lab in Montreal" },
    position: { x: 750, y: 510 },
    className: "light",
  },
  {
    id: "5",
    data: { label: "SDE I" },
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

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
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
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};

export default OverviewFlow;
