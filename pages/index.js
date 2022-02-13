import Link from "next/link";
import Example from "./my-mdx-page.mdx";

export default function Home() {
  return (
    <>
      <Link href={"/signin"}>
        <button>Signin</button>
      </Link>
      <Example name="jc" year={2022}>
        Home page
      </Example>
    </>
  );
}
