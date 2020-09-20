export default class Counter {
  private timer: number
  private seconds: number
  constructor() {
    this.timer = 0
    this.seconds = 0
  }
  init(): void {
    this.timer = window.setInterval(() => {
      this.seconds += 1
      
    }, 1000)
  }

  getTime(): string {
    const d = this.seconds
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);

    const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    const mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
  }

  clearTimer() {
    clearInterval(this.timer)
    this.seconds = 0
  }
}