import React from 'react'

const getTicket = async (id) => {
    const res = await fetch('http://localhost:4000/tickets/' +id, {
      next: {
        revalidate: 0
      }
    })
    return await res.json()
  }
export default async function TicketDetail({ params }) {
    const id = params.id
    const ticket = await getTicket(id)
  return (
    <>
    <div className='card'>
    <h2 className='my-4'>{ticket.title}</h2>
    <div>{ticket.body}</div>
    <p>written by <small>{ticket.user_email}</small></p>
    <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
    </div>
    </>
  )
}
