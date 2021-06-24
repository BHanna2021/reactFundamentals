import { useState } from "react";
import PropTypes from 'prop-types';

const PropsDemo = () => {
    const [ color, setColor ] = useState('white');
    const [ backgroundColor, setBackgroundColor ] = useState('purple');
    const [ borderRadius, setBorderRadius ] = useState('5px');
    const [ borderStyle, setBorderStyle ] = useState('dashed');
    const [ display, setDisplay ] = useState('inline-block');
    const [ width, setWidth ] = useState('350px');
    const [ textAlign, setTextAlign ] = useState('center');

    let styles = {
        color : color,
        backgroundColor : backgroundColor,
        borderRadius : borderRadius,
        borderStyle : borderStyle,
        display : display,
        width : width,
        textAlign : textAlign
        };
        
        const toggleColor = () => {
            color === 'white' ? setColor('pink') : setColor('white');
        };

        const toggleBackColor = () => {
            backgroundColor === 'purple' ? setBackgroundColor('indigo') : setBackgroundColor('purple');
        };

        const toggleBorderStyle = () => {
            borderStyle === 'dashed' ? setBorderStyle('solid') : setBorderStyle('dashed');
        };

        const toggleWidth = () => {
            width === '350px' ? setWidth('700px') : setWidth('350px');
        };

    return(
        <div className='main'>
            <div className='mainDiv'>
                <div style={styles}>
                    <FunctionalComponent />
                    {/* string='Color Toggle' function={toggleColor} selectedStyle={ color }  */}
                    <FunctionalComponent string='Background Color Toggle' function={toggleBackColor} selectedStyle={ backgroundColor } />
                    <FunctionalComponent string='Border Style Toggle' function={toggleBorderStyle} selectedStyle={ borderStyle } />
                    <FunctionalComponent string='Width Toggle' function={toggleWidth} selectedStyle={ width } />
                </div>
            </div>
        </div>
    );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle={ props.selectedStyle } />
        </div>
    );
};

const TinyComponent = (props) => {
    return(
        <div>
            <p>The current style is: { props.selectedStyle }</p>
        </div>
    )
};

FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle: 'what style??'
};

// const MyComponent = (props) => {
//     return(
//         <div>
//             <p>{props.string}</p>
//         </div>
//     );
// };

// const Batman = (props) => {
//     return(
//         <div>
//             <p>{props.string}</p>
//         </div>
//     );
// };

// const Ironman = (props) => {
//     return(
//         <div>
//             <p>{props.string}</p>
//         </div>
//     );
// };

/*  My solution above was to use different component names, they asked for the same name to be used - see below
commenting out my new components and trying their version - same result for either.
import {useState} from 'react';
const PropsDemo = () => {
return(
<div className='main'>
<div className='mainDiv'>
<FunctionalComponent string='will this display?' />
<FunctionalComponent string='props are pretty cool, right?' />
<FunctionalComponent string='you can send data from one component...' />
<FunctionalComponent string='... to another!' />
</div>
</div>
);
};
export default PropsDemo;
const FunctionalComponent = (props) => {
return(
<div>
<p>{props.string}</p>
</div>
);
};
*/