import { motion as m, useDragControls, useMotionValue, useAnimate, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setMenuOpen } from "@/store/slices/interface_slice";
import { RootState } from "@/store/store";

import useMeasure from "react-use-measure";

type DragAndCloseModalProps = {
    children: React.ReactNode;
};

export default function DragAndCloseModal({ children }: DragAndCloseModalProps) {
    const dispatch = useDispatch();
    const open = useSelector((state: RootState) => state.interface.isMenuOpen);
    const [local_open, set_local_open] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const controls = useDragControls();
    const [scope, animate] = useAnimate();
    const y = useMotionValue(0);
    const [drawerRef, { height }] = useMeasure();

    const set_open_action = (state: boolean) => {
        dispatch(setMenuOpen(state));
    };

    const handleClose = async () => {
        if (isClosing) return; // Prevent multiple triggers during closing animation
        setIsClosing(true); // Set the closing flag to true

        // Fade out the background
        animate(scope.current, {
            opacity: [1, 0],
        });

        // Slide the drawer down
        const yStart = typeof y.get() === "number" ? y.get() : 0;
        await animate("#drawer", {
            y: [yStart, height],
        });

        // After animation is done, update the local and global state
        set_local_open(false);
        set_open_action(false);
        setIsClosing(false); // Reset the closing flag
    };

    useEffect(() => {
        if (open) {
            set_local_open(true); // Opens the modal
        } else if (!open && local_open && !isClosing && scope.current) {
            handleClose(); // Triggers closing animation if open changes to false
        }
    }, [open]);

    return (
        <>
            <AnimatePresence mode="wait">
                {local_open && (
                    <m.div
                        ref={scope}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="Drawer_Container"
                        onClick={handleClose}
                        key={"drawer_container"}
                    >
                        <m.div
                            key={"drawer"}
                            id="drawer"
                            ref={drawerRef}
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            exit={{ y: "100%" }}
                            transition={{ ease: "easeInOut" }}
                            onClick={(e) => e.stopPropagation()}
                            style={{ y }}
                            drag="y"
                            dragControls={controls}
                            dragListener={false}
                            dragConstraints={{ top: 0, bottom: 0 }}
                            dragElastic={{ top: 0, bottom: 0.5 }}
                            onDragEnd={() => {
                                if (y.get() > 100 && !isClosing) {
                                    // Ensure it doesn't close while animating
                                    handleClose();
                                }
                            }}
                            className="Drawer"
                        >
                            <div className="Drawer_Header">
                                <h3 className="Drawer_Title">menu</h3>
                                <button className="Drawer_Bar" onPointerDown={(e) => controls.start(e)}></button>
                                <m.button whileTap={{ scale: 0.95 }} onClick={handleClose} className="Drawer_Close_Button">
                                    <span className="material-icons">close</span>
                                </m.button>
                            </div>
                            <div className="Drawer_Content">{children}</div>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}
