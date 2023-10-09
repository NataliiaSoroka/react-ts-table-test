import { TableRow } from "./TableRow"
import { IReferral } from "../models"

interface ReferralsProps {
  referrals: IReferral[]
}

export function Table({ referrals }: ReferralsProps) {
  return (
    <table className="c-table">
      <thead>
        <tr className="c-table-cell">
          <th><p>Referral event</p></th>
          <th><p>Advocate</p></th>
          <th><p>Friend</p></th>
          <th><p>Referral status</p></th>
        </tr>
      </thead>
      <tbody>
        { referrals.map((referral: IReferral) => <TableRow referral={referral} key={referral.id} />)}
      </tbody>
    </table>
  )
}