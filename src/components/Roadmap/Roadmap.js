import React, { useCallback, useState, useEffect, memo } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Handle,
} from "react-flow-renderer";

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import CommentsBlock from 'simple-react-comments';

import "./Roadmap.css";

// TODO: awful hack
let setNodesGlobal = null;
let nodesGlobal = null;

const WithCheckboxNode = memo(({ data, isConnectable, id }) => {
  return (
    <>
      <Handle
        type="target"
        position="top"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle  onConnect", params)}
        isConnectable={isConnectable}
      />
      <div
        style={{
          height: "70px",
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
          <Checkbox
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
});

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: "QA / Testing Software Engineer",
      content:
        ["Read this first", "https://www.coursera.org/articles/software-developer"],
      done: true,
    },
    position: { x: 250, y: 1 },
    className: "light",
  },
  {
    id: "20",
    type: "checkboxNode",
    data: { label: "Coding: Minimal Quiz", done: false, comments: 'This one can be retaken a few times' },
    position: { x: 270, y: 210 },
    className: "light",
  },
  {
    id: "2",
    data: { label: "Learn more about code style", done: false },
    position: { x: 550, y: 20 },
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
    id: "50",
    type: "checkboxNode",
    data: { label: "Coding: Final Coding Quiz", done: false, comments: 'This one can be retaken a few times' },
    position: { x: 200, y: 600 },
    className: "light",
  },
  {
    id: "5",
    data: { label: "SDE I", done: false },
    position: { x: 400, y: 800 },
    className: "light",
  },
];

const initialEdges = [
  {
    id: "e1-20",
    source: "1",
    target: "20",
    animated: true,
    label: "Very first quiz",
  },
  {
    id: "e20-1",
    source: "20",
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
    id: "e41-50",
    source: "41",
    target: "50",
    animated: true,
    label: "So you can start right away",
  },
  {
    id: "e42-50",
    source: "42",
    target: "50",
    animated: false,
    label: "TODO: add a node to explain some internal policies",
  },
  {
    id: "e50-5",
    source: "50",
    target: "5",
    animated: false,
    label: "By someone from dev department, contact in the chat",
  },
];

const nodeTypes = {
  checkboxNode: WithCheckboxNode,
};

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

const Roadmap = () => {
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

      {
        nodes?.find((n) => n.id === currentNodeId)?.data?.comments &&
        <Paper
        style={{
          position: 'absolute',
          left: '0px',
          top: '0px',
          zIndex: 4,
        }}
        variant="outlined"
      >
        <Container maxWidth="sm" style={{ backgroundColor: '#e3f2fd', height: '100vh', width: '15vw', padding: 15, }} >
          <CommentsBlock
            comments={[
              {
                authorUrl: '#',
                avatarUrl: 'https://gravatar.com/avatar/4ecb06692e333043357859e9bcc84d4a?s=400&d=robohash&r=x',
                createdAt: new Date(),
                fullName: 'John Smith',
                text: 'Need to add more information here',
              },
              {
                authorUrl: '#',
                avatarUrl: 'https://robohash.org/4ecb06692e333043357859e9bcc84d4a?set=set4&bgset=&size=400x400',
                createdAt: new Date(),
                fullName: 'Valerii',
                text: 'Yeah, that links that I sent you in slack last week',
              }
            ]}
            isLoggedIn
            reactRouter={false}
            onSubmit={text => {}}
          />
        </Container>
      </Paper>
      }

      {
        nodes?.find((n) => n.id === currentNodeId)?.data?.content?.length > 0 &&
        <Box
          component="span"
          color="text.primary"
          style={{
            position: 'absolute',
            right: '0px',
            top: '0px',
            zIndex: 4,
          }}
        >
          <Container maxWidth="sm" style={{ backgroundColor: '#ffb74d', height: '100vh', width: '10vw', padding: 15 }} >
            Content:
            <Box sx={{ maxWidth: '20px'}} >
              {/* {nodes?.find((n) => n.id === currentNodeId)?.data?.content?.map(i => <div>{i}</div>)} */}
              <Typography variant="h6" gutterBottom>
                h6. Heading
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              </Typography>
              <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography variant="body2" gutterBottom>
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography variant="button" display="block" gutterBottom>
                button text
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                caption text
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                overline text
              </Typography>
            </Box>
          </Container>
        </Box>
      }

    </ReactFlow>
  );
};

export default Roadmap;
