import SafariDetail from "../../../utils/Safari";
import Footer from "../../footer/Footer";
import { maraImages } from "../../../data/safari";
import { highlightIternary, highlightPromoAd } from "./data";

const NairobiOlPajeta = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="6 Days & 5 Nights"
      safariTitle="6 Days Kenya Highlights Safari"
      itenary={highlightIternary}
      formData={highlightPromoAd}
      location="Kenya"
     />
    <Footer />
  </>
);
export default NairobiOlPajeta;