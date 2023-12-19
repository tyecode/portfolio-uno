import { create } from 'zustand'

type State = {
  current: string
  setSection: (section: string) => void
}

export const useSectionStore = create<State>((set) => ({
  current: 'about',
  setSection: (section) => set({ current: section }),
}))
