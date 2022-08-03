import Main from "./Main";

export default function Card({bookmarked, onbookmark, id}){
    const filterExercise = exercise.filter(exercise => {
        if (filter === 'All') {
            return true;
          }
          if (filter === 'Favorites' && exercise.bookmarked) {
            return true;
          } else {
            return false;
          } 
          filterExercise.map(exercise => (
            <Main onbookmark={onbookmark}
            bookmarked={exercise.bookmarked}
            id={exercise.id}
            key={exercise.id}
          ))
            
    })
};
