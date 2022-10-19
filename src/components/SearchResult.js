import React from 'react';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import ArtistsList from './ArtistsList';


const SearchResult = (props) => {
  const {
    isValidSession,
    result,
   
    selectedCategory
  } = props;
  const { artists } = result;

  if (!isValidSession()) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: {
            session_expired: true
          }
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <div className="search-buttons">
 
        
      
      </div>
  
      <div className={`${selectedCategory === 'artists' ? '' : 'hide'}`}>
        {artists && <ArtistsList artists={artists} />}
      </div>

  
    </React.Fragment>
  );
};

export default SearchResult;
