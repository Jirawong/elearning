/* global flowplayer */
import React from 'react'
import RestService from '../../../services/RestService';

export default class VideoPlayer extends React.Component {

    componentDidMount() {
        this._initPlayer(this.props);

        var self = this;

        flowplayer('#player').on('ready', function () {

            $('.fp-quality-selector').on('click', 'li', function (event) {
                $('.fp-quality-selector>li.active').removeClass('active');
                $(event.target).addClass('active');
                self._changeUrl(self.props, event.target.innerHTML);
            });

        }).on('finish', function () {
            RestService.get('/api/viewer/' + self.props.url)
                .done(function () {
                })
        });
    }

    _changeUrl(props, quality) {
        var currentTime = flowplayer('#player').video.time;
        var defaultQuality = (quality == 'Auto') ? '720' : quality;
        flowplayer('#player').load({
            qualities: props.data.qualities,
            sources: [
                {
                    type: 'application/x-mpegurl',
                    src: 'http://10.1.2.203/' + this.props.uuid + '/' + defaultQuality + 'p.m3u8'
                }
            ]
        }, function () {
            flowplayer('#player').seek(currentTime);
            $('.fp-quality-selector>li.active').removeClass('active');
            $('.fp-quality-selector').find('[data-quality=' + quality + ']').addClass('active');
        });
    }

    _initPlayer(props) {
        flowplayer('#player', {
            clip: {
                qualities: props.data.qualities,
                sources: [
                    {type: 'application/x-mpegurl', src: 'http://10.1.2.203/' + props.data.uuid + '/720p.m3u8'}
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