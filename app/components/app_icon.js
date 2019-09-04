// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
    Image,
    View,
} from 'react-native';

export default class AppIcon extends PureComponent {
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
    };

    render() {
        const style = getStyleSheet(theme);
        let icon;
        icon = (
            <Image
                style={{width: this.props.width, height: this.props.height}}
                source={require('assets/images/logo.png')}
            />
        );
        return (
            <View style={[style.container, {width: this.props.width, height: this.props.height}]}>
                {icon}
            </View>
        );
    }
}
