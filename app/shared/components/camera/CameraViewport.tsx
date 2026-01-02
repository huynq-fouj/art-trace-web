import React, { useEffect, useRef, useState } from 'react';
import useCameraControls from '../../hooks/useCameraControls';
import useTranslate from '../../hooks/useTranslate';
import useDrawHistory from '../../hooks/useDrawHistory';

export const CameraViewport: React.FC = () => {
  const { t } = useTranslate();
  const { currentImage, exitCameraMode } = useDrawHistory();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);
  const { opacity, scale, rotation } = useCameraControls();

  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setError("Trình duyệt không hỗ trợ truy cập camera."); 
        return;
      }

      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: 'environment' }
          },
          audio: false,
        });
      } catch (err) {
        console.warn("Environment camera not found, trying fallback...", err);
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
          });
        } catch (fallbackErr) {
          console.error("Error accessing camera:", fallbackErr);
          setError(t.errorAccess);
        }
      }

      if (stream && videoRef.current) {
        videoRef.current.srcObject = stream;
        try {
          await videoRef.current.play();
        } catch (e) {
          console.error("Error playing video:", e);
        }
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [t.errorAccess]);

  if (error) {
    return (
      <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center bg-gray-900">
         <div className="text-white text-center p-6 bg-gray-800 rounded-xl mx-4 max-w-sm">
             <p className="text-red-400 font-bold mb-2">{t.errorCamera}</p>
             <p className="text-sm text-gray-300">{error}</p>
             <button 
                onClick={() => exitCameraMode()}
                className="mt-4 px-4 py-2 bg-gray-700 rounded-lg text-sm hover:bg-gray-600 transition-colors"
             >
               {t.back}
             </button>
          </div>
      </div>
    );
  }

  return (
    <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center bg-gray-900">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {currentImage && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-hidden">
          <img
            src={currentImage}
            alt="Reference"
            style={{
              opacity: opacity,
              transform: `scale(${scale}) rotate(${rotation}deg)`,
              maxWidth: '90%',
              maxHeight: '80%',
            }}
            className="object-contain origin-center"
          />
        </div>
      )}
    </div>
  );
};