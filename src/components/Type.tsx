import { TypeAnimation } from 'react-type-animation';

function Type() {
  return (
    <TypeAnimation
      sequence={[ 
        'Analista de sistemas',
        1000,
        'Desarrollo de software',
        1000
      ]}
      wrapper="span"
      speed={40}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}

export default Type