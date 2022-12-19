export default function Recipe({
  name = "Mat Kaka",
  comment = "Bara en test...",
}) {

  return (
    <div className="contact">
      <h5 className="contact__name">{name}</h5>
      <h6 className="contact__email">{comment}</h6>
    </div>
  );  
}



 

