import React from 'react';
import PropTypes from 'prop-types';
import {
  BsCart2,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsPlus,
} from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { IconType } from '../../enum/icon.enum';

const Icon = (props) => {
  const { type, onClick } = props;
  const { className } = props ?? '';
  const CheckIcon = () => {
    switch (type) {
      case IconType.cart:
        return <BsCart2 className={className} onClick={onClick} />;
      case IconType.chevronDown:
        return <BsChevronDown className={className} onClick={onClick} />;
      case IconType.chevronLeft:
        return <BsChevronLeft className={className} onClick={onClick} />;
      case IconType.chevronRight:
        return <BsChevronRight className={className} onClick={onClick} />;
      case IconType.user:
        return <IoPersonCircleSharp className={className} onClick={onClick} />;
      case IconType.plus:
        return <BsPlus className={className} onClick={onClick} />;
      case IconType.minus:
        return <BiMinus className={className} onClick={onClick} />;
      default:
        return <BiMinus className={className} onClick={onClick} />;
    }
  };
  return <CheckIcon />;
};

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.number,
  onClick: PropTypes.func,
};

export default Icon;
