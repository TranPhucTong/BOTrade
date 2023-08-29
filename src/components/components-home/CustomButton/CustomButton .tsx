import React, { useState, ReactNode, MouseEvent } from "react";
import styled from "styled-components";

interface HexagonButtonProps {
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
  children: ReactNode;
}

const HexagonButton: React.FC<HexagonButtonProps> = ({ children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  return (
    <StyledHexagonButton
      className={`hexagon-button ${isHovered ? "hovered" : ""}`}
      onClick={onClick}
      onBlur={handleUnhover}
      onFocus={handleHover}
    >
      <div className="hexagon-button-inner">
        <div className="hexagon-button-text">{children}</div>
      </div>
      <div className="hexagon-top-left" />
      <div className="hexagon-top-right" />
      <div className="hexagon-bottom-left" />
      <div className="hexagon-bottom-right" />
    </StyledHexagonButton>
  );
};

const StyledHexagonButton = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;

  &.hovered {
    box-shadow: 0 0 10px 3px #f0f0f0;
  }

  .hexagon-button-inner {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .hexagon-button-text {
    font-size: 16px;
    color: #000;
  }
`;

export default HexagonButton;
