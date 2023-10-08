"use client";

import React, { useState } from "react";

import { CornerDownRight, MinusSquare, PlusSquare } from "lucide-react";
import Link from "next/link";

export type Item = {
  id: number;
  parent_id: number | null;
  name: string;
  link: string | null;
};

type TreeNode = Item & {
  children?: TreeNode[];
};

type TreeViewProps = {
  data: Item[];
};

const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  const buildTree = (items: Item[]): TreeNode[] => {
    const treeMap: { [key: number]: TreeNode } = {};

    items.forEach((item) => {
      treeMap[item.id] = { ...item, children: [] };
    });

    const tree: TreeNode[] = [];

    items.forEach((item) => {
      if (item.parent_id === null) {
        tree.push(treeMap[item.id]);
      } else {
        const parent = treeMap[item.parent_id];
        if (parent && parent.children) {
          parent.children.push(treeMap[item.id]);
        }
      }
    });

    return tree;
  };

  const [treeData] = useState<TreeNode[]>(buildTree(data));

  const [expandedNodes, setExpandedNodes] = useState<number[]>([]);

  const toggleNode = (nodeId: number) => {
    if (expandedNodes.includes(nodeId)) {
      setExpandedNodes(expandedNodes.filter((id) => id !== nodeId));
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };

  const renderTree = (node: TreeNode) => (
    <div key={node.id}>
      <div className="pl-4">
        {node.link ? (
          <div className="flex gap-2 pl-2">
            <CornerDownRight size={20} />
            <Link
              href={node.link || ""}
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-blue-600 hover:underline cursor-pointer"
            >
              {node.name}
            </Link>
          </div>
        ) : (
          <button
            className="flex items-center space-x-2 cursor-pointer hover:bg-slate-200 px-2 py-1"
            onClick={() => toggleNode(node.id)}
          >
            <span>
              {expandedNodes.includes(node.id) ? (
                <MinusSquare size={20} />
              ) : (
                <PlusSquare size={20} />
              )}
            </span>
            <span>{node.name}</span>
          </button>
        )}
      </div>
      <div className={expandedNodes.includes(node.id) ? "ml-6" : "hidden"}>
        {/* @ts-ignore */}
        {node.children.map(renderTree)}
      </div>
    </div>
  );

  return <div>{treeData.map(renderTree)}</div>;
};

export default TreeView;
