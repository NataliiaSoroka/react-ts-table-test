type ReferralStatus = 'pending'|'flagged'|'approved'|'blocked'|'voided'

export interface IReferral {
  id: number,
  time: number,
  price: number,
  advocate: {
    email: string,
  },
  friend: {
    email: string,
  },
  fraud: boolean,
  referralStatus: ReferralStatus,
}