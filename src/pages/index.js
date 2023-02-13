import * as React from "react";

const IndexPage = ({ serverData }) => {
  console.log(serverData?.footer?.description);
  return (
     <div>addressLine1:{serverData?.footer?.addressLine1}t</div>
  );
};

export default IndexPage

export const Head = () => <title>Home Page</title>

export async function getServerData() {
  try {
    const footer = await fetch(`https://api.cybercomcreation.com/address`);
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

