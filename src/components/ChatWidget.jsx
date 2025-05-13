
import { useState } from 'react'

const ChatWidget = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hi! How can I help you?' }])

  const handleUserInput = (e) => {
    e.preventDefault()
    const userInput = e.target.elements.msg.value
    setMessages([...messages, { from: 'user', text: userInput }, { from: 'bot', text: 'This is a mock reply!' }])
    e.target.reset()
  }

  return (
    <div className="fixed bottom-4 right-4">
      {open ? (
        <div className="w-64 bg-white dark:bg-gray-800 p-4 rounded shadow-lg">
          <div className="mb-2 font-bold">Chat with us</div>
          <div className="h-40 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === 'user' ? 'text-right' : 'text-left'}>{msg.text}</div>
            ))}
          </div>
          <form onSubmit={handleUserInput} className="flex gap-1 mt-2">
            <input name="msg" className="flex-grow p-1 rounded border" placeholder="Ask..." />
            <button className="px-2 bg-blue-500 text-white rounded">Send</button>
          </form>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} className="bg-blue-600 text-white p-3 rounded-full shadow-lg">💬</button>
      )}
    </div>
  )
}

export default ChatWidget
