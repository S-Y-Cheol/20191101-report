import React from 'react';
import PropTypes from 'prop-types';

/*function Alchol({sig, pic}) {
 return (
    <div>
      <h1>{sig}</h1>
      <img src={pic} alt={sig} />
    </div>
 );
}*/

const Alchol =({sig,pic,star}) => {
    return(
    <div>
        <h1>{sig}</h1>
        <h3>{star}/5.0</h3>
        <img src={pic} alt={sig} />
    </div>
    );
};

const booze = [
  {
    id:1,
    rate:4.5,
    name: 'Whiskey',
    image: 'https://makersmarkpersonalize.com/skin/frontend/blacknwhite/makersmark/images/makers-mark.jpeg'
  },
  {
    id:2,
    rate:5.0,
    name: 'Gin',
    image: 'https://jf-aldeiastamargarida.pt/img/drinks/40/tanqueray-no-ten-citrus-garden.png'
  },
  {
    id:3,
    rate:4.7,
    name: 'Vodka',
    image: 'https://www.newamsterdamvodka.com/sites/all/themes/moose/images/homepage_cocktails-module-bg.jpg'
  },
  {
    id:4,
    rate:3.5,
    name: 'Rum',
    image: 'https://file.newswire.co.kr/data/datafile2/thumb_640/2022/02/1026003021_20220210133951_2908992454.jpg'
  },
  {
    id:5,
    rate:4.8,
    name: 'Tequila',
    image: 'https://manofmany.com/wp-content/uploads/2021/11/1800-tequila.png'
  }
];

function App() {
  return (
    <div>
      {booze.map(sp => <Alchol sig={sp.name} key={sp.id} pic={sp.image} star={sp.rate} />)}
    </div>
  );
}

Alchol.propTypes ={
    sig: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired,
    star: PropTypes.number
    
}

export default App;
