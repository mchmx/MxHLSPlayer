import { Component, createElement } from "react";
import ReactHlsPLayer from "react-hls-player";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/MXHLSPlayer.css";

export default class MXHLSPlayer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.info('I am rendering');
       
        const { source } = this.props;

        return (
            <ReactHlsPLayer
                src={source.value}
                autoPlay={false}
                controls={true}
                width="100%"
                height="auto"
                /*hlsConfig={
                    {
                        xhrSetup: function(xhr, url) {
                            console.info("I am turning off withCredentials");
                            xhr.withCredentials = false;
                            console.info(xhr);
                            console.info(url); 
                        }
                    }
                }*/
            />
        )
    }
}
