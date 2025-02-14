import { motion, AnimatePresence } from "motion/react"
import { useState, useRef, useEffect } from "react"
import TaskActions from "./TaskActions"
import { LuEllipsisVertical } from "react-icons/lu"

export default function DropdownMenu() {
    const [showActions, setShowActions] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    
    const toggleShowActions = () => {
        setShowActions((prev) => !prev)
    } 

    // Ferme le menu si un clic est détecté en dehors du composant
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowActions(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className="relative flex gap-2 mt-8" ref={menuRef}>
            <button 
                className="flex items-center justify-center bg-neutral-600 rounded-lg size-8 hover:bg-neutral-500 transition" 
                aria-expanded={showActions} 
                aria-label="Options menu"
                aria-haspopup="menu"
                onClick={toggleShowActions}
            >
                <LuEllipsisVertical className="text-lg text-white" />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {showActions && (
                    <motion.div
                        initial={{opacity: 0, x: -10, y: 10}}
                        animate={{opacity: 1, x: 0, y: 0}}
                        exit={{opacity: 0, y: 10}}
                        transition={{duration: 0.3}}
                        className="absolute bottom-6 left-8 bg-neutral-600 shadow-lg rounded-2xl p-2"
                    >
                        <TaskActions className="border-none shadow-none" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}