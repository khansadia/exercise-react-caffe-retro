import './Section.css'

export function Juicy(){
    return (
        <>
            <section className='juicy' id='juicy'>
                <div className="title">
                    <p>Juicy</p>
                </div>
                <article className='left'>Ripe fruit - freshly squeezed</article>
                <article className='right'>It's as simple as that. Chunky or smooth - it's your choice</article>
                <article className="products">
                    <div className="product">
                        <div className="name">Branched Apricots</div>
                        <div className="price">€ 4.20</div>
                    </div>
                    <div className="product">
                        <div className="name">Deep Raspberries</div>
                        <div className="price">€ 3.50</div>
                    </div>
                    <div className="product">
                        <div className="name">Smooth Oranges</div>
                        <div className="price">€ 6.50</div>
                    </div>
                </article>
            </section>


        </>
    );
}