import TaskStatusIcon from '@/components/Icons/TaskStatusIcon.vue'
import TaskPriorityIcon from '@/components/Icons/TaskPriorityIcon.vue'
import { useDateFormat, useTimeAgo } from '@vueuse/core'
import { usersStore } from '@/stores/users'
import { gemoji } from 'gemoji'
import { toast } from 'frappe-ui'
import { h } from 'vue'

export function createToast(options) {
  toast({
    position: 'bottom-right',
    ...options,
  })
}

export function formatTime(seconds) {
  const days = Math.floor(seconds / (3600 * 24))
  const hours = Math.floor((seconds % (3600 * 24)) / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = Math.floor(seconds % 60)

  let formattedTime = ''

  if (days > 0) {
    formattedTime += `${days}d `
  }

  if (hours > 0 || days > 0) {
    formattedTime += `${hours}h `
  }

  if (minutes > 0 || hours > 0 || days > 0) {
    formattedTime += `${minutes}m `
  }

  formattedTime += `${remainingSeconds}s`

  return formattedTime.trim()
}

export function dateFormat(date, format) {
  const _format = format || 'DD-MM-YYYY HH:mm:ss'
  return useDateFormat(date, _format).value
}

export function timeAgo(date) {
  return useTimeAgo(date).value
}

export const dateTooltipFormat = 'ddd, MMM D, YYYY h:mm A'

export function taskStatusOptions(action, data) {
  return ['Backlog', 'Todo', 'In Progress', 'Done', 'Canceled'].map(
    (status) => {
      return {
        icon: () => h(TaskStatusIcon, { status }),
        label: status,
        onClick: () => action && action(status, data),
      }
    }
  )
}

export function taskPriorityOptions(action, data) {
  return ['Low', 'Medium', 'High'].map((priority) => {
    return {
      label: priority,
      icon: () => h(TaskPriorityIcon, { priority }),
      onClick: () => action && action(priority, data),
    }
  })
}

export function openWebsite(url) {
  window.open(url, '_blank')
}

export function htmlToText(html) {
  const div = document.createElement('div')
  div.innerHTML = html
  return div.textContent || div.innerText || ''
}

export function secondsToDuration(seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const _seconds = Math.floor((seconds % 3600) % 60)

  if (hours == 0 && minutes == 0) {
    return `${_seconds}s`
  } else if (hours == 0) {
    return `${minutes}m ${_seconds}s`
  }
  return `${hours}h ${minutes}m ${_seconds}s`
}

export function formatNumberIntoCurrency(value, currency = 'INR') {
  if (value) {
    return value.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: currency ? currency : 'INR',
    })
  }
  return ''
}

export function startCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function validateEmail(email) {
  let regExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regExp.test(email)
}

export function setupAssignees(data) {
  let { getUser } = usersStore()
  let assignees = data._assign || []
  data._assignedTo = assignees.map((user) => ({
    name: user,
    image: getUser(user).user_image,
    label: getUser(user).full_name,
  }))
}

function getActionsFromScript(script, obj) {
  let scriptFn = new Function(script + '\nreturn setupForm')()
  let formScript = scriptFn(obj)
  return formScript?.actions || []
}

function getStatusFromScript(script, obj) {
  let scriptFn = new Function(script + '\nreturn setupForm')()
  let formScript = scriptFn(obj)
  return formScript?.statuses || []
}

export function setupCustomStatuses(data, obj) {
  if (!data._form_script) return []

  let statuses = []
  if (Array.isArray(data._form_script)) {
    data._form_script.forEach((script) => {
      statuses = statuses.concat(getStatusFromScript(script, obj))
    })
  } else {
    statuses = getStatusFromScript(data._form_script, data)
  }

  data._customStatuses = statuses
}

export function setupCustomActions(data, obj) {
  if (!data._form_script) return []

  let actions = []
  if (Array.isArray(data._form_script)) {
    data._form_script.forEach((script) => {
      actions = actions.concat(getActionsFromScript(script, obj))
    })
  } else {
    actions = getActionsFromScript(data._form_script, obj)
  }

  data._customActions = actions
}

function getActionsFromListScript(script, obj) {
  let scriptFn = new Function(script + '\nreturn setupList')()
  let listScript = scriptFn(obj)
  return {
    actions: listScript?.actions || [],
    bulk_actions: listScript?.bulk_actions || [],
  }
}

export function setupListActions(data, obj = {}) {
  if (!data.list_script) return []

  let actions = []
  let bulkActions = []

  if (Array.isArray(data.list_script)) {
    data.list_script.forEach((script) => {
      let _actions = getActionsFromListScript(script, obj)
      actions = actions.concat(_actions.actions)
      bulkActions = bulkActions.concat(_actions.bulk_actions)
    })
  } else {
    let _actions = getActionsFromListScript(data.list_script, obj)
    actions = _actions.actions
    bulkActions = _actions.bulk_actions
  }

  data.listActions = actions
  data.bulkActions = bulkActions
}

export function errorMessage(title, message) {
  createToast({
    title: title || 'Error',
    text: message,
    icon: 'x',
    iconClasses: 'text-red-600',
  })
}

export function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(show_success_alert)
  } else {
    let input = document.createElement('textarea')
    document.body.appendChild(input)
    input.value = text
    input.select()
    document.execCommand('copy')
    show_success_alert()
    document.body.removeChild(input)
  }
  function show_success_alert() {
    createToast({
      title: 'Copied to clipboard',
      text: text,
      icon: 'check',
      iconClasses: 'text-green-600',
    })
  }
}

export function isEmoji(str) {
  const emojiList = gemoji.map((emoji) => emoji.emoji)
  return emojiList.includes(str)
}

export function isTouchScreenDevice() {
	return "ontouchstart" in document.documentElement;
}

export function convertArrayToString(array) {
  return array.map((item) => item).join(',')
}
