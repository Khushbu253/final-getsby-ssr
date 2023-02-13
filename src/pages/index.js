import * as React from "react";
import Layout from "../components/App/Layout";
import Banner from "../components/Index/Banner";
import OurSolutions from "../components/Index/OurSolutions";
import OurServices from "../components/Index/OurServices";
// import OurFeatures from "../components/Index/OurFeatures";
// import RecentProjects from "../components/Index/RecentProjects";
// import Testimonials from "../components/Index/Testimonials";
// import Pricing from "../components/Index/Pricing";
// import Partner from "../components/Index/Partner";
// import OurBlog from "../components/Index/OurBlog";
// import ProjectStartArea from "../components/Index/ProjectStartArea";
import Footer from "../components/App/Footer";

const IndexPage = ({ serverData }) => {
  console.log(serverData,"dddddddd");
  return (
    <Layout pageName="home" seoData={serverData?.seoDetails}>
    <Banner data={serverData?.banner} />
    <OurSolutions
      data={serverData.solution}
      serviceSolutions={serverData.serviceSolutions}
    />
    <OurServices
      servicesOne={serverData.servicesOne}
      // servicesTwo={serverData.servicesTwo}
    />
    {/* <OurFeatures data={serverData.features} /> */}
    {/* <RecentProjects
      recentProjects={serverData.recentProjects}
      projects={serverData.projects}
    /> */}
    {/* <Pricing /> */}
    {/* <Testimonials Testimonials={serverData.Testimonials} /> */}
    {/* <Partner Partner={serverData.Partner} /> */}

    {/* <OurBlog OurBlog={serverData.OurBlog} /> */}
    {/* <ProjectStartArea ProjectStartArea={serverData.ProjectStartArea} />  */}
     <Footer footer={serverData.footer} />
  </Layout>
  );
};

export default IndexPage

export const Head = () => <title>Home Page</title>

export async function getServerData() {
  try {
    // const footer = await fetch(`https://api.cybercomcreation.com/address`);
    const seoDetails = await fetch(`https://api.cybercomcreation.com/seo`);
    const footer = await fetch(`https://api.cybercomcreation.com/address`);
    const banner = await fetch(`https://api.cybercomcreation.com/default-banner`);
    const solution = await fetch(`https://api.cybercomcreation.com/solution`);
    const serviceSolutions = await fetch(
      `https://api.cybercomcreation.com/service-solutions`
    );
    const servicesOne = await fetch(
      `https://api.cybercomcreation.com/services-one`
    );
    // const servicesTwo = await fetch(
    //   `https://api.cybercomcreation.com/services-two`
    // );
    // const features = await fetch(`https://api.cybercomcreation.com/our-features`);
    // const RecentProjects = await fetch(
    //   `https://api.cybercomcreation.com/recent-projects`
    // );
    // const projects = await fetch(`https://api.cybercomcreation.com/projects`);
    // const Testimonials = await fetch(
    //   `https://api.cybercomcreation.com/testimonials`
    // );
    // const Partner = await fetch(`https://api.cybercomcreation.com/partner`);
    // const OurBlog = await fetch(`https://api.cybercomcreation.com/blogs`);
    // const ProjectStartArea = await fetch(
    //   `https://api.cybercomcreation.com/start-your-project`
    // );
    return {
      props: {
        seoDetails: await seoDetails.json(),
        footer: await footer.json(),
        banner: await banner.json(),
        solution: await solution.json(),
        serviceSolutions: await serviceSolutions.json(),
        servicesOne: await servicesOne.json(),
        // servicesTwo: await servicesTwo.json(),
        // features: await features.json(),
        // recentProjects: await RecentProjects.json(),
        // projects: await projects.json(),
        // Testimonials: await Testimonials.json(),
        // Partner: await Partner.json(),
        // OurBlog: await OurBlog.json(),
        // ProjectStartArea: await ProjectStartArea.json(),
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

