import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBlueDivRed, toggleBlueDivColor } from '@/redux/colorSlice';
import { Draft } from '@reduxjs/toolkit';

type blueState = Draft<{
    color: {
      blueDivColor: string;
    }
  }>

function ColorToggle() {
  const blueDivColor = useSelector((state: blueState) => state.color.blueDivColor);
  const dispatch = useDispatch();

  const handleGreenDivClick = () => {
    dispatch(setBlueDivRed());
  };

  const handleBlueDivClick = () => {
    dispatch(toggleBlueDivColor());
  };

  const dynamicStyle = {
    backgroundColor: blueDivColor
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <div
        onClick={handleGreenDivClick}
        className="w-32 h-32 bg-green-500 flex items-center justify-center cursor-pointer"
      >
        Click me
      </div>
      <div
        onClick={handleBlueDivClick}
        style={dynamicStyle}
        className={`w-32 h-32 flex items-center justify-center cursor-pointer`}
      >
        Click me
      </div>
    </div>
  );
}

export default ColorToggle;