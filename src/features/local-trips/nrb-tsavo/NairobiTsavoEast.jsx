import SafariDetail from "../../../utils/Safari";
import Footer from "../../footer/Footer";
import { maraImages } from "../../../data/safari";
import { giantSafariIternary, giantSafariPromoAd } from "./data";

const NairobiTsavoEast = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="5Days & 4 Nights"
      safariTitle="5 Days Giants Trail Safari "
      itenary={giantSafariIternary}
      formData={giantSafariPromoAd}
      location="Kenya"
     />
    <Footer />
  </>
);
export default NairobiTsavoEast;