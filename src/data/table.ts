import { IReferral } from '../models';

export const referrals: IReferral[] = [
  {
    id: 1,
    time: 1592360025000,
    price: 120,
    advocate: {
      email: 'vijapar846@htoal.com',
    },
    friend: {
      email: 'peham48906@gronasu.com',
    },
    referralStatus:'pending',
    fraud: false,
  },
  {
    id: 2,
    time: 1594379105000,
    price: 100,
    advocate: {
      email: 'fsdfsd@dsfds.sdf',
    },
    friend: {
      email: 'asasdas@ssa.as',
    },
    referralStatus: 'flagged',
    fraud: true,
  },
  {
    id: 3,
    time: 1591731725000,
    price: 28,
    advocate: {
      email: 'toxipir622@hapincy.com',
    },
    friend: {
      email: 'vohag64289@htoal.com',
    },
    referralStatus: 'approved',
    fraud: false,
  },
  {
    id: 4,
    time: 1596799205000,
    price: 100,
    advocate: {
      email: 'pamaci1977@htoal.com',
    },
    friend: {
      email: 'temopo2724@htoal.com',
    },
    referralStatus: 'blocked',
    fraud: true,
  },
  {
    id: 5,
    time: 1591693685000,
    price: 120,
    advocate: {
      email: 'hawen67380@klanze.com',
    },
    friend: {
      email: 'jebibab629@gronasu.com',
    },
    referralStatus: 'voided',
    fraud: true,
  },
]