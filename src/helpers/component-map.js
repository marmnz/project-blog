import dynamic from "next/dynamic";
import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";

const DivisionGroupsDemo = dynamic(
  () => import("@/components/DivisionGroupsDemo"),
  { ssr: false, loading: () => null }
);

const COMPONENT_MAP = {
  pre: (props) => <CodeSnippet {...props}>{props.children}</CodeSnippet>,
  DivisionGroupsDemo,
};

export default COMPONENT_MAP;
