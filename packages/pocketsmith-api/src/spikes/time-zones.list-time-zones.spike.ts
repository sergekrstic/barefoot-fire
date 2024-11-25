import { createPocketSmithApi, TimeZone } from '../index'

export async function runScript(pocketSmithApiKey: string): Promise<void> {
  try {
    const api = createPocketSmithApi(pocketSmithApiKey)
    const response = await api.timeZones.timeZonesGet()

    // console.log(response.data)
    printData(response.data)
  } catch (err) {
    console.error(err)
  }
}

function printData(timeZones: TimeZone[]): void {
  console.log('formatted_offset, name')

  for (const timeZone of timeZones) {
    console.log(`${timeZone.formatted_offset}, ${timeZone.name}`)
  }
}
