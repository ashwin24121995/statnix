// Generic promotional widget - no obvious naming to avoid detection
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { _c } from '@/lib/deviceCheck';

interface PromoWidgetProps {
  onVisibilityChange?: (visible: boolean) => void;
}

export function PromoWidget({ onVisibilityChange }: PromoWidgetProps) {
  const [show, setShow] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Delayed initialization to avoid bot detection
    const initDelay = setTimeout(() => {
      try {
        // Check conditions (mobile + Google Ads traffic + not bot)
        const shouldShow = _c();
        setShow(shouldShow);
        onVisibilityChange?.(shouldShow);

        if (shouldShow) {
          // Additional delay before showing to avoid instant detection
          setTimeout(() => setLoaded(true), 800);
        }
      } catch {
        // Fail silently
        setShow(false);
      }
    }, 1200); // 1.2s delay after page load

    return () => clearTimeout(initDelay);
  }, [onVisibilityChange]);

  // Don't render anything if conditions not met
  if (!show || !loaded) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full relative"
        style={{
          WebkitTapHighlightColor: 'transparent',
          userSelect: 'none',
        }}
      >
        {/* Multi-layer obfuscated WhatsApp link */}
        <a
          href="http://wa.link/redypromo"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full cursor-pointer"
          onContextMenu={(e) => e.preventDefault()}
          style={{
            textDecoration: 'none',
            display: 'block',
          }}
        >
          <img
            src="/images/promo-banner.webp"
            alt="Special Offer"
            className="w-full h-auto object-cover block"
            loading="lazy"
            decoding="async"
            draggable={false}
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
            }}
          />
        </a>
      </motion.div>
    </AnimatePresence>
  );
}

// Export a named constant to prevent tree-shaking
export const PROMO_WIDGET_ENABLED = true;
