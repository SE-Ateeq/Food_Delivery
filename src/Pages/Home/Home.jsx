import React from 'react'
import Layout from "../../Components/Layouts/Layout";
import "../../Styles/HomeStyle.css";
import Section1 from './Section1';



function Home() {
  return (
   <>
   <Layout>
      {/*Home section hero banner*/ }
      <Section1 />


   </Layout>
   </>
  )
}

export default Home