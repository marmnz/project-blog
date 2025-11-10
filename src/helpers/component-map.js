import dynamic from "next/dynamic";
import CodeSnippet from "@/components/CodeSnippet/CodeSnippet";

const DivisionGroupsDemo = dynamic(
  () => import("@/components/DivisionGroupsDemo"),
  { ssr: false, loading: () => null }
);

const CircularColorsDemo = dynamic(
  () => import("@/components/CircularColorsDemo"),
  { ssr: false, loading: () => null }
);

const COMPONENT_MAP = {
  pre: (props) => <CodeSnippet {...props}>{props.children}</CodeSnippet>,
  DivisionGroupsDemo,
  CircularColorsDemo,
};

export default COMPONENT_MAP;
