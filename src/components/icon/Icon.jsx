import React from 'react';
import PropTypes from 'prop-types';
import {
  BsCart2,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
} from 'react-icons/bs';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { IconType } from '../../enum/icon.enum';

const Icon = (props) => {
  const { type } = props;
  const { className } = props ?? '';
  const CheckIcon = () => {
    switch (type) {
      case IconType.cart:
        return <BsCart2 className={className} />;
      case IconType.chevronDown:
        return <BsChevronDown className={className} />;
      case IconType.chevronLeft:
        return <BsChevronLeft className={className} />;
      case IconType.chevronRight:
        return <BsChevronRight className={className} />;
      case IconType.user:
        return <IoPersonCircleSharp className={className} />;
      default:
        return <BsCart2 className={className} />;
    }
  };
  return <CheckIcon />;
};

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.number,
};

export default Icon;
