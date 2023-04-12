import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RelatedProductCard = ({ dat }) => {
  const [hover, setHover] = useState(false);
  const history = useNavigate();

  const showId = (dat) => {
    history(`/product-info/${dat?.sku ?? ''}`);
    window.location.reload();
  };
  return (
    <>
      <div
        className={`w-[100%] px-3 py-2 flex flex-col ${hover ? 'shadow-lg' : ''} `}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}

        onClick={() => showId(dat)}
      >
        <div className="relative flex flex-col items-center justify-center">
          <img className="" src={dat?.media && (dat?.media[0]?.url)} />
        </div>
        <p className="text-center pb-1 bg-white w-full z-10">{dat?.name ?? ''}</p>
        <p className="text-center pb-1 z-10">{dat?.formattedPrice ?? ''}</p>
      </div>
    </>
  );
};

RelatedProductCard.propTypes = {
  dat: PropTypes.object,
};
export default RelatedProductCard;
