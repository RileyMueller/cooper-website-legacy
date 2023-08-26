import ImageSlider from './ImageSlider';

function CategoryTitle({title}) {
    return (
        <div className='category-title'>
            {title}
        </div>
    );
}

export default function CategorySection({ title, images, offset }) {
    return (
        <div className="category-section">
            <CategoryTitle title={title}/>
            <ImageSlider images={images} offset={offset} />
        </div>
    );
}
