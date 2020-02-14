import React from 'react';
import preLoader from "../../../assets/img/loader.svg";



 let preloader = (props) => {
     return <div style={{backgroundColor: 'white'}}>
         <img src={preLoader}/>
     </div>
 }

 export default preloader;