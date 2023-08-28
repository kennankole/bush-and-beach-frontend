
// import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import Slider from "react-slick";
import PropTypes from 'prop-types';
import { Typography, Input, Textarea, Button } from '@material-tailwind/react';
import { FaRegClock, FaChildren, FaXmark, FaCheck } from 'react-icons/fa6';
import { GoLocation } from 'react-icons/go'
import NavigationMenu from '../features/home-page/NavigationMenu';
import { SafariItenary } from './SafariItenary';
import { included, excluded } from '../data/safari';
import '../assets/styles/Kenya.css';
import { settings } from '../data/safari';

const SafariDetail = ({ images, safariTitle, duration, itenary, formData }) => {


  return (
    <>
      <NavigationMenu />
      <section className="safari-container flex justify-center">
        <div className="safari-inner">
          <Slider {...settings} className="">
            {images.map((image, index) => (
              <div key={index} className="p-1">
                <img src={image.src} alt={`Image ${index + 1}`} className="object-cover object-center carousel-images w-full" />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="safari-details flex flex-wrap justify-between p-2 gap-4">
        <div className="left-details flex flex-col px-6">
          <div className="safari-header">
            <Typography variant="lead" className="font-poppins">
              {safariTitle}
            </Typography>
          </div>
          <div className="safari-location flex items-center gap-5">
            <GoLocation className="iternary-icons" size={30} />
            <Typography className="font-poppins">Kenya</Typography>
          </div>
        </div>
        <div className="right-details flex justify-between gap-8 px-6">
          <div className="duration flex gap-5 items-center">
            <FaRegClock className="iternary-icons" size={30} />
            <div className="text flex flex-col">
              <Typography variant="small" className="font-poppins" >
                Duration
              </Typography>
              <Typography variant="small" className="font-poppins">
                {duration}
              </Typography>
            </div>
          </div>
          <div className="age flex gap-5 items-center">
            <FaChildren className="iternary-icons" size={30} />
            <div className="text flex flex-col">
              <Typography variant="small" className="font-poppins" >
                Min Age
              </Typography>
              <Typography variant="small" className="font-poppins">
                0
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap justify-between form-section">
        <div className="itenary m-5">
          <div className="w-full one p-5">
            <Typography variant="h4" className="font-poppins">
              Itinerary
            </Typography>
            <div>
              <SafariItenary itenary={itenary} />
            </div>
          </div>
          <div className="flex flex-wrap justify-around gap-3 include-exclude py-10">
            <div className="included w-80">
              <Typography variant="h5" className="font-poppins">
                Included
              </Typography>
              {included.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div>
                    <FaCheck size={20} color='green' className="font-bold" />
                  </div>
                  <div className="w-full">
                    <Typography variant="paragraph" className="flex font-poppins ">
                      {item}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
            <div className="excluded w-80">
              <Typography variant="h5" className="font-poppins">
                Excluded
              </Typography>
              {excluded.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div>
                    <FaXmark size={20} color='red' className="font-bold" />
                  </div>
                  <Typography variant="paragraph" className="font-poppins">
                    {item}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="enquiry-form w-96 flex flex-col m-5">
          <div className="price justify-center p-5">
            <div className="flex justify-between">
              <div className="text py-5">
                <Typography variant="paragraph" className="font-poppins font-bold">
                  From as low as
                </Typography>
              </div>
              <div className="amount font-poppins py-5">
                <Typography variant="paragraph" className="font-poppins font-bold price-button">
                  {formData.price}
                </Typography>
              </div>
            </div>
            <Typography variant="small" className="font-poppins font-bold py-3">
              {formData.promoTitle}
            </Typography>
            <Typography variant="small" className="font-poppins py-3 promo-body">
              {formData.promoBody}
            </Typography>
            <div className="py-5">
              <Typography variant="small" className="font-poppins font-bold">
                {formData.callToAction}
              </Typography>
            </div>
            <form className="mt-4 mb-2 w-full">
              <div className="mb-4 flex flex-col gap-6">
                <Input color="blue" label="Enter Name" className="font-poppins" />
                <Input type="email" color="blue" label="Enter email" className="font-poppins" />
                <Textarea label="Message" color="blue" className="font-poppins" />
              </div>
              <Button>Send enquiry</Button>
            </form>
          </div>
        </div>
      </section >
    </>
  );
};

SafariDetail.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  safariTitle: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  itenary: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,

}
export default SafariDetail;
