import { useNavigate } from "react-router-dom";


export const Superheroes = ({Superheros}) => {
    const navigate  = useNavigate()

    return (
        <div className="posts-container">
          <span className="title-posts">TUS SUPERHEROES:</span>
          {Array.isArray(Superheros.Superheros) && Superheros.Superheros.map((p) => (
            <UserPostCard
              key={p.id}
              _id={p._id}
              usuario={p.usuario}
              titulo={p.titulo}
              categoria={p.categoria}
              texto={p.texto}
              navigateToPostHandler={handleNavigateToPost}
            />
          ))}
        </div>
      );      
}