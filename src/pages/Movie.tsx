import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'



const Movie: React.FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  console.log(name);

  return (
    <section>
    </section>
  )
}

export default Movie