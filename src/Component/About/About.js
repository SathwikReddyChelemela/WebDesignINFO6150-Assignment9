
import Card from 'react-bootstrap/Card'

import ChildAbout from './ChildAbout';
import a1 from '../../images/a1.jpeg';
import a5 from '../../images/a5.jpg';
import a6 from '../../images/a6.jpg';
import a8 from '../../images/a8.jpg';
import { useState } from "react";
// import './Home.css';


function About(){

        let [arr,setArr] = useState([
            {
              title:"Mobile Phones",
             
              text: "We've reviewed all the latest handsets, and detailed the best Samsung phones, best iPhones, and best Google Pixel phones elsewhere on CSR Tech Review.",
              image: a1
            },
            {
                title: "Cameras",
                
                 text: "Here you’ll find all of the latest news, reviews, guides and more for anything related to all kinds of cameras, from old-school DSLRs to the latest mirrorless flagships.",
                image: a5
            },

            {
                title: "Gimbals",
               
                 text: "Gimbals are designed to counter-balance the camera's movements at incredibly high speeds. It stabilizes footage effectively.",
                image: a6
            },
            {
                title: "Speakers",
                text: "A wireless speaker system offers the easiest way to listen to music and podcasts. Get speakers for your home and office, including smart speakers",
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
               <h1 class="title">Reviews</h1>
                {arr.map(e=>{
                    return(
                        <ChildAbout title={e.title} text={e.text} image={e.image} />
                    )
                })}
                {/* <Button variant="primary" onClick={handleAwesomeness}>double awesome</Button>{' '} */}
                {/*<ChildUser title="Elephant-1" text="Awesome Elephant" image={elephant1}/>*/}
            </div>
            );
              
              }
      
           
export default About;