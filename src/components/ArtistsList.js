import React , {Component} from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';
import { Link } from 'react-router-dom';
import { get } from '../utils/api';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  useParams
} from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import axios from 'axios'
import ArtistAlbums from './ArtistAlbums';



const ArtistsList = ({ artists }) => {

 
  
  return (
    
    
    <React.Fragment >
      
      {Object.keys(artists).length > 0 && (
        
        <div className="artists"
       >
          
          {artists.items.map((artist, index, items) => {
       
       
       const onLinkClick  = () => {
        
    fetch(`https://api.spotify.com/v1/artists/${artist.id}/albums`)
        .then((response) => response.json())
       .then((data) => console.log(data));
       let art=artist.name;
     
       console.log(art)
     
   
  
       
    };
      
            return (
             
              
              <Link  to={`/ArtistAlbums/${artist.id}`  }
             
              onClick={onLinkClick} 
              style={{ textDecoration: 'none',color:'black' }}
               >
          
              <React.Fragment key={index}  >
                
                <Card style={{ width: '18rem' }}
                
                
                >
             
                  <a
             
                    target="_blank"
                    className="card-image-link"
                  
              
                  >
                    
                    {!_.isEmpty(artist.images) ? (
                      <Card.Img 
                            
                        variant="top"
                        src={artist.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={music} alt=""  />
                      
                    )}
                  </a>
                  
                  <Card.Body   >
                 
                    <Card.Title>{artist.name}</Card.Title>
                    <Card.Text>{artist.followers.total} followers</Card.Text>
                    <ReactStars
                          count={5}
value={artist.popularity/20}
                          size={35}
                          activeColor="#ffd700"
                        />
                  </Card.Body>
  
                </Card>
                
              </React.Fragment>
              </Link>
  
            );
          })}
        </div>
      )}
      
    </React.Fragment>
  );
};


export default ArtistsList;
