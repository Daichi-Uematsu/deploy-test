import React, { useState, useEffect, createContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { StaggeredMotion, spring } from "react-motion";

const cursorPointerContext = createContext();
const Provider = cursorPointerContext.Provider;
const Consumer = cursorPointerContext.Consumer;

const MouseStalkerBall = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  border-radius: 50%;
  pointer-events: none;
`;

const MouseStalkerBallSmall = styled(MouseStalkerBall)`
  background-color: ${props => props.color};
`;

const MouseStalkerBallLarge = styled(MouseStalkerBall)`
  border: 1px solid ${props => props.color};
`;

const MouseStalker = React.memo(
  ({
    children,
    smallBall,
    largeBall,
    color = "rgba(0, 0, 0, 0.7)",
    target = "mouse-stalker"
  }) => {
    const smallBallDefaultRadius =
      (smallBall && smallBall.default && smallBall.default.radius) || 4;
    const largeBallDefaultRadius =
      (largeBall && largeBall.default && largeBall.default.radius) || 20;
    const largeBallHoverRadius =
      (largeBall && largeBall.hover && largeBall.hover.radius) || 50;

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const [cursorPointer, setCursorPointer] = useState("default");
    const cursorPointerContextValue = { cursorPointer, setCursorPointer };
    const getStyles = prevStyles =>
      prevStyles.map((_, i) => {
        return i === 0
          ? {
              x: mousePos.x,
              y: mousePos.y,
              width: smallBallDefaultRadius * 2,
              height: smallBallDefaultRadius * 2,
              marginLeft: -smallBallDefaultRadius,
              marginTop: -smallBallDefaultRadius
            }
          : {
              x: spring(prevStyles[i - 1].x),
              y: spring(prevStyles[i - 1].y),
              width: spring(
                cursorPointer === "hover"
                  ? largeBallHoverRadius * 2
                  : largeBallDefaultRadius * 2,
                { stiffness: 100, damping: 15 }
              ),
              height: spring(
                cursorPointer === "hover"
                  ? largeBallHoverRadius * 2
                  : largeBallDefaultRadius * 2,
                { stiffness: 100, damping: 15 }
              ),
              marginLeft: spring(
                cursorPointer === "hover"
                  ? -largeBallHoverRadius
                  : -largeBallDefaultRadius,
                { stiffness: 100, damping: 15 }
              ),
              marginTop: spring(
                cursorPointer === "hover"
                  ? -largeBallHoverRadius
                  : -largeBallDefaultRadius,
                { stiffness: 100, damping: 15 }
              )
            };
      });

    useEffect(function() {
      const handleMouseMove = ({ pageX: x, pageY: y }) => {
        setMousePos({ x, y });
      };

      document.body.style.cursor = "none";
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return (
      <React.Fragment>
        <Provider value={cursorPointerContextValue}>{children}</Provider>
        {ReactDOM.createPortal(
          <StaggeredMotion
            defaultStyles={[
              {
                x: 0,
                y: 0,
                width: smallBallDefaultRadius * 2,
                height: smallBallDefaultRadius * 2,
                marginLeft: -smallBallDefaultRadius,
                marginTop: -smallBallDefaultRadius
              },
              {
                x: 0,
                y: 0,
                width: largeBallDefaultRadius * 2,
                height: largeBallDefaultRadius * 2,
                marginLeft: -largeBallDefaultRadius,
                marginTop: -largeBallDefaultRadius
              }
            ]}
            styles={getStyles}
          >
            {balls => (
              <React.Fragment>
                <MouseStalkerBallSmall
                  color={color}
                  style={{
                    width: `${balls[0].width}px`,
                    height: `${balls[0].height}px`,
                    marginLeft: `${balls[0].marginLeft}px`,
                    marginTop: `${balls[0].marginTop}px`,
                    WebkitTransform: `translate3d(${balls[0].x}px, ${
                      balls[0].y
                    }px, 0)`,
                    transform: `translate3d(${balls[0].x}px, ${
                      balls[0].y
                    }px, 0)`
                  }}
                />
                <MouseStalkerBallLarge
                  color={color}
                  style={{
                    width: `${balls[1].width}px`,
                    height: `${balls[1].height}px`,
                    marginLeft: `${balls[1].marginLeft}px`,
                    marginTop: `${balls[1].marginTop}px`,
                    WebkitTransform: `translate3d(${balls[1].x}px, ${
                      balls[1].y
                    }px, 0)`,
                    transform: `translate3d(${balls[1].x}px, ${
                      balls[1].y
                    }px, 0)`
                  }}
                />
              </React.Fragment>
            )}
          </StaggeredMotion>,
          document.getElementById(target)
        )}
      </React.Fragment>
    );
  }
);

MouseStalker.Hoverable = ({ children }) => {
  return (
    <Consumer>
      {({ setCursorPointer }) =>
        React.cloneElement(children, {
          onMouseEnter: () => setCursorPointer("hover"),
          onMouseLeave: () => setCursorPointer("default")
        })
      }
    </Consumer>
  );
};

export default MouseStalker;
