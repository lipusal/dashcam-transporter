import { GlobalState } from './GlobalState'
import { SMB } from './hometransfer/SMB'
import { RaspiLED } from './RaspiLed'

export class HomeTransfer {
  public static async transferToHome () {
    GlobalState.dashcamTransferDone = false
    RaspiLED.operation = 'HOMETRANSFER'
    await SMB.smbTransferToHome()
  }
}
