import { IReferral } from '../models'
import { timeFormatter, currencyFormatter, capitalize } from '../utils'

interface ReferralProps {
  referral: IReferral
}

export function TableRow({ referral }: ReferralProps) {
  return (
    <tr>
      <td className='c-table-cell'>
        <p className='c-table-cell__main-text'>Purchase</p>
        <p className='c-table-cell__second-text'>{timeFormatter(referral.time)}</p>
        <p className='c-table-cell__currency'>{currencyFormatter(referral.price)}</p>
      </td>
      <td>
        <p className='c-table-cell__main-text'>{referral.advocate.email}</p>
        <p>Advocate</p>
      </td>
      <td>
        <p className='c-table-cell__main-text'>{referral.friend.email}</p>
        <p>Friend</p>
      </td>
      <td>
        <p className='c-table-cell__main-text'>{capitalize(referral.referralStatus)}</p>
        {referral.fraud
          ? <p className='c-table-cell__second-text c-table-cell__second-text--red'>Marked as fraud</p>
          : <p className='c-table-cell__second-text'>Passed fraud checks</p>}
      </td>
    </tr>
  )
}