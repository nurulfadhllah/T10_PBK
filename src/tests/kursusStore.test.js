import { setActivePinia, createPinia } from 'pinia'
import { useKursusStore } from '../src/stores/kursus'
import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'

vi.mock('axios')

describe('kursus store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('fetchKursus mengisi data kursus', async () => {
    const mockData = [
      { id: 1, judul: 'Vue Dasar' },
      { id: 2, judul: 'Pinia Lanjutan' }
    ]

    axios.get.mockResolvedValue({ data: mockData })

    const store = useKursusStore()
    await store.fetchKursus()

    expect(store.kursus).toEqual(mockData)
    expect(store.totalKursus).toBe(2)
  })
})
