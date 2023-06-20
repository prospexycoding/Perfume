import qual4 from "../All images/qual 4.png"

export default function Qualities(){
    return(
        <div className="qualities-container">

            <h1>Our Distinctive Qualities</h1>

            <div className="quality-box">
                <div className="left-quality">
                    <span>
                        <h2>Long-Lasting Wear</h2>
                        <p>Our perfumes are designed to last <br/> throughout the day so you <br/>can feel confident that your scent <br/> will stay with you morning <br/> till night.</p>
                    </span>
                    <span>
                        <h2>Sustainable Packaging</h2>
                        <p>We are committed to sustainability <br/> and use environmentally-friendly  <br/>packaging for our perfumes <br/> our bottles are made from <br/>recycled materials.</p>
                    </span>
                </div>

                <div className="middle">
                     <img src={qual4} width={200}/>
                </div>

                <div className="right-quality">
                    <span>
                         <h2>Natural Ingeredient</h2>
                         <p>We use a blend of natural <br/>essential oils and plants extracts <br/> to create   our fregrance ensuring <br/> a pure and authentic scent.</p>
                    </span>
                    <span>
                          <h2>Unique Scents</h2>
                          <p>From floral and woody to citrus<br/>and spicy, we offer a wide <br/> range of scent to suit <br/>every preference our perfumes <br/> are created by skilled perfumers.</p>
                    </span>
                </div>


            </div>

        </div>
    )
}