import { motion as m, useDragControls, useMotionValue, useAnimate, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenuOpen, setMenuOpen } from "@/store/slices/interface_slice";
import { RootState } from "@/store/store";

import useMeasure from "react-use-measure";

type DragAndCloseModalProps = {
    children: React.ReactNode;
};

export default function DragAndCloseModal({ children }: DragAndCloseModalProps) {
    const dispatch = useDispatch();

    const open = useSelector((state: RootState) => state.interface.isMenuOpen);
    const [local_open, set_local_open] = useState(false);
    const set_open_action = (state: boolean) => {
        dispatch(setMenuOpen(state));
    };

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

        set_local_open(false);
        set_open_action(false);
    };

    useEffect(() => {
        if (open) {
            set_local_open(true);
        }

        if (!open && scope.current) {
            handleClose();
        }
    }, [open]);

    return (
        <>
            <AnimatePresence>
                {local_open && (
                    <m.div
                        ref={scope}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
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
