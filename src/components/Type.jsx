import { TypeAnimation } from 'react-type-animation';

function Type() {
  return (
    <TypeAnimation
      sequence={[
        'Backend developer',
        1000, 
        'Analista de sistemas',
        1000,
        'Desarrollo de software',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}

export default Type