import './Section.css'

export function Cosy(){
    return (
        <>
            <section className='cosy' id='cosy'>
                <div className="title">
                    <p>Cosy</p>
                </div>
                <article className='left'>Hang around. Enjoy the settings.</article>
                <article className='right'>Use our fast WiFi. Borrow a newspaper or a novel.</article>
                <article className="products">
                    <div className="product">
                        <div className="name">Mon-Sun</div>
                        <div className="price">8am - 11pm</div>
                    </div>
                    <div className="product">
                        <div className="name">Caffe Retro</div>
                        <div className="price">Canto VI</div>
                    </div>
                    <div className="product">
                        <div className="name">0123-45 67 89</div>
                        <div className="price">caffe@lorem.pge</div>
                    </div>
                </article>
            </section>


        </>
    );
}