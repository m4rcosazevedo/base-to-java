import axios from 'axios'
import { settings } from '../../configs/settings'

export const api = axios.create({
  baseURL: settings.API_URL,
  headers: {
    Authorization: ''
  }
})
