import React from 'react'
import { TaskType } from './constants'
import tasksToDo from '../assets/tasks-to-do.png'
import tasksToDoGray from '../assets/tasks-to-do-gray.png'
import tasksCompleted from '../assets/tasks-completed.png'
import tasksCompletedGray from '../assets/tasks-completed-gray.png'
import { SideClosedMenuItem, SideOpenedMenuItem } from '../components/SideMenuItem'

export const SideOpenedMenuItemFactory = ({ taskType, selectedItem, children }) => {
    const { icon, redirectTo, selected } = IconMenuItemFactory(taskType, selectedItem)

    return (
        <SideOpenedMenuItem
            sourceIcon={icon}
            redirectTo={redirectTo}
            selected={selected}>
            {children}
        </SideOpenedMenuItem>
    )

}

export const SideClosedMenuItemFactory = ({ taskType, selectedItem }) => {
    const { icon, redirectTo } = IconMenuItemFactory(taskType, selectedItem)

    return (
        <SideClosedMenuItem
            sourceIcon={icon}
            redirectTo={redirectTo} />
    )
}

const IconMenuItemFactory = (taskType, selectedItem) => {
    const selected = taskType === selectedItem

    switch (taskType) {
        case TaskType.COMPLETED:
            return {
                redirectTo: '/completed-tasks',
                icon: selected ? tasksCompleted : tasksCompletedGray,
                selected: selected
            }
        default:
            return {
                redirectTo: '/',
                icon: selected ? tasksToDo : tasksToDoGray,
                selected: selected
            }
    }
}