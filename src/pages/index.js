import * as React from "react";

const IndexPage = ({ serverData }) => {
  console.log(serverData?.footer?.description);
  return (
     <div>{serverData?.footer?.description}---test</div>
  );
};

export default IndexPage

export const Head = () => <title>Home Page</title>

export async function getServerData() {
  try {
    const footer = await fetch(`https://dummyjson.com/products/1`);
    return {
      props: {
        footer: await footer.json(),
      },
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}

