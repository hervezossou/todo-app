import { motion } from "motion/react";
import IconButton from "../atoms/IconButton"
import { LuTrash2, LuCheck } from "react-icons/lu";
import { MdEdit } from "react-icons/md";

interface TaskActionsProps {
    onEdit?: () => void
    onDelete?: () => void
    onComplete?: () => void
    isDeleteDisabled?: boolean
    className?: string
}

export default function TaskActions({ 
    onEdit = () => console.log("Edit clicked"), 
    onDelete = () => console.log("Delete clicked"), 
    onComplete = () => console.log("Task completed"), 
    isDeleteDisabled = false, 
    className = ""}: TaskActionsProps) {
     return (
        <motion.div 
            initial={{opacity: 0, size: 0.9}}
            animate={{opacity: 1, size: 1}}
            exit={{opacity: 0, size: 0.9}}
            transition={{duration: 0.3}}
            className={`w-max flex items-center gap-5 p-1 border border-neutral-300 rounded-4xl shadow-lg ${className}`}
        >
            <IconButton
                icon={<MdEdit />}
                ariaLabel="Edit the selected task"
                variant="edit"
                size="medium"
                onClick={onEdit}
            />
            <IconButton
                icon={<LuTrash2 />}
                ariaLabel="Delete the selected task"
                variant="delete"
                size="medium"
                onClick={onDelete}
                isDisabled={isDeleteDisabled}
            />
            <IconButton
                icon={<LuCheck />}
                ariaLabel="Mark the selected task as done"
                variant="complete"
                size="medium"
                onClick={onComplete}
            />
        </motion.div>
     )
}