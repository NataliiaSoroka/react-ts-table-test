// Currency

export function currencyFormatter(currency: number):string {
  return `${new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(currency)}`;
}

// Date

const shortDate = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone: "America/Los_Angeles"
});

const shortTime = new Intl.DateTimeFormat("en", {
  timeStyle: "short",
  timeZone: "America/Los_Angeles"
});

export function timeFormatter(timestamp: number) :string {
  const date =  shortDate.format(new Date(timestamp))
  const time =  shortTime.format(new Date(timestamp))
  return `${date} at ${time} PDT`
}

// Capitalize

export function capitalize(str: string): string {
  return str.replace(/^./, str[0].toUpperCase())
}