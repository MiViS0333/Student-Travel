interface TestimonialCardProps {
    image: string;
    name: string;
    review: string;
    rating: number;
}

export default function TestimonialCard({ image, name, review, rating }: TestimonialCardProps) {
    return (
        <div className="testimonial-card mb-32 box-blur-bg">
            <div className="content b-radius-20">
                <img src="/media/icons/comment.png" alt="" className="mb-16 comment-icon" />
                <div className="review">
                    <p>{review}</p>
                    <div className="reviewer">
                        <img src={image} alt={name} className="reviewer-img" />
                        <div>
                            <h6 className="mb-4p">{name}</h6>
                            <div className="rating">
                                {Array.from({ length: rating }, (_, i) => (
                                    <i key={i} className="fa-solid fa-star"></i>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
