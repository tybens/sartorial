import React, { useState, useRef } from 'react'
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position'
import useStyles from './styles'

const HoverImage = ({ img, children }) => {
    
    return (
        <ReactCursorPosition activationInteractionTouch={INTERACTIONS.TOUCH}>
            <HoverImageChildren
                img={img}
                children={children}
            />
        </ReactCursorPosition>
    )
}


const HoverImageChildren = ({ isActive, position, img, children }) => {
    const hoverRef = useRef(null);
    const [offSetInfo, setOffSetInfo] = useState({ top: 0, left: 0, width: 200, height: 300 });
    const [hideImage, setHideImage] = useState(false)
    const classes = useStyles();
    var showImage = (isActive && !hideImage)

    const handleMouseEnterHoverImage = () => {
        if (hoverRef.current) {
            let { offsetTop, offsetLeft, offsetWidth, offsetHeight } = hoverRef.current;
            setOffSetInfo({ top: offsetTop, left: offsetLeft, width: offsetWidth, height: offsetHeight });
        }
    };


    if (showImage && (position.x < 0 || position.y < 0 || position.x > offSetInfo.width || position.y > offSetInfo.height)) {
        // the mouse has left the card div and the image is showing, hide the image
        setHideImage(true)
        // set to false after a 1/10th of a second to allow for re-hovering
        setTimeout(() => {
            setHideImage(false)
        }, 100)
    }

    return (
        <div>
            <div
                className={
                    showImage
                        ? `${classes.hoverImage} ${classes.hovered}`
                        : classes.hoverImage
                }
                style={{
                    background: `rgba(0,0,0,0) url(${img}) no-repeat scroll center center`,
                    top: offSetInfo.top + position.y,
                    left: offSetInfo.left + position.x,
                }}
            />
            <div onMouseEnter={handleMouseEnterHoverImage} ref={hoverRef}>
                {children}
            </div>

        </div>
    )
}

export default HoverImage
