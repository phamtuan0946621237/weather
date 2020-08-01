import React from 'react';
import { Image, View } from 'react-native';
// import style from './style';
import { DotOrange, Ellipse, Image1, Image2, Image3, SmallEllipse } from '../../assets';

const BackgroundViewComponent = (props) => {
    // TODO: Variables

    // TODO: Life Cycle

    // TODO: Protocol

    // TODO: Data Handle

    // TODO: Action Handle
    
    // TODO: Layout
    return (
      <>
        <View style={{ height: 300 }}>
        <Image source={Image1} style={{ position: 'absolute', top: -50, left: -130 }} />
        <Image source={Image2} style={{ position: 'absolute', top: 100, left: -40 }} />
        <Image source={Image3} style={{ position: 'absolute', top: 220, left: -150 }} />
        <Image source={DotOrange} style={{ position: 'absolute', top: 50, left: -50 }} />
        <Image source={Ellipse} style={{ position: 'absolute', top: 140, left: 50 }} />
        <Image source={SmallEllipse} style={{ position: 'absolute', top: 220 }} />
      </View> 
      <Image source={Image3} style={{ position: 'absolute', top: 420 }} />
      </>
    );
};

BackgroundViewComponent.defaultProps = {
    
};

export default React.memo(BackgroundViewComponent);

