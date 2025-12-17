import { useEffect, useRef, useState } from "react";

export default function LazyVideo({
  src,
  poster,
  className = "",
  autoPlay = true,
}) {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      {...(loaded && autoPlay ? { autoPlay: true } : {})}
    >
      {loaded && <source src={src} type="video/webm" />}
    </video>
  );
}
