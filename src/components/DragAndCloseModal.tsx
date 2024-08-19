import { motion as m, useDragControls, useMotionValue, useAnimate, AnimatePresence } from "framer-motion";
import { useState } from "react";

import useMeasure from "react-use-measure";

type DragAndCloseModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    children: React.ReactNode;
};

export default function DragAndCloseModal({ open, setOpen, children }: DragAndCloseModalProps) {
    const controls = useDragControls();
    const [scope, animate] = useAnimate();
    const y = useMotionValue(0);

    const [drawerRef, { height }] = useMeasure();

    const handleClose = async () => {
        animate(scope.current, {
            opacity: [1, 0],
        });

        const yStart = typeof y.get() === "number" ? y.get() : 0;

        await animate("#drawer", {
            y: [yStart, height],
        });
        setOpen(false);
    };

    return (
        <>
            <AnimatePresence>
                {open && (
                    <m.div
                        ref={scope}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
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
                            transition={{ ease: "easeInOut" }}
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                            style={{ y }}
                            drag="y"
                            dragControls={controls}
                            dragListener={false}
                            dragConstraints={{ top: 0, bottom: 0 }}
                            dragElastic={{ top: 0, bottom: 0.5 }}
                            onDragEnd={() => {
                                if (y.get() > 100) {
                                    handleClose();
                                }
                            }}
                            className="Drawer"
                        >
                            <div className="Drawer_Header">
                                <h3 className="Drawer_Title">menu</h3>
                                <button
                                    className="Drawer_Bar"
                                    onPointerDown={(e) => {
                                        controls.start(e);
                                    }}
                                ></button>
                                <button onClick={handleClose} className="Drawer_Close_Button">
                                    <span className="material-icons">close</span>
                                </button>
                            </div>
                            <div className="Drawer_Content">{children}</div>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}
