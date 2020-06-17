import * as amplitude from 'expo-analytics-amplitude'

amplitude.initialize('225054c0f01819af2795f6d89d54f4c3')

export const testandoAmpli = async () => {
  await amplitude.setUserId('0cc82db6-3677')
  await amplitude.logEventWithProperties('view dashboard', {
    'dashboard id': 'id',
    'dashboard load time ms': 200,
    'is owner': false,
  })
}
