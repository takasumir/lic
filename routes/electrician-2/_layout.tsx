import { PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import Navbar from "../../islands/Navbar.tsx";

export default function Layout({ Component, state }: PageProps) {
  const visible = useSignal(false);
  return (
    <>
      <body>
        <Navbar visible={visible} />
        <Component />
      </body>
    </>
  );
}
