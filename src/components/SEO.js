import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({pageName,seoData}) => {
    const currentSeoDetails=seoData?.seoDetails?.find((details)=>details?.pageName===pageName)
    console.log( seoData,"current seo details")
  return(
    <div>
    <Helmet>
        <title>{currentSeoDetails?.pageName}</title>
        <meta name="title" content={currentSeoDetails?.metaTitle}/>
        <meta name="description" content={currentSeoDetails?.metaDescription} />
        <meta name="keywords" content={currentSeoDetails?.metaKeywords}></meta>
        <meta name="og:title" property="og:title" content="Rewy - React Gatsby IT Startup Templates Collection"></meta>
        <meta name="twitter:card" content="Rewy - React Gatsby IT Startup Templates Collection"></meta>
        {/* <link rel="preload"  href="src\assets\images\favicon.ico" type="image/x-icon" as="fetch" crossorigin="anonymous"></link> */}
        <link rel="icon" href="http://www.cybercom.co.in/wp-content/uploads/2013/04/favicon.ico" type="image/x-icon" as="fetch" crossorigin="anonymous"/>
        <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
    </Helmet>
</div>
  )
};

export default SEO;
