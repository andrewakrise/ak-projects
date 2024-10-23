export const getYouTubeVideoId = (url) => {
  if (!url) return;
  const match = url?.match(
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
  );
  return match ? match[1] : null;
};

export const getVimeoVideoId = (url) => {
  if (!url) return;
  const match = url?.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
};
