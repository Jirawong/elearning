/* global flowplayer */
import React from 'react'

export default class VideoPlayer extends React.Component {

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.url == '') {
            this._initPlayer(nextProps);
        } else {
            this._changeUrl(nextProps);
        }

    }

    _changeUrl(props) {
        flowplayer('#player').load({
            //qualities: ['1080p', '720p'],
            sources: [
                {
                    type: 'application/x-mpegurl',
                    src: props.url
                }
            ]
        }, function () {
            flowplayer('#player').pause();
        });
    }

    _initPlayer(props) {
        flowplayer('#player', {
            clip: {
                //qualities: ['1080p', '720p'],
                sources: [
                    {type: 'application/x-mpegurl', src: props.url}
                ]
            },
            embed: false
        });
    }

    render() {
        return (
            <div id="player"></div>
        );
    }
}