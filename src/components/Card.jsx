import './Card.css'

// aqua
// lips
// light
// dark
// ash

function Card({myDetails}){
    console.log(`Props --> ${myDetails}`);
    return (
      <>
        <section className="projects-section" id="blogs">
          <div className="category-name">{myDetails.name?.first} {myDetails.name?.last}</div> <br /> 
          <div className="card-category-1">
            <div className="basic-card basic-card-dark">
              <div className="card-content">
                <span className="card-title">{myDetails.name?.email}</span>
                <img className='userImage' src={myDetails.picture?.medium} alt=' ALt user'/>
                <p className="card-text">
                   {myDetails.email}
                </p>
              </div>

              <div className="card-link container-link">
                {/* <a href="#" className="github" title="Github">
                  <span>Github</span>
                </a>
                <a href="" className="live" title="live">
                  <span>Live</span>
                </a> */}
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Card;