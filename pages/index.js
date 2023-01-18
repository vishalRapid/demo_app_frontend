import { useTheme, Text } from "@nextui-org/react";
import Head from "next/head";
import Navbar from "../components/navbar/navbar";
export default function MyComponent() {
  const { theme } = useTheme();

  return (
    <div>
      <Head>
        <title>Layer</title>
      </Head>
      <Navbar></Navbar>
    </div>
  );
}
