// Lib
import React from 'react';
import YouTube from 'react-youtube';

function VideoContent() {

  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="video_content ctnr_cntr">
    	<div className="content_blk">
        <div className="container">
          <div className="video_blk">
            <div className="intro video_intro">
              <h2 className="intro_title">Schengen visa guide and tips for Filipinos</h2>
              <div className="intro_subtitle">
                <p>
                  Learn how to confidently pass through Philippine immigration with ease.
                </p>
                <p>
                  This guide includes practical tips to avoid offloading and ensure a smooth departure.
                </p>
              </div>
            </div>
            <div className="videos_container">
              <div className="video">
                 <YouTube videoId="LlGa6cjGhqI" opts={opts} />
              </div>
              <div className="video">
                 <YouTube videoId="KeBA6MkLBq4" opts={opts} />
              </div>
              <div className="video">
                 <YouTube videoId="jXt6Q7jtKXA" opts={opts} />
              </div>
              <div className="video">
                 <YouTube videoId="2gZl2kn1avU" opts={opts} />
              </div>
            </div>
          </div>
          <div className="video_blk">
            <div className="intro video_intro">
              <h2 className="intro_title">JMR clients visa success stories</h2>
              <div className="intro_subtitle">
                <p>
                  Real stories from JMR clients who successfully secured their visas.
                </p>
                <p>
                  Be inspired by their journeys, strategies, and visa application experiences.
                </p>
              </div>
            </div>
            <div className="videos_container">
              <div className="video">
                 <YouTube videoId="W6MPPaylic4" opts={opts} />
              </div>
              <div className="video">
                 <YouTube videoId="ff8hV2_7jrY" opts={opts} />
              </div>
              <div className="video">
                 <YouTube videoId="cecVWsZpRNs" opts={opts} />
              </div>
            </div>
          </div>
          <div className="video_blk">
            <div className="intro video_intro">
              <h2 className="intro_title">JMR Philippine immigration tips and guide</h2>
              <div className="intro_subtitle">
                <p>
                  A step-by-step guide to help Filipinos apply for a Schengen visa successfully.
                </p>
                <p>
                  Includes requirements, tips, and common mistakes to avoid during the process.
                </p>
              </div>
            </div>
            <div className="videos_container">
              <div className="video">
                 <YouTube videoId="jbaReDxanl0" opts={opts} />
              </div>
              <div className="video">
                 <YouTube videoId="8n1eANKi9ag" opts={opts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoContent;