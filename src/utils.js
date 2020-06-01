// Date Utils
const d = new Date()
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const getTodaysDay = () => days[d.getDay()]

export const getProgress = (count, max) => (count / max) * 100
