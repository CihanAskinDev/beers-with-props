export default function BeerCard({name, image, avgRating }) {
return (
    <div className="beer-card">
    <div className="beer-image">
    <img src={image} alt={name} 
    onError={(e) =>{
        e.target.onerror = null;
        e.target.src = "https://www.thecarycompany.com/media/catalog/product/3/0/30wlcc_1.jpg?quality=100&fit=bounds&height=700&width=700&canvas=700,700"
    }}
    />
    </div>
    <h2>{name}</h2>
    <p style={{marginTop:0, overflow: "hidden", width: avgRating + "em"}}>⭐️⭐️⭐️⭐️⭐️</p>
    </div>
)
}