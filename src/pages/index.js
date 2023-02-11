import * as React from "react";

const IndexPage = ({ serverData }) => {
  console.log(serverData);
  return (
     <div>ddd</div>
  );
};

export default IndexPage

export const Head = () => <title>Home Page</title>

export async function getServerData() {
  try {
    const footer = await fetch(`http://192.168.0.204:1330/address`);
    return {
      props: {
        footer: footer,
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

