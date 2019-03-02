import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import tinycolor from 'tinycolor2';

import './styles.scss';

class ContainerWrap extends Component {
    render() {
        const brand = '#1386ff';
        const brand5 = tinycolor(brand).darken(5);
        const brand10 = tinycolor(brand).darken(10);
        const rgba = tinycolor(brand).toRgb();

        return (
            <Fragment>
                <Helmet>
                    <style type="text/css">{`
                        :root {
                            --primary-color: ${brand};
                            --primary-color-rgba: ${`${rgba.r}, ${rgba.g}, ${rgba.b}`};
                            --primary-color-hover: ${brand5};
                            --primary-color-active: ${brand10};
                            --primary-text-color: ${tinycolor(brand).isLight() ? '#333' : '#fff'};
                            --primary-text-color-hover: ${tinycolor(brand5).isLight() ? '#333' : '#fff'};
                            --primary-text-color-active: ${tinycolor(brand10).isLight() ? '#333' : '#fff'};
                        }
                    `}</style>
                </Helmet>
                <div className="stories">
                    {this.props.story()}
                </div>
            </Fragment>
        );
    }
}

function TestContainer(props) {
    const TempComponent = withRouter(ContainerWrap);

    return (
        <BrowserRouter>
            <TempComponent {...props} />
        </BrowserRouter>
    )
}

export default class Container extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <TestContainer {...this.props} />
        )
    }
}
