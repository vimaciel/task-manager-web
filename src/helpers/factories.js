import React from 'react'
import { TaskType } from './constants'
import tasksToDo from '../assets/tasks-to-do.png'
import tasksToDoGray from '../assets/tasks-to-do-gray.png'
import tasksFinished from '../assets/tasks-finished.png'
import tasksFinishedGray from '../assets/tasks-finished-gray.png'
import { SideClosedMenuItem, SideOpenedMenuItem } from '../components/SideMenuItem'

export const SideOpenedMenuItemFactory = ({ taskType, selected, children }) => {
    const { icon, redirectTo } = IconMenuItemFactory(taskType, selected)
    return (
        <SideOpenedMenuItem
            sourceIcon={icon}
            redirectTo={redirectTo}
            selected={selected}>
            {children}
        </SideOpenedMenuItem>
    )

}

export const SideClosedMenuItemFactory = ({ taskType, selected }) => {
    const { icon, redirectTo } = IconMenuItemFactory(taskType, selected)

    return (
        <SideClosedMenuItem
            sourceIcon={icon}
            redirectTo={redirectTo} />
    )
}

const IconMenuItemFactory = (taskType, selected) => {
    switch (taskType) {
        case TaskType.FINISHED:
            return {
                redirectTo: '/finished-tasks',
                icon: selected ? tasksFinished : tasksFinishedGray
            }
        default:
            return {
                redirectTo: '/',
                icon: selected ? tasksToDo : tasksToDoGray
            }
    }
}