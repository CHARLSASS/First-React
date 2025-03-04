// class component and props
// Props
const hasLiked = true;

const Card = ({title})  => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  )
}
function App()  {
  return (
    <div classname="card-container">
      <h2>functional Arrow Component</h2>

      {/* Components */}
      <Card title="Spiderman" rating={10} iscool={true} hasLiked={hasLiked} />
      <Card title="Ironman" />
      <Card title="Thor" />
    </div>
  )
}

export default App
