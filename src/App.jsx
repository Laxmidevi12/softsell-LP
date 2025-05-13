
import React, { useState } from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import ChatWidget from './components/ChatWidget'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <button
        className="absolute top-4 right-4 p-2 rounded bg-gray-200 dark:bg-gray-700"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Hero />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </div>
  )
}

export default App
