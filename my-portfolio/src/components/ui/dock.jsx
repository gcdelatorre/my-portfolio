import React, { useRef } from "react";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils"

const DEFAULT_SIZE = 40
const DEFAULT_MAGNIFICATION = 80
const DEFAULT_DISTANCE = 90
const DEFAULT_DISABLEMAGNIFICATION = false

const dockVariants = cva(
  "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md"
)

const DockContext = React.createContext({
  mouseX: null,
  magnification: DEFAULT_MAGNIFICATION,
  distance: DEFAULT_DISTANCE,
  size: DEFAULT_SIZE,
  disableMagnification: DEFAULT_DISABLEMAGNIFICATION,
});

const Dock = React.forwardRef((
  {
    className,
    children,
    iconSize = DEFAULT_SIZE,
    iconMagnification = DEFAULT_MAGNIFICATION,
    disableMagnification = DEFAULT_DISABLEMAGNIFICATION,
    iconDistance = DEFAULT_DISTANCE,
    direction = "middle",
    ...props
  },
  ref
) => {
  const mouseX = useMotionValue(Infinity)

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      return child;
    });
  }

  return (
    <DockContext.Provider
      value={{
        mouseX,
        magnification: iconMagnification,
        distance: iconDistance,
        size: iconSize,
        disableMagnification,
      }}
    >
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        {renderChildren()}
      </motion.div>
    </DockContext.Provider>
  );
});

Dock.displayName = "Dock"

const DockIcon = ({
  size: propSize,
  magnification: propMagnification,
  disableMagnification: propDisableMagnification,
  distance: propDistance,
  mouseX: propMouseX,
  className,
  children,
  ...props
}) => {
  const context = React.useContext(DockContext);

  const size = propSize ?? context.size;
  const magnification = propMagnification ?? context.magnification;
  const disableMagnification = propDisableMagnification ?? context.disableMagnification;
  const distance = propDistance ?? context.distance;
  const mouseX = propMouseX ?? context.mouseX;

  const ref = useRef(null)
  const padding = Math.max(6, size * 0.2)
  const defaultMouseX = useMotionValue(Infinity)

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const targetSize = disableMagnification ? size : magnification

  const sizeTransform = useTransform(distanceCalc, [-distance, 0, distance], [size, targetSize, size])

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        disableMagnification && "hover:bg-muted-foreground transition-colors",
        className
      )}
      {...props}>
      {children}
    </motion.div>
  );
}

DockIcon.displayName = "DockIcon"

export { Dock, DockIcon, dockVariants }
