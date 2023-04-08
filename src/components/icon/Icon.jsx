import React from 'react';
import PropTypes from 'prop-types';
import { BsCart2, BsChevronDown, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { IconType } from '../../enum/icon.enum';


const Icon = (props) => {
  const { type } = props;
  const CheckIcon = () => {
    switch (type) {
      case IconType.cart:
        return <BsCart2 className="text-[20px]" />;
      case IconType.chevronDown:
        return <BsChevronDown />;
      case IconType.chevronLeft:
        return <BsChevronLeft />;
      case IconType.chevronRight:
        return <BsChevronRight />;
      default: return <BsCart2 />;
    }
  };
  return (
    <CheckIcon />
  );
};

Icon.propTypes = {
  type: PropTypes.number.isRequired,
};

export default Icon;
