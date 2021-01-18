import React from 'react';
import Title from './Title';
import Image from './Image';
import styled from 'styled-components';

function RecipeCard(props) {
  
  return(
        <div>
          <div className="flex align-items-center">
            {props.recipes.map((item, index) => {
              return (
                <Card 
                  key={index} 
                  href={item.photo.medium.url.split('?')[0]}>
                    <Centered>
                    <Image source={item.photo.medium.url.split('?')[0]} text={item.title} />
                    </Centered>

                  <Title title={item.title} />
                </Card> 
              )
          })}
         </div>
         </div>
  )
}

const Card = styled.a`
  max-width: 250px;
	width: 75%;
	display: inline-block;
	border-radius: 3px;
	text-decoration: none;
	color: #000;
	margin: 0 10px 10px;
    box-shadow: 7px 7px 60px -10px rgba(0, 0, 0, .5);
`;

const Centered = styled.div`
display: flex;
justify-content: center;
`

export default RecipeCard;