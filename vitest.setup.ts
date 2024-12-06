import { beforeAll, vi } from 'vitest'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})

beforeAll(() => {
  if (!window.HTMLDialogElement.prototype.showModal) {
    window.HTMLDialogElement.prototype.showModal = vi.fn()
  }

  if (!window.HTMLDialogElement.prototype.close) {
    window.HTMLDialogElement.prototype.close = vi.fn()
  }

  vi.spyOn(window.HTMLDialogElement.prototype, 'showModal').mockImplementation(function () {
    this.open = true
  })
  vi.spyOn(window.HTMLDialogElement.prototype, 'close').mockImplementation(function () {
    this.open = false
  })
})
