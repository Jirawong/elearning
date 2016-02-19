/* global flowplayer */
import React from 'react'

export default class VideoPlayer extends React.Component {

    componentDidMount() {
        this._initPlayer(this.props);
    }

    //componentWillReceiveProps(nextProps) {
    //    if (this.props.url == '') {
    //        this._initPlayer(nextProps);
    //    } else {
    //        this._changeUrl(nextProps);
    //    }
    //
    //}

    _changeUrl(props) {
        flowplayer('#player').load({
            //qualities: ['1080p', '720p'],
            sources: [
                {
                    type: 'application/x-mpegurl',
                    src: 'http://10.1.2.203/video-'+this.props.url+'_720p.m3u8'
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
                    {type: 'application/x-mpegurl', src: 'http://10.1.2.203/video-'+this.props.url+'_720p.m3u8'}
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