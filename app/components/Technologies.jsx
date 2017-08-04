import React from 'react'

const technologies = [
  { name: 'JavaScript', skillLevel: 'expert' },
  { name: 'HTML5', skillLevel: 'expert' },
  { name: 'CSS3', skillLevel: 'intermediate' },
  { name: 'Less/SASS/SCSS', skillLevel: 'beginner' }
]

const Technologies = () => {
  return (
    <div className="technologies-container">
      {technologies.map((technology, i) => {
        <div className={`${technology.skillLevel} tech-splatter}`}>{technology.name}</div>
      })}
    </div>
  )
}
