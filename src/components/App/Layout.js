import React from 'react'
// import client from "../../../ApolloClient/client";
// import { ApolloProvider } from "@apollo/react-hooks";
import { RecoilRoot } from 'recoil'
import Navbar from './Navbar';
import Footer from './Footer';
import GoTop from './GoTop';
import SEO from '../SEO';
const Layout = ({ children,pageName,seoData}) => {
  return (
    // <ApolloProvider client={client}>
            <RecoilRoot>
            <Navbar/>
            <SEO pageName={pageName} seoData={seoData}/>
                {children}
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
            {/* <Footer/> */}
            </RecoilRoot>
    // </ApolloProvider>
  )
}

export default Layout