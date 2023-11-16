import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';
import a1 from '../../images/a1.jpeg';
import a5 from '../../images/a5.jpg';
import a6 from '../../images/a6.jpg';
import a8 from '../../images/a8.jpg';
import ChildHome from './ChildHome';
import { useState } from "react";

function Home(){
  let [arr,setArr] = useState([
    {
      title:"Iphone 15 Pro",
      text: "Newly launched - 9 stars ",
      image: a1
    },
    {
      title:"Canon Camera",
      text: "Photography - 8 stars",
      image: a5
    },
    {
      title:"DJI osmo gimbal",
      text: "Handheld Gimbal - 10 stars",
      image: a6
    },
    {
      title: "JBL",
      text: "Surround sound system - 8 stars",
      image: a8
    }
  ])

  function handleAwesomeness(event){
    event.preventDefault(); 
    var newArr = arr.map(e=>{
        return{
            ...e,
            text: "Double" +e.text,
              
        } 
    })
    setArr(newArr)
}

return(
    //  <div style={{ display: 'inline-block', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
  <div>
       <h1 class="title">CSR Tech Review</h1>
        {arr.map(e=>{
            return(
                <ChildHome title={e.title} text={e.text} image={e.image} />
            )
        })}
        {/* <Button variant="primary" onClick={handleAwesomeness}>double awesome</Button>{' '} */}
        {/*<ChildUser title="Elephant-1" text="Awesome Elephant" image={elephant1}/>*/}
    </div>
    );
      
      }
    
 
export default Home;