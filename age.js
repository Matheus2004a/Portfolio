export function calcAge() {
    const today = new Date()
    const birthDate = new Date("2004, 11, 09")
    const year = birthDate.getFullYear()

    let age = today.getFullYear() - year
    let m = today.getMonth() - birthDate.getMonth()

    const ageIsNew = (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    return (ageIsNew) ? --age : age
}