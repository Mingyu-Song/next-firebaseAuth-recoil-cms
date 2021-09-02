import { client } from "../lib/contentful/contentful";
import Text from "components/text/Text";
import Box from "components/box/box";
import Nav from "components/nav/Nav";

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "productList",
  });

  return {
    props: {
      pageContent: res.items,
    },
  };
}
const Heading = Text;

export default function Home(props) {
  return (
    <>
      <Nav />
      <Box
      // mt={["52px", "52px", "5"]}
      ></Box>
    </>
  );
}
