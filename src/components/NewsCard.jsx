const NewsCard  = (props) => {
  return (

    <div class="card h-100">
    <img src={props.image} className="card-img-top" alt={props.alt} />
      <div class="card-body">
        <h5 class="card-title"> {props.title} </h5>
        <p class="card-text">{props.text}</p>
      </div>
    </div>

         );
};
    export default NewsCard;