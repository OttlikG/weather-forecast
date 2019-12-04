export const convertToCelsius = (kelvin: number) => Math.round((kelvin - 273.15) * 100) / 100

export const convertUnixToTimestamp = (unix: number) => new Date(unix * 1000)