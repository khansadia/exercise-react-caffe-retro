import './Section.css'

export function Hot(){
    return (
        <>
            <section className='hot' id='hot'>
                <div className="title">
                    <p>Hot</p>
                </div>
                <article className='left'>Hot freshly ground black coffee or a cup of exquisite tea?</article>
                <article className='right'>We give you that perfect cup every time.</article>
                <article className="products">
                    <div className="product">
                        <div className="name">Mocca Latte</div>
                        <div className="price">€ 7.50</div>
                    </div>
                    <div className="product">
                        <div className="name">Caffe Formaggio</div>
                        <div className="price">€ 5.00</div>
                    </div>
                    <div className="product">
                        <div className="name">Espresso</div>
                        <div className="price">€ 3.50</div>
                    </div>
                    <div className="product">
                        <div className="name">Chai Verde Latte</div>
                        <div className="price">€ 5.50</div>
                    </div>
                </article>
            </section>


        </>
    );
}