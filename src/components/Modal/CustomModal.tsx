import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../Utils/generalUtils";
import type { MotionProps } from "framer-motion";

interface ModalProps {
  open: boolean;
  onClose: (e?: any | null) => void;
  children: React.ReactNode;
  className?: string;
  backdropAnimation?: MotionProps; // Customizable animation for the backdrop
  contentAnimation?: MotionProps; // Customizable animation for the content
  contentClassName?: string; // Class for the inner content
  disableInsideClick?: boolean;
}

/**
 * CustomModal component with customizable animations.
 *
 * Add `onClick={(e) => e.stopPropagation()}` in the child div to prevent closing the modal when clicking inside.
 *
 * Example:
 * ```jsx
 * <CustomModal
 *   open={showModal}
 *   onClose={() => setShowModal(false)}
 *   backdropAnimation={{
 *     initial: { opacity: 0 },
 *     animate: { opacity: 1 },
 *     exit: { opacity: 0 },
 *   }}
 *   contentAnimation={{
 *     initial: { opacity: 0, scale: 0.9 },
 *     animate: { opacity: 1, scale: 1 },
 *     exit: { opacity: 0, scale: 0.9 },
 *   }}
 * >
 *   <div>Your content here</div>
 * </CustomModal>
 * ```
 *
 * @param {ModalProps} props - The properties for the modal.
 * @returns {JSX.Element | null} - A modal element with customizable animations.
 */
const CustomModal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  className,
  contentClassName,
  backdropAnimation,
  contentAnimation,
  disableInsideClick = false,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={cn(
            "fixed top-0 left-0 z-[60] flex h-screen w-full items-center justify-center bg-black/50 py-6 backdrop-blur-lg",
            className,
          )}
          {...(backdropAnimation || {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.3 },
          })}
          onClick={onClose}
        >
          {/* Inner content with customizable animation */}
          <motion.div
            {...contentAnimation}
            className={cn(
              "flex w-full items-center justify-center",
              contentClassName,
            )}
            onClick={
              disableInsideClick ? (e) => e.stopPropagation() : undefined
            }
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomModal;
