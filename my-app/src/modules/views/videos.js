// Components
import VideoHero from './view_components/video_hero';
import VideoContent from './view_components/video_content';

function Video() {
  return (
    <div className="view view_video">
      <VideoHero />
      <VideoContent />
    </div>
  )
}

export default Video;