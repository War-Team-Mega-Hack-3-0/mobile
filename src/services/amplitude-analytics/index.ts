import * as amplitude from 'expo-analytics-amplitude'

import { API_KEY } from './amplitudeKey'

amplitude.initialize(API_KEY)

export const testandoAmpli = async () => {
  await amplitude.setUserId('0cc82db6-3677')
  await amplitude.logEventWithProperties('view dashboard', {
    'dashboard id': 'id',
    'dashboard load time ms': 200,
    'is owner': false
  })
}
