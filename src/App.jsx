import { useState } from "react"

// State And Hooks

// state and Hooks:Di React, state adalah nilai yang dapat berubah dan digunakan oleh komponen untuk menampilkan data yang berbeda. Hooks adalah cara untuk membuat state dan fungsi lainnya di dalam komponen fungsional.

// Fungsi setHasLiked adalah fungsi yang digunakan untuk mengupdate nilai state hasLiked. Ketika Anda memanggil setHasLiked(true), nilai hasLiked akan berubah menjadi true. Ketika Anda memanggil setHasLiked(false), nilai hasLiked akan berubah menjadi false.

const Card = ({ title }) => {
    const [hasLiked , setHasLiked] = useState(false);
  return (
    <div className="card">
      <h2>{title}</h2>
      {/* Menggunakan fungsi setHasLiked untuk mengupdate nilai state hasLiked,

      Jika menggunakann !hasLiked, maka akan menghasilkan nilai yang berlawanan dengan nilai sebelumnya. Jika hasLiked adalah true, maka !hasLiked akan menghasilkan false, dan jika hasLiked adalah false, maka !hasLiked akan menghasilkan true. */}
      
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}

function App() {
  return (
    <div classname="card-container">
      <h2>functional Arrow Component</h2>
      {/* Components */}
      <Card title="Spiderman" rating={10} iscool={true}/>
      <Card title="Ironman" />
      <Card title="Thor" />
    </div>
  )
}

export default App
