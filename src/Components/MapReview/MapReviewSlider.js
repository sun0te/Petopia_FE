import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const MapReviewSlider = ({ test, setTest, review, reviewImgList }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  const [reviewImgUrl, setReviewImgUrl] = useState([]);

  useEffect(() => {
    setReviewImgUrl(
      reviewImgList.filter((item) => item.review.id === review.id)
    );
  }, []);

  return (
    <>
      <div className="reviewSlideBox">
        <Slider arrows={false} beforeChange={handleSlideChange}>
          {reviewImgUrl.map((fd, i) => (
            <>
              <div className="test14" key={i}>
                <img
                  className="test15"
                  src={process.env.PUBLIC_URL + "/uploadimgs/" + fd.imageUrl}
                  alt="이미지"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </>
          ))}
        </Slider>
        <div className="reviewImgNum">
          {currentSlide + 1}/{reviewImgUrl.length}
        </div>
      </div>
    </>
  );
};

export default MapReviewSlider;
