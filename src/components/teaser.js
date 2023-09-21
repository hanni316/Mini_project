import React from "react";

function VideoPlayer() {
  // YouTube 임베드 코드
  const embedCode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/oSqK_v6zPoM" frameborder="0" allowfullscreen></iframe>';

  return (
    <div>
      {/* YouTube 임베드 코드를 아래와 같이 dangerouslySetInnerHTML로 삽입합니다. */}
      <div dangerouslySetInnerHTML={{ __html: embedCode }} />
    </div>
  );
}

export default VideoPlayer;
