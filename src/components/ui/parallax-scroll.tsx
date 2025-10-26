import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * PARALLAX SCROLL COMPONENT
 *
 * Customization Options:
 * - imageHeight: Controls the height of image containers (default: 'h-96' = 384px)
 *   Options: 'h-80' (320px), 'h-96' (384px), 'h-[500px]' (500px), 'h-[600px]' (600px)
 *
 * - gap: Controls spacing between images (default: 'gap-8')
 *   Options: 'gap-4' (16px), 'gap-6' (24px), 'gap-8' (32px), 'gap-10' (40px)
 *
 * - parallaxSpeed: Controls how fast images move (modify translateFirst/Second/Third values)
 *   Current: [0, -200], [0, 200], [0, -100]
 *   Slower: [0, -100], [0, 100], [0, -50]
 *   Faster: [0, -300], [0, 300], [0, -150]
 *
 * - scrollTrigger: Controls when animation starts (modify offset values)
 *   Current: ["start start", "end start"]
 *   Earlier: ["start end", "end start"]
 *   Later: ["start center", "end start"]
 */

export const ParallaxScroll = ({
  images,
  className,
  imageHeight = "h-96", // Default: 384px - CUSTOMIZE HERE for bigger/smaller containers
  gap = "gap-8", // Default: 32px spacing - CUSTOMIZE HERE for more/less space
}: {
  images: string[];
  className?: string;
  imageHeight?: string;
  gap?: string;
}) => {
  const gridRef = useRef<any>(null);

  // Scroll animation configuration - CUSTOMIZE parallax speed here
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"], // CUSTOMIZE scroll trigger points
  });

  // Parallax translation values - CUSTOMIZE speed by changing the second value in array
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]); // First column moves up
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]); // Second column moves down
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -100]); // Third column moves up (slower)

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, third * 2);
  const thirdPart = images.slice(third * 2);

  return (
    <div
      className={cn("h-[60rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto py-40 px-4 sm:px-6 lg:px-10",
          gap // Apply customizable gap
        )}
      >
        {/* First Column */}
        <div className={cn("grid", gap)}>
          {firstPart.map((el, idx) => (
            <ImageCard
              key={"grid-1-" + idx}
              src={el}
              index={idx}
              translateY={translateFirst}
              imageHeight={imageHeight}
            />
          ))}
        </div>

        {/* Second Column */}
        <div className={cn("grid", gap)}>
          {secondPart.map((el, idx) => (
            <ImageCard
              key={"grid-2-" + idx}
              src={el}
              index={idx}
              translateY={translateSecond}
              imageHeight={imageHeight}
            />
          ))}
        </div>

        {/* Third Column */}
        <div className={cn("grid", gap)}>
          {thirdPart.map((el, idx) => (
            <ImageCard
              key={"grid-3-" + idx}
              src={el}
              index={idx}
              translateY={translateThird}
              imageHeight={imageHeight}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * IMAGE CARD COMPONENT
 * Individual image with scroll animations, hover effects, and responsive sizing
 *
 * Features:
 * - Fade in on scroll (opacity animation)
 * - Scale up on scroll (scale animation)
 * - Hover zoom effect
 * - Smooth parallax motion
 * - Performance optimized with GPU acceleration
 */
interface ImageCardProps {
  src: string;
  index: number;
  translateY: any;
  imageHeight: string;
}

const ImageCard = ({ src, index, translateY, imageHeight }: ImageCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: true, // Animation triggers only once
    amount: 0.3 // Trigger when 30% of card is visible - CUSTOMIZE HERE (0.1 to 1.0)
  });

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      style={{ y: translateY }} // Parallax effect
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 50
      }}
      animate={isInView ? {
        opacity: 1,
        scale: 1,
        y: 0
      } : {}}
      transition={{
        duration: 0.6, // Animation duration - CUSTOMIZE HERE (0.3 to 1.0)
        delay: index * 0.1, // Stagger effect - CUSTOMIZE HERE (0.05 to 0.2)
        ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing curve
      }}
      whileHover={{
        scale: 1.05, // Hover zoom - CUSTOMIZE HERE (1.03 to 1.1)
        transition: { duration: 0.3 }
      }}
      className="relative group cursor-pointer"
    >
      {/* Image Container - Larger size for full photo display */}
      <div className={cn(
        "relative w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300",
        imageHeight // Apply customizable height
      )}>
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}

        {/* Main Image */}
        <motion.img
          src={src}
          className="w-full h-full object-cover" // object-cover maintains aspect ratio
          alt={`Portfolio image ${index + 1}`}
          loading="lazy" // Performance optimization
          onLoad={() => setImageLoaded(true)}
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1, // Image zoom on hover - CUSTOMIZE HERE
            transition: { duration: 0.4 }
          }}
        />

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="absolute bottom-4 left-4 right-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-white"
            >
              <p className="text-sm font-medium">View Project</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
