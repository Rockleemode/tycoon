import React from 'react'
import Link from 'next/link'

const getTickets = async () => {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0
    }
  })
  return await res.json()
}
export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map(ticket => (
        <div key={ticket.id} className=' my-4'>
          <Link href={`/tickets/${ticket.id}`}>
          <div className='card'>
            <h3 className='hover:text-primary text-white'>{ticket.title}</h3>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
          </div>
          </Link>
        </div>
      ))}
    </>
  )
}
