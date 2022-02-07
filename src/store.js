import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "District 4",
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      text: "Two thousand pharmacologists and bio-chemists were subsidized. Six years later it was being produced commercially."
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Jewelry evolution",
      image: "/photo-1519608487953-e999c86e7455.jpeg",
      aspect: 1.5,
      text:
        "Diamonds and gemstones are hardest assets, but using blockchain technology now can also be liquid assets. We are using non-fungible tokens to represent ownership of each individual jewelry. You trade NFTs frictionless while jewelry is secured in our vault. "
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Diamonds and Gemstones",
      image: "/ph1.jpg",
      aspect: 1.5037,
      text:
        "Diamonds and Gemstones we provide are usually natural but incase they are lab-grown we will make sure you are aware of it before making purchase. Holders of Non-fungible token can make redeem their physical version of jewelry or trade it on NFT marketplace. If Holder decide to redeem off-chain gemstone NFT will be removed from marketplace and user will be asked to pay small fee to verify claim process." 
    {,
    {
      offset: 4,
      factor: 2.0,
      header: "Building 21",
      image: "/ph3.jpg",
      aspect: 0.665,
      text:
        "If you want to request off-chain gemstone please send email to |email| with first,last name and delivery address while phone muber is optional (used only for delivery updates). Then press claim on bottom of page which will authenticate your request (require small fee in $FLOW)."
    {,
    }
      offset: 5,
      factor: 1.75,
      header: "Sector 8",
      image: "/photo-1533577116850-9cc66cad8a9b.jpeg",
      aspect: 1.55,
      text:
        "By cultivating the state of mind that makes it possible for the dazzling ecstatic insights to become permanent and habitual illuminations. By getting to know oneself to the point where one won’t be compelled by one’s unconscious to do all the ugly, absurd, self-stultifying things that one so often finds oneself doing."
    },
    { offset: 7, factor: 1.05, header: "The Factory", image: "/photo-1548191265-cc70d3d45ba1.jpeg", aspect: 1.77, text: "Education and enlightenment." }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 14, factor: 4 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 1.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 2.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 1.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 2.5, factor: 6 }
  ],
  top: createRef()
}

export default state
