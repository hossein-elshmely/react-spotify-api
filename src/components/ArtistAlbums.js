import React, { useEffect, useState } from "react"
import { get } from '../utils/api';
import { useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import music from '../images/music.jpeg';
import Header from './Header';
import axios from "axios";


const ArtistAlbum = () => {
  const { id } = useParams();
  const [item, setitems] = useState([]);
 let items;
 let name;
 let result;
  useEffect(() => {
    fetchalbums();
   
  }, []);
  const names = () => {
get(`https://api.spotify.com/v1/artists/${id}`)
    .then((res) => {
      result = res;
      name=result.name
     
     console.log(name)
     this.setState(name)
     setitems("This is data from Parent Component to the Child Component.");
  
    })
  }
    
    
     
  
  

  function fetchalbums() {
    axios
      .get(`https://api.spotify.com/v1/artists/${id}/albums`) 
      .then((res) => {
items=res.data.items;
        
        setitems(items);
      
      })
      .catch((err) => {
     
        
      });
   
  }
  
  return (
   
    <React.Fragment >
      <Header/>
      <h1>Albums : </h1>
      
     {/* <h1>{this.names.name}</h1> */}
      {Object.keys(item).length > 0 && (
        
      <div className="artists">
        
        
        {item.map((item) => (
     
         <React.Fragment >
                
         <Card style={{ width: '18rem' }}>
     
           <a
      
             target="_blank"
             href={item.external_urls.spotify}
             // href={'https://api.spotify.com/v1/artists/'+ artist.id+'/albums'}
             // rel="noopener noreferrer"
             className="card-image-link"
           
       
           >
             
             {!_.isEmpty(item.images) ? (
               <Card.Img 
                     
                 variant="top"
                 src={item.images[0].url}
                 alt=""
               />
             ) : (
               <img src={music} alt=""  />
               
             )}
           </a>
           
           <Card.Body   >
          
             <Card.Title>{item.name}</Card.Title>
             <Card.Text>{item.artists[0].name}</Card.Text>
             

             <Card.Text>
                      <small>
                        {item.release_date}
                      </small>
                    </Card.Text>
            <Card.Text>
            <small>

              {item.total_tracks}tracks
              </small>

              </Card.Text>


 
        
           
             <Link  to={item.external_urls.spotify}
              
               >

<Card.Footer 
         
         href={item.external_urls.spotify}
         // href={'https://api.spotify.com/v1/artists/'+ artist.id+'/albums'}
         // rel="noopener noreferrer"
         className="card-image-link"
             > Priview on Spotify 
             </Card.Footer>

               </Link>
             
          
            
           </Card.Body>
           
         </Card>
         
         
       </React.Fragment>
       
        ))}
      </div>
      )}
  </React.Fragment >
  );
}
 

export default ArtistAlbum;