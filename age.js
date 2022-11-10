export function calcAge() {
    const today = new Date()
    const birthDate = new Date("2004, 11, 09")

    let age = today.getFullYear() - birthDate.getFullYear()
    let m = today.getMonth() - birthDate.getMonth()

    const ageIsNew = (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    return (ageIsNew) ? --age : age
}