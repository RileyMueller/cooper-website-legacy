import ImageSlider from './ImageSlider';

function CategoryTitle({title}) {
    return (
        <div className='category-title'>
            {title}
        </div>
    );
}

export default function CategorySection({ title, images }) {
    return (
        <div className="category-section">
            <CategoryTitle title={title}/>
            <ImageSlider images={images} />
        </div>
    );
}
