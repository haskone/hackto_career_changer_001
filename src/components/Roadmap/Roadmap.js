import React, { useCallback, useState, useEffect, memo, useMemo, useRef } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Handle,
} from "react-flow-renderer";

import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import CommentsBlock from 'simple-react-comments';

import {
  initialEdges1,
  initialNodes1,
  initialNodes2,
  initialEdges2,
} from './staticData';

import "./Roadmap.css";

const WithCheckboxNode = memo(({ data, isConnectable, id, setNodes, nodesRef }) => {
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
            onClick={(e) => e.stopPropagation()}
            onChange={(evt) => {
              const nodeIndex = nodesRef.current.findIndex((n) => n.id === id);

              if (nodeIndex) {
                const isDone = nodesRef.current[nodeIndex]?.data?.done;
                setNodes([
                  ...nodesRef.current.slice(0, nodeIndex),
                  {
                    ...nodesRef.current[nodeIndex],
                    data: {
                      ...nodesRef.current[nodeIndex].data,
                      // done: !nodesGlobal[nodeIndex].data,
                      done: !isDone,
                    },
                  },
                  ...nodesRef.current.slice(nodeIndex + 1),
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

const WithNodesState = (Component, nodesRef, setNodes) => {
  return function ({ data, isConnectable, id }) {
    return <Component
      data={data}
      isConnectable={isConnectable}
      id={id}
      nodesRef={nodesRef}
      setNodes={setNodes}
    />
  };
};

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

const Roadmap = (props) => {
  const { id } = props;

  const [nodes, setNodes, onNodesChange] = useNodesState(id === '1' ? initialNodes1 : initialNodes2);
  const [edges, setEdges, onEdgesChange] = useEdgesState(id === '1' ? initialEdges1 : initialEdges2);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const [currentNodeId, setCurrentNodeId] = useState("");
  const [comments, setComments] = useState([]);
  const [localComments, setLocalComments] = useState([]);
  const [toggleComments, setToggleComments] = useState(false);

  const [nodeId, setNodeId] = useState(1);
  const [nodeName, setNodeName] = useState("Node #4354");
  const [nodeBg, setNodeBg] = useState("#eee");
  const [nodeHidden, setNodeHidden] = useState(false);

  const onCommentSubmit = useCallback((text) => {
    if (text) {
      const comment = {
        authorUrl: "#",
        avatarUrl: "https://charity13.ca/wp-content/uploads/2021/05/adult-women.png",
        createdAt: new Date(),
        fullName: "Jamie",
        text: text,
      };

      setLocalComments((prev) => {
        return [
          ...prev,
          comment
        ]
      });
    }
  }, []);

  useEffect(() => {
    setComments(
      nodes?.find((n) => n.id === currentNodeId)
        ?.data?.comments?.length > 0 && toggleComments ?
        [...nodes?.find((n) => n.id === currentNodeId)?.data?.comments, ...localComments] :
        []
    );
  }, [currentNodeId, nodes, toggleComments, localComments]);

  const nodesRef = useRef(nodes);

  useEffect(() => {
    nodesRef.current = nodes;
  }, [nodes, setNodes]);

  const nodeTypes = useMemo(() => {
    return {
      checkboxNode: WithNodesState(WithCheckboxNode, nodesRef, setNodes),
    };
  }, [setNodes]);

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
        setToggleComments((prev) => {
          return !prev;
        });
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
        comments.length > 0 &&
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
              comments={comments}
              isLoggedIn
              styles={{
                comment: base => ({ ...base, textAlign: 'left' }),
              }}
              reactRouter={false}
              onSubmit={text => onCommentSubmit(text)}
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
            <Box sx={{ maxWidth: '20px' }} >
              {
                nodes?.find((n) => n.id === currentNodeId)?.data?.content?.map((i, index) =>
                  <Typography variant="subtitle1" gutterBottom key={index}>
                    {i}
                  </Typography>
                )
              }
            </Box>
          </Container>
        </Box>
      }

    </ReactFlow>
  );
};

export default Roadmap;
