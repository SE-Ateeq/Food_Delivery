import React from 'react'
import Layout from "../../Components/Layouts/Layout";
import "../../Styles/HomeStyle.css";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';



function Home() {
  return (
   <>
   <Layout>
      {/*Home section hero banner*/ }
      <Section1 />
       {/*Home section2 about*/ }
       <Section2 />
       {/*Home menu section*/ }
       <Section3 />



   </Layout>
   </>
  )
}

export default Home